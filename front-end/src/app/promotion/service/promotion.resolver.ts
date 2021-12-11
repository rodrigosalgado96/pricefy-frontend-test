import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Promotion } from 'src/app/shared/models/promotion.model';
import { PromotionService } from './promotion.service';


@Injectable({ providedIn: 'root' })
export class PromotionResolver implements Resolve<Observable<Promotion[]>> {
  constructor(private promotionService: PromotionService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.promotionService.getAllPromotions();
  }
}
