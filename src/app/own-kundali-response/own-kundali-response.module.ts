import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnKundaliResponsePageRoutingModule } from './own-kundali-response-routing.module';

import { OwnKundaliResponsePage } from './own-kundali-response.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnKundaliResponsePageRoutingModule
  ],
  declarations: [OwnKundaliResponsePage]
})
export class OwnKundaliResponsePageModule {}
