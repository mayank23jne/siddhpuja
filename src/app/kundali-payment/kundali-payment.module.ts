import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KundaliPaymentPageRoutingModule } from './kundali-payment-routing.module';

import { KundaliPaymentPage } from './kundali-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KundaliPaymentPageRoutingModule
  ],
  declarations: [KundaliPaymentPage]
})
export class KundaliPaymentPageModule {}
