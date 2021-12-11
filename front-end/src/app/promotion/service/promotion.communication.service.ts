import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PromotionCommunicationService {
  private refreshSPromotionSource = new Subject<any>();

  refreshSPromotionSource$ = this.refreshSPromotionSource.asObservable();

  emmitRefreshSpecialDay(promotion: any) {
    this.refreshSPromotionSource.next(promotion);
  }
}
