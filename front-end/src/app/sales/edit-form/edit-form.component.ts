import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize, switchMap } from 'rxjs';
import * as moment from 'moment';

import { Sales } from 'src/app/shared/models/sale.model';
import {
  dateBeforeToday,
  datesValidator,
} from 'src/app/shared/validators/date.validator';
import { SalesCommunicationService } from '../service/sales.communication.service';
import { SalesService } from '../service/sales.service';
import { numberLengthValidator } from '../service/sales.validator.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  @Output() exitForm = new EventEmitter();
  @Input() sale!: Sales;
  form!: FormGroup;
  categoryOptions: string[] = ['ELETRONICOS', 'BEBIDAS', 'COMIDAS', 'OUTROS'];

  disableStartDate: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private salesService: SalesService,
    private refreshSales: SalesCommunicationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        gtin: [
          this.sale.gtin,
          [Validators.required, numberLengthValidator],
        ],
        description: [this.sale.description, Validators.required],
        category: [this.sale.category, Validators.required],
        regularPrice: [this.sale.regularPrice, Validators.required],
        promotionalPrice: [
          this.sale.promotionalPrice,
          Validators.required,
        ],
        startDate: {
          value: moment(this.sale.startDate, 'DD/MM/YYYY', true).format(),
          disabled: this.checkStartDate(this.sale.startDate),
        },
        endDate: [
          moment(this.sale.endDate, 'DD/MM/YYYY', true).format(),
          Validators.required,
        ],
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

    form.startDate = moment(form.startDate).format('DD/MM/YYYY');
    form.endDate = moment(form.endDate).format('DD/MM/YYYY');

    if (this.form.valid) {
      this.spinner.show();
      this.salesService
        .editSale(this.sale.id, form)
        .pipe(switchMap(() => this.salesService.getAllSales()))
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe((data) => this.refreshSales.emitSales(data));
      this.exitForm.emit();
    }
  }
}
