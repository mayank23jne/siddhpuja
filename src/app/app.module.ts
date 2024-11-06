import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule,HttpClient } from '@angular/common/http';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { SafePipe } from './safe.pipe';

import { EmbedVideo } from 'ngx-embed-video';

import { SharedService } from './SharedSvc.service';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from "@ionic-native/file-opener/ngx";

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

// import { AngularFireAuthModule } from '@angular/fire/auth';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FCM } from '@ionic-native/fcm/ngx';
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'http://siddhpuja.com/Admin/api/lang/', '.json');
  }

@NgModule({
  declarations: [AppComponent,SafePipe],
  entryComponents: [],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
	HttpClientModule,
	// AngularFireAuthModule,
	EmbedVideo.forRoot(),
  FontAwesomeModule,
  TranslateModule.forChild(),
	TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (httpLoaderFactory),
          deps: [HttpClient]
        }
    })
  ],
  providers: [
  StatusBar,
  SplashScreen,
	SocialSharing,
	Geolocation,
	NativeGeocoder,
	BackgroundMode,
  SharedService,
  GooglePlus,
  Facebook,
  File,
  FileTransfer,
  InAppBrowser,
  FileOpener,
  FCM,
	ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],

  
})

export class AppModule {
  
constructor(library: FaIconLibrary) { 
    library.addIconPacks(fas, fab, far);
  }


}
