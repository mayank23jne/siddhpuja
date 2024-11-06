import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuNewPage } from './main-menu-new.page';

const routes: Routes = [
  {
    path: '',
    component: MainMenuNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuNewPageRoutingModule {}
