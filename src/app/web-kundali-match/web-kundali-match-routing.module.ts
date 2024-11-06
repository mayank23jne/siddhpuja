import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebKundaliMatchPage } from './web-kundali-match.page';

const routes: Routes = [
  {
    path: '',
    component: WebKundaliMatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebKundaliMatchPageRoutingModule {}
