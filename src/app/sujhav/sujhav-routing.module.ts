import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SujhavPage } from './sujhav.page';

const routes: Routes = [
  {
    path: '',
    component: SujhavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SujhavPageRoutingModule {}
