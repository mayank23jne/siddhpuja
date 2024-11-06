import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HindiCalendarPage } from './hindi-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: HindiCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HindiCalendarPageRoutingModule {}
