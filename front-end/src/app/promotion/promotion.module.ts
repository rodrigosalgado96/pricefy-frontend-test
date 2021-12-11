import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { PromotionComponent } from './promotion.component';
import { TableModule } from '../shared/components/table/table.module';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { ModalViewModule } from '../shared/components/modal-view/modal-view.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    PromotionComponent,
    AddFormComponent,
    EditFormComponent,
    DeleteFormComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ModalViewModule,
    NgxSpinnerModule
  ],
  providers: [  
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }  
  ],
})
export class PromotionModule {}
