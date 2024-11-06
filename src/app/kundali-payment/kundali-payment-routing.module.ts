import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KundaliPaymentPage } from './kundali-payment.page';

const routes: Routes = [
  {
    path: '',
    component: KundaliPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KundaliPaymentPageRoutingModule {}
