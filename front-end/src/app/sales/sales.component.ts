import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, Subscription } from 'rxjs';

import { Sales } from '../shared/models/sale.model';
import { SalesService } from './service/sales.service';
import { SalesCommunicationService } from './service/sales.communication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit, OnDestroy {
  data!: Sales[];
  refreshSalesSub!: Subscription;

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

  selectedSales!: Sales;
  addModal: boolean = false;
  editModal: boolean = false;
  deleteModal: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private changeDetectorRefs: ChangeDetectorRef,
    private salesService: SalesService,
    private salesCommunicationService: SalesCommunicationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data['salesData'];
    this.communicationRefresh();
  }

  ngOnDestroy(): void {
    this.refreshSalesSub.unsubscribe();
  }

  communicationRefresh() {
    this.refreshSalesSub =
      this.salesCommunicationService.refreshSalesSource$.subscribe(
        (data) => {
          this.data = data;
          this.changeDetectorRefs.detectChanges();
        }
      );
  }

  refreshData() {
    this.spinner.show();
    this.salesService
      .getAllSales()
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
    this.selectedSales = event[0];
    if (event[1] === 'edit') this.showEditForm();
    if (event[1] === 'delete') this.showDeleteModal();
  }
}
