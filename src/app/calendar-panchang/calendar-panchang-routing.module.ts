import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarPanchangPage } from './calendar-panchang.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarPanchangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarPanchangPageRoutingModule {}
