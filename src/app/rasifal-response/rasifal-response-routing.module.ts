import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RasifalResponsePage } from './rasifal-response.page';

const routes: Routes = [
  {
    path: '',
    component: RasifalResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RasifalResponsePageRoutingModule {}
