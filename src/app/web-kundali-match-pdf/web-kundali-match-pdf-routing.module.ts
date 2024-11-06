import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebKundaliMatchPdfPage } from './web-kundali-match-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: WebKundaliMatchPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebKundaliMatchPdfPageRoutingModule {}
