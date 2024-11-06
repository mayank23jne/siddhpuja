import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KundaliMatchPaymentPage } from './kundali-match-payment.page';

const routes: Routes = [
  {
    path: '',
    component: KundaliMatchPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KundaliMatchPaymentPageRoutingModule {}
