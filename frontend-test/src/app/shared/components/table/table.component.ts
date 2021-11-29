import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() config: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
