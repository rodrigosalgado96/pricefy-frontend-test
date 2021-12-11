import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize, switchMap } from 'rxjs';
import * as moment from 'moment'

import { Promotion } from 'src/app/shared/models/promotion.model';
import {
  dateBeforeToday,
  datesValidator,
} from 'src/app/shared/validators/date.validator';
import { PromotionCommunicationService } from '../service/promotion.communication.service';
import { PromotionService } from '../service/promotion.service';
import { numberLengthValidator } from '../service/promotion.validator.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  @Output() exitForm = new EventEmitter();
  @Input() promotion!: Promotion;
  form!: FormGroup;
  categoryOptions: string[] = ['ELETRONICOS', 'BEBIDAS', 'COMIDAS', 'OUTROS'];

  disableStartDate: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private promotionService: PromotionService,
    private refreshPromotion: PromotionCommunicationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        gtin: [
          this.promotion.GTIN,
          [Validators.required, numberLengthValidator],
        ],
        description: [this.promotion.description, Validators.required],
        category: [this.promotion.category, Validators.required],
        regularPrice: [this.promotion.regularPrice, Validators.required],
        promotionalPrice: [
          this.promotion.promotionalPrice,
          Validators.required,
        ],
        startDate: {
          value: moment(this.promotion.startDate, "DD/MM/YYYY", true).format(),
          disabled: this.checkStartDate(this.promotion.startDate),
        },
        endDate: [moment(this.promotion.endDate, "DD/MM/YYYY", true).format(), Validators.required],
      },
      {
        updateOn: 'submit',
        validators: [datesValidator],
      }
    );
    this.checkValidators();
  }

  get gtinField() {
    return this.form.get('gtin');
  }
  get descriptionField() {
    return this.form.get('description');
  }
  get startDate() {
    return this.form.get('startDate');
  }
  get endDate() {
    return this.form.get('endDate');
  }

  categorySetValue(value: any) {
    this.form.controls['category'].setValue(value);
  }

  private checkStartDate(date: string): boolean {
    const today = new Date().getTime();
    const value = new Date(date).getTime();

    return value < today;
  }

  private checkValidators() {
    if (!this.checkStartDate(this.startDate?.value)) {
      this.startDate?.setValidators([Validators.required, dateBeforeToday]);
      this.startDate?.updateValueAndValidity();
    }
  }

  cancel() {
    this.exitForm.emit();
  }

  submit() {
    const form = this.form!.value;

    form.startDate = moment(form.startDate).format("DD/MM/YYYY");
    form.endDate = moment(form.endDate).format("DD/MM/YYYY");

    if (this.form.valid) {
      this.spinner.show();
      this.promotionService
        .editPromotion(this.promotion.id, form)
        .pipe(switchMap(() => this.promotionService.getAllPromotions()))
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe((data) =>
          this.refreshPromotion.emmitRefreshSpecialDay(data)
        );
      this.exitForm.emit();
    }
  }
}
