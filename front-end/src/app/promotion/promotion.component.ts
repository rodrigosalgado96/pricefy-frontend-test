import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, Subscription } from 'rxjs';

import { Promotion } from '../shared/models/promotion.model';
import { PromotionService } from './service/promotion.service';
import { PromotionCommunicationService } from './service/promotion.communication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
})
export class PromotionComponent implements OnInit, OnDestroy {
  data!: Promotion[];
  refreshPromotionSub!: Subscription;

  displayedColumns: string[] = [
    'gtin',
    'description',
    'category',
    'regularPrice',
    'promotionalPrice',
    'startDate',
    'endDate',
    'actions',
  ];

  selectedPromotion!: Promotion;
  addModal: boolean = false;
  editModal: boolean = false;
  deleteModal: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private changeDetectorRefs: ChangeDetectorRef,
    private promotionService: PromotionService,
    private promotionCommunicationService: PromotionCommunicationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data['promotionData'];
    this.communicationRefresh();
  }

  ngOnDestroy(): void {
    this.refreshPromotionSub.unsubscribe();
  }

  communicationRefresh() {
    this.refreshPromotionSub =
      this.promotionCommunicationService.refreshSPromotionSource$.subscribe(
        (data) => {
          this.data = data;
          this.changeDetectorRefs.detectChanges();
        }
      );
  }

  refreshData() {
    this.spinner.show();
    this.promotionService
      .getAllPromotions()
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe((data) => (this.data = data));
  }

  showEditForm() {
    this.editModal = !this.editModal;
  }

  showAddForm() {
    this.addModal = !this.addModal;
  }

  showDeleteModal() {
    this.deleteModal = !this.deleteModal;
  }

  tableEvent(event: any) {
    this.selectedPromotion = event[0];
    if (event[1] === 'edit') this.showEditForm();
    if (event[1] === 'delete') this.showDeleteModal();
  }
}
