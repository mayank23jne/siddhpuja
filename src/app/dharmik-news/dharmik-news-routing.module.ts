import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DharmikNewsPage } from './dharmik-news.page';

const routes: Routes = [
  {
    path: '',
    component: DharmikNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DharmikNewsPageRoutingModule {}
