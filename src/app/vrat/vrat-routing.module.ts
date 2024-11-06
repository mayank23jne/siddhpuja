import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VratPage } from './vrat.page';

const routes: Routes = [
  {
    path: '',
    component: VratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VratPageRoutingModule {}
