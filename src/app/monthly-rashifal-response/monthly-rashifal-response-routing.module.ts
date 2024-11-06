import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyRashifalResponsePage } from './monthly-rashifal-response.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyRashifalResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyRashifalResponsePageRoutingModule {}
