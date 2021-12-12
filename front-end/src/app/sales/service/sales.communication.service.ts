import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Sales } from 'src/app/shared/models/sale.model';

@Injectable({ providedIn: 'root' })
export class SalesCommunicationService {
  private refreshSalesSource = new Subject<any>();

  refreshSalesSource$ = this.refreshSalesSource.asObservable();

  emitSales(sales: Sales[]) {
    this.refreshSalesSource.next(sales);
  }
}
