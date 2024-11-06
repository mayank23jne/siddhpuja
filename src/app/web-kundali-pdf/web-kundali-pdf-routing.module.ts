import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebKundaliPdfPage } from './web-kundali-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: WebKundaliPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebKundaliPdfPageRoutingModule {}
