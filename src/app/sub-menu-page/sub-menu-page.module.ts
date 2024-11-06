import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubMenuPagePageRoutingModule } from './sub-menu-page-routing.module';

import { SubMenuPagePage } from './sub-menu-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubMenuPagePageRoutingModule
  ],
  declarations: [SubMenuPagePage]
})
export class SubMenuPagePageModule {}
