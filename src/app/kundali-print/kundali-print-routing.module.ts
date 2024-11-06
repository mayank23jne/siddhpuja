import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KundaliPrintPage } from './kundali-print.page';

const routes: Routes = [
  {
    path: '',
    component: KundaliPrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KundaliPrintPageRoutingModule {}
