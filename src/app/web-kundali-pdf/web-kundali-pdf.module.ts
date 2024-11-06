import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { WebKundaliPdfPageRoutingModule } from './web-kundali-pdf-routing.module';

import { WebKundaliPdfPage } from './web-kundali-pdf.page';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'http://siddhpuja.com/Admin/api/lang/', '.json');
  }


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebKundaliPdfPageRoutingModule,
    TranslateModule.forChild(),
	  TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (httpLoaderFactory),
          deps: [HttpClient]
        }
    })
  ],
  declarations: [WebKundaliPdfPage]
})
export class WebKundaliPdfPageModule {}