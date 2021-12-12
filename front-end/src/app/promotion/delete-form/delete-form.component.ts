import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, switchMap } from 'rxjs';

import { Promotion } from 'src/app/shared/models/promotion.model';
import { PromotionCommunicationService } from '../service/promotion.communication.service';
import { PromotionService } from '../service/promotion.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss'],
})
export class DeleteFormComponent {
  @Output() exitForm = new EventEmitter();
  @Input() promotion!: Promotion;

  constructor(
    private promotionService: PromotionService,
    private refreshPromotion: PromotionCommunicationService,
    private spinner: NgxSpinnerService
  ) {}

  cancel() {
    this.exitForm.emit();
  }

  confirm() {
    this.spinner.show();
    this.promotionService
      .deletePromotion(this.promotion.id)
      .pipe(switchMap(() => this.promotionService.getAllPromotions()))
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe((data) => this.refreshPromotion.emitPromotions(data));
    this.exitForm.emit();
  }
}
