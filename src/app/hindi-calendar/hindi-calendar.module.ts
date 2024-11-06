import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HindiCalendarPageRoutingModule } from './hindi-calendar-routing.module';

import { HindiCalendarPage } from './hindi-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HindiCalendarPageRoutingModule
  ],
  declarations: [HindiCalendarPage]
})
export class HindiCalendarPageModule {}
