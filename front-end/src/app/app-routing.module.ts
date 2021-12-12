import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalesComponent } from './sales/sales.component';
import { SalesResolver } from './sales/service/sales.resolver';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "sales" },
  {
    path: "sales",
    component: SalesComponent,
    resolve: {
      salesData: SalesResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
