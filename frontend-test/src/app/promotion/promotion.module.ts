import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    PromotionComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class PromotionModule { }
