import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, switchMap } from 'rxjs';

import { Sales } from 'src/app/shared/models/sale.model';
import { SalesCommunicationService } from '../service/sales.communication.service';
import { SalesService } from '../service/sales.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss'],
})
export class DeleteFormComponent {
  @Output() exitForm = new EventEmitter();
  @Input() sale!: Sales;

  constructor(
    private salesService: SalesService,
    private refreshSales: SalesCommunicationService,
    private spinner: NgxSpinnerService
  ) {}

  cancel() {
    this.exitForm.emit();
  }

  confirm() {
    this.spinner.show();
    this.salesService
      .deleteSale(this.sale.id)
      .pipe(switchMap(() => this.salesService.getAllSales()))
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe((data) => this.refreshSales.emitSales(data));
    this.exitForm.emit();
  }
}
