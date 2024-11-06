import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebKundaliPage } from './web-kundali.page';

const routes: Routes = [
  {
    path: '',
    component: WebKundaliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebKundaliPageRoutingModule {}
