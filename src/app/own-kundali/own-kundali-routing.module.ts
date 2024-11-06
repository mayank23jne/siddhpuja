import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnKundaliPage } from './own-kundali.page';

const routes: Routes = [
  {
    path: '',
    component: OwnKundaliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnKundaliPageRoutingModule {}
