import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Promotion } from 'src/app/shared/models/promotion.model';

@Injectable({ providedIn: 'root' })
export class PromotionCommunicationService {
  private refreshSPromotionSource = new Subject<any>();

  refreshSPromotionSource$ = this.refreshSPromotionSource.asObservable();

  emitPromotions(promotion: Promotion[]) {
    this.refreshSPromotionSource.next(promotion);
  }
}
