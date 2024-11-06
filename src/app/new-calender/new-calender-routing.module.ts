import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCalenderPage } from './new-calender.page';

const routes: Routes = [
  {
    path: '',
    component: NewCalenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCalenderPageRoutingModule {}
