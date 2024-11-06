import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParamarshPage } from './paramarsh.page';

const routes: Routes = [
  {
    path: '',
    component: ParamarshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParamarshPageRoutingModule {}
