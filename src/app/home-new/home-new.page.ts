import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FetchServiceService } from '../fetch-service.service';
import { environment } from '../../environments/environment';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Location } from "@angular/common";
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { interval } from 'rxjs';
import { SharedService } from '../SharedSvc.service';
import { EventService } from '../event.service';
import { TranslateService } from '@ngx-translate/core'

declare var $: any;

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.page.html',
  styleUrls: ['./home-new.page.scss'],
})
export class HomeNewPage implements OnInit {
model : any = {};

public badge_no:any;
cat_data1:any = [];
cat_data2:any = [];
cat_data3:any = [];
cat_data4:any = [];
cat_data5:any = [];
cat_data6:any = [];
subscription:any = [];
public _receivedMessages: any; 
public refreshIdHome:any;
public refreshIdHomeng:any;

public  i = 1;
image_url : any;
public menus: any;
public slider: any;
public rate_us:any;
public exit:any;
public rate:any;
public exit_app:any;
public self:any;
public language:any;

slideOpts = {
    zoom: false,
	  autoplay:true
  };
  constructor(private iab:InAppBrowser,private translate: TranslateService,private event: EventService,private http: HttpClient, private router: Router, private fetch: FetchServiceService,private screenOrientation: ScreenOrientation,private platform: Platform,private location: Location,private alertCtrl: AlertController,public sharedSvc: SharedService) { 
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
}
  
  ionViewDidEnter(){
   
    let lang_code = localStorage.getItem('lang_code');
    this.translate.use(lang_code);
    this.language = lang_code;
     this.rate_us = 'RATING';
     this.exit = 'EXIT';
     //var self = this;


     this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
      this.translate.use(lang_code);
      
      });

      this.exit = this.translate.instant(this.exit);
      this.rate_us = this.translate.instant(this.rate_us);
      

    this.subscription = this.platform.backButton.subscribe(()=>{
        this.presentConfirm();
    });
    
      let device_id = JSON.parse(localStorage.getItem('device_token'));

      
      this.refreshIdHome = setInterval(() => {

      this.fetch.notification_count(device_id).subscribe(res => {
             this.badge_no = res.data;
      });
      
      this.sharedSvc.emitMessageReceived(this.badge_no);
     
      }, 500);
     
      this.sharedSvc._OnMessageReceivedSubject.subscribe((r) => {
        // console.log('message received! ', r);
         this.badge_no = r;
      });
     
}


  ngOnInit() {

	let lang_key = localStorage.getItem('lang_key');
	lang_key = JSON.parse(lang_key);
	//console.log(lang_key);
	this.fetch.getNewMenu(lang_key).subscribe(res => {
		console.log(res['data']);
		this.menus = res['data'];
		
	});
	this.fetch.getHomePageSlider().subscribe(res => {
		console.log(res['data']);
		this.slider = res['data'];
		
	});
  }
  
panchnag(){
		var currentTime = new Date();
		var month = currentTime.getMonth() + 1;
		var day = currentTime.getDate();
		var year = currentTime.getFullYear();
		var complete_date = year+"-"+month+"-"+day;
		this.router.navigate(['/panchang']);
  }
  
  
async presentConfirm() {

  const alert = await this.alertCtrl.create({
	cssClass: 'my-custom-class',
    header: this.exit,
    buttons: [
      {
        text: this.exit,
        handler: () => {
           navigator['app'].exitApp();
        }
      },
      {
        text: this.rate_us,
        handler: () => {

			    this.iab.create("https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain");
			
        }
      }
    ]
  });
  await alert.present();
}

ionViewWillLeave(){

      this.subscription.unsubscribe(); 
      clearInterval(this.refreshIdHome);

}



}
