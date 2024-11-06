import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveDarshanPage } from './live-darshan.page';

const routes: Routes = [
  {
    path: '',
    component: LiveDarshanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveDarshanPageRoutingModule {}
