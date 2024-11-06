import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveDarshanVideoPage } from './live-darshan-video.page';

const routes: Routes = [
  {
    path: '',
    component: LiveDarshanVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveDarshanVideoPageRoutingModule {}
