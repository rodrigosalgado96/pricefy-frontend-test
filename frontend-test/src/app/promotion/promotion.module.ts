import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PromotionComponent } from './promotion.component';
import { TableModule } from '../shared/components/table/table.module';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { FormInputModule } from '../shared/components/form-input/form-input.module';



@NgModule({
  declarations: [
    PromotionComponent,
    AddFormComponent,
    EditFormComponent,
    DeleteFormComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    FormInputModule
  ]
})
export class PromotionModule { }
