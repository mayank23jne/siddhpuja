import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratahmPrashnResponsePage } from './pratahm-prashn-response.page';

const routes: Routes = [
  {
    path: '',
    component: PratahmPrashnResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratahmPrashnResponsePageRoutingModule {}
