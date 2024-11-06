import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubMenuPagePage } from './sub-menu-page.page';

const routes: Routes = [
  {
    path: '',
    component: SubMenuPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubMenuPagePageRoutingModule {}
