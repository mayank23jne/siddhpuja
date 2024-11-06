import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FestivalDetailPage } from './festival-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FestivalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FestivalDetailPageRoutingModule {}
