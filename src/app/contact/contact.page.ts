import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'


declare let window: any;
declare var $ : any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
model:any = {};

contact:any;
email:any;
youtube:any;
facebook :any;
twitter:any;
instagram:any;
siddhpuja:any;
contact_us:any;
email_us:any;
language:any;

description:any = [];
  constructor(private translate: TranslateService,private event: EventService,private platform: Platform,private location: Location,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,private socialSharing: SocialSharing,private sanitizer: DomSanitizer) {
	this.platform.backButton.subscribeWithPriority(10, () => {
			this.location.back();
		});
	  }

  ngOnInit() 
  {
  
  
}
ionViewDidEnter(){
  let lang_code = localStorage.getItem('lang_code');
  let lang_key = localStorage.getItem('lang_key');
  this.translate.use(lang_code);
  this.language = lang_code;
  this.siddhpuja = 'SIDDHPUJA';
  this.contact_us = 'CONTACT_US';
  this.email_us = 'EMAIL_US';
 

  this.event.subscribe('language:change', (data: any) => {
    let lang_code = localStorage.getItem('lang_code');
    this.translate.use(lang_code);
    
       
    });
    this.fetch.about_as(lang_key).subscribe(res => {
      console.log(res);
      
      if(res.status == "true"){
  
      this.contact = res.data.contact;
      this.email = res.data.email;
      this.instagram = res.data.instagram;
      this.facebook = res.data.facebook;
      this.youtube = res.data.youtube;
      this.twitter = res.data.twitter;
      this.description = res.data.description;
  
  
      this.description = this.sanitizer.sanitize(SecurityContext.HTML,this.sanitizer.bypassSecurityTrustHtml(this.description));
      }
    });
}

}
