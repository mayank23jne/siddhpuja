import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KundaliPdfPageRoutingModule } from './kundali-pdf-routing.module';

import { KundaliPdfPage } from './kundali-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KundaliPdfPageRoutingModule
  ],
  declarations: [KundaliPdfPage]
})
export class KundaliPdfPageModule {}
