import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KundaliMatchPdfPageRoutingModule } from './kundali-match-pdf-routing.module';

import { KundaliMatchPdfPage } from './kundali-match-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KundaliMatchPdfPageRoutingModule
  ],
  declarations: [KundaliMatchPdfPage]
})
export class KundaliMatchPdfPageModule {}
