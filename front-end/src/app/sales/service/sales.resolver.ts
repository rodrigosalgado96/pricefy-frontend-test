import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Sales } from 'src/app/shared/models/sale.model';
import { SalesService } from './sales.service';


@Injectable({ providedIn: 'root' })
export class SalesResolver implements Resolve<Observable<Sales[]>> {
  constructor(private salesResolver: SalesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.salesResolver.getAllSales();
  }
}
