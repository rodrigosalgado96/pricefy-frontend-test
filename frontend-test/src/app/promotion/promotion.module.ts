import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    PromotionComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PromotionModule { }
