import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'



@Component({
  selector: 'app-rashi',
  templateUrl: './rashi.page.html',
  styleUrls: ['./rashi.page.scss'],
})
export class RashiPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;
  today:any;
  monthly:any;
  yearly:any;

  aries:any;
  taurus:any;
  gemini:any;
  cancer:any;
  leo:any;
  virgo:any;
  libra:any;
  scorpio:any;
  sagittarius:any;
  capricorn:any;
  aquarius:any;
  pisces:any;

  language:any;
  

  constructor(private translate: TranslateService,private event: EventService) {
    

   }

  ngOnInit() {
    
  }
  ionViewDidEnter(){
    let lang_code = localStorage.getItem('lang_code');
    this.translate.use(lang_code);
    this.language = lang_code;
    this.today = 'HORO_TODAY';
    this.monthly = 'HORO_MONTHLY';
    this.yearly = 'HORO_YEARLY';
    this.aries ='ARIES';
    this.taurus ='TAURUS';
    this.gemini ='GEMINI';
    this.cancer ='CANCER';
    this.leo ='LEO';
    this.virgo ='VIRGO';
    this.libra ='LIBRA';
    this.scorpio ='SCORPIO';
    this.sagittarius ='SAGITTARIUS';
    this.capricorn ='CAPRICORN';
    this.aquarius ='AQUARIUS';
    this.pisces ='PISCES';
   

    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
      this.translate.use(lang_code);
      
         
      });
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
   
 

}
