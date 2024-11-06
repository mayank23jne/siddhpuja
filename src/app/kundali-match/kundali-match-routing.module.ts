import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KundaliMatchPage } from './kundali-match.page';

const routes: Routes = [
  {
    path: '',
    component: KundaliMatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KundaliMatchPageRoutingModule {}
