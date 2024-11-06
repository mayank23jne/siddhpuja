import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchMakingPage } from './match-making.page';

const routes: Routes = [
  {
    path: '',
    component: MatchMakingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchMakingPageRoutingModule {}
