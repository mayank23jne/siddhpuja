import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KundaliPdfPage } from './kundali-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: KundaliPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KundaliPdfPageRoutingModule {}
