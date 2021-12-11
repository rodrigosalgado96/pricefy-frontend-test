import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, switchMap } from 'rxjs';
import * as moment from 'moment'

import {
  dateBeforeToday,
  datesValidator,
} from 'src/app/shared/validators/date.validator';
import { PromotionCommunicationService } from '../service/promotion.communication.service';
import { PromotionService } from '../service/promotion.service';
import { numberLengthValidator } from '../service/promotion.validator.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  @Output() exitForm = new EventEmitter();
  form!: FormGroup;
  categoryOptions: string[] = ['ELETRÔNICOS', 'BEBIDAS', 'COMIDAS', 'OUTROS'];

  constructor(
    private formBuilder: FormBuilder,
    private promotionService: PromotionService,
    private refreshPromotion: PromotionCommunicationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        gtin: ['', [Validators.required, numberLengthValidator]],
        description: ['', Validators.required],
        category: ['', Validators.required],
        regularPrice: ['', Validators.required],
        promotionalPrice: ['', Validators.required],
        startDate: ['', [Validators.required, dateBeforeToday]],
        endDate: ['', Validators.required],
      },
      {
        updateOn: 'submit',
        validators: [datesValidator],
      }
    );
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
        .addPromotion(form)
        .pipe(switchMap(() => this.promotionService.getAllPromotions()))
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe((data) =>
          this.refreshPromotion.emmitRefreshSpecialDay(data)
        );
      this.exitForm.emit();
    }
  }
}
