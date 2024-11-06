import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPanchangPageRoutingModule } from './calendar-panchang-routing.module';

import { CalendarPanchangPage } from './calendar-panchang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPanchangPageRoutingModule
  ],
  declarations: [CalendarPanchangPage]
})
export class CalendarPanchangPageModule {}
