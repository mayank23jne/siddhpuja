import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RashiPage } from './rashi.page';

const routes: Routes = [
  {
    path: '',
    component: RashiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RashiPageRoutingModule {}
