import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PromotionComponent } from './promotion/promotion.component';
import { PromotionResolver } from './promotion/service/promotion.resolver';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "promotion" },
  {
    path: "promotion",
    component: PromotionComponent,
    resolve: {
      promotionData: PromotionResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
