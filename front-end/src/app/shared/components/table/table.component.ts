import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Promotion } from '../../models/promotion.model';

@Component({
  selector: 'main-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() data!: Promotion[];
  @Input() config: any;
  @Output() action = new EventEmitter();

  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;


  constructor() {}

  ngOnInit(){
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  emit(promotion: Promotion, action: string) {
    this.action.emit([promotion, action]);
  }

  checkDate(date: string): boolean {
    const currentDate = new Date();
    const endDate = new Date(date);

    return currentDate > endDate ? true : false;
  }
}
