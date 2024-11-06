import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KundaliMatchPdfPage } from './kundali-match-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: KundaliMatchPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KundaliMatchPdfPageRoutingModule {}
