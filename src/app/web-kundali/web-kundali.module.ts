import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebKundaliPageRoutingModule } from './web-kundali-routing.module';

import { WebKundaliPage } from './web-kundali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebKundaliPageRoutingModule
  ],
  declarations: [WebKundaliPage]
})
export class WebKundaliPageModule {}
