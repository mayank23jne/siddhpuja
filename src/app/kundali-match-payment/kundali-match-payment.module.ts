import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KundaliMatchPaymentPageRoutingModule } from './kundali-match-payment-routing.module';

import { KundaliMatchPaymentPage } from './kundali-match-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KundaliMatchPaymentPageRoutingModule
  ],
  declarations: [KundaliMatchPaymentPage]
})
export class KundaliMatchPaymentPageModule {}
