import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnKundaliResponsePage } from './own-kundali-response.page';

const routes: Routes = [
  {
    path: '',
    component: OwnKundaliResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnKundaliResponsePageRoutingModule {}
