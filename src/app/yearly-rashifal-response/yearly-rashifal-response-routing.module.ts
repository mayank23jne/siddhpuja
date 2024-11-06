import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YearlyRashifalResponsePage } from './yearly-rashifal-response.page';

const routes: Routes = [
  {
    path: '',
    component: YearlyRashifalResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YearlyRashifalResponsePageRoutingModule {}
