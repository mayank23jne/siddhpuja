import { Component, OnInit } from '@angular/core';
import { Platform , NavController} from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FetchServiceService } from './fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { MenuController} from '@ionic/angular';
import { EventService } from './event.service';
import { SharedService } from './SharedSvc.service';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {TranslateService} from '@ngx-translate/core'
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser/ngx";
import { FCM } from '@ionic-native/fcm/ngx';

//declare var window: any;
declare var $:any;
declare let window: any;
declare var FCMPlugin: any;
declare let facebookConnectPlugin: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
public cat_data1:any = [];
public user:any;
public showLogout = false;
public showLogin = true;
public showUserName:any = "";
public badge: number;
public badge_no: any;
public device_id: any;
public refreshIntervalId:any;

	cat_data2:any = [];
	cat_data3:any = [];
	cat_data4:any = [];
	cat_data5:any = [];
	cat_data6:any = [];

  public token: string;

  public lang_code: string;



  public selectedIndex = 0;
  public appPages:any;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  selectedChipName: any;

  constructor(
    private fcm: FCM,
	  public toastController: ToastController,
	  private platform: Platform,
	  private googlePlus: GooglePlus,
	  private splashScreen: SplashScreen,
	  private statusBar: StatusBar,
	  private fetch: FetchServiceService,
	  private event: EventService,
	  private route: ActivatedRoute,
	  private router: Router,
	  private backgroundMode: BackgroundMode,
	  private menu: MenuController,
	  public navCtrl: NavController,
	  private socialSharing: SocialSharing,
      public sharedSvc: SharedService,
      private translate: TranslateService,
      private iab: InAppBrowser
  ) {
	
    this.initializeApp();

    if(localStorage.getItem('lang_code') != null){
      this.translate.setDefaultLang(localStorage.getItem('lang_code'));
    }else{
      this.translate.setDefaultLang('hi');
    }
  }
 
initializeApp() 
{

    this.platform.ready().then(() => {
    let lang_code = localStorage.getItem('lang_code');
    if(lang_code){
    this.translate.use(lang_code);
	
    this.router.navigate(['/home-new']);
    }else{
    this.router.navigate(['/language']);
    }

    this.statusBar.styleDefault();
    this.splashScreen.hide();
	  this.statusBar.backgroundColorByHexString('#ff751a');
    });
    //console.log(localStorage.getItem('Sess_name'));
    if(localStorage.getItem('Sess_name')!=null){
      if( localStorage.getItem('login_type') == 'google'){
      this.getSidebar("google");
	  }
	  else{
		  this.getSidebar("login");
	  }
      this.showLogout = true;
    }else
    {
      this.getSidebar("not-login");
      this.showLogout = false;
    }
    
    this.event.subscribe('user:login', (data: any) => {
      
      this.showLogout = true;
      this.showLogin = false;
	  
      
	  if( localStorage.getItem('login_type') == 'google'){
      this.getSidebar("google");
	  }else{
		  this.getSidebar("login");
	  }
   
    
    });
    
    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
      this.translate.use(lang_code);
     
    });
	
}

async logoutToast() {
    const toast = await this.toastController.create({
      message: 'Sign out successfully.',
      position: 'top',
      color:'danger',
      duration: 2000
    });
    toast.present();
  }
getSidebar(a){
	
  if(a == 'login'){
    this.appPages = [
    {
      title: localStorage.getItem('Sess_name'),
      icon: 'person'
    },
	{
      title: 'HOME',
      url: '/home-new',
      icon: 'home'
    },
    {
      title: 'CHOOSE_LANGUAGE',
      url: '/language',
      icon: 'information-circle'
    },
  {
      title: 'ABOUT',
      url: '/contact',
      icon: 'information-circle'
    },
  {
      title: 'SUJHAAV',
      url: '/sujhav',
      icon: 'information-circle'
    },
  
  ];
  }
  else if(a == 'google' || a == 'facebook' ){
    this.appPages = [
	{
      title: localStorage.getItem('Sess_name'),
      icon: 'person'
    },
    {
      title: 'HOME',
      url: '/home-new',
      icon: 'home'
    },
    {
      title: 'CHOOSE_LANGUAGE',
      url: '/language',
      icon: 'information-circle'
    },
	{
      title: 'ABOUT',
      url: '/contact',
      icon: 'information-circle'
    },
	{
      title: 'SUJHAAV',
      url: '/sujhav',
      icon: 'information-circle'
    },
  
  ];
  }
  
  else{
    this.appPages = [
    {
      title: 'SIGN_IN',
      url: '/signin',
      icon: 'log-in'
    },
    {
      title: 'HOME',
      url: '/home-new',
      icon: 'home'
    },
	{
      title: 'CHOOSE_LANGUAGE',
      url: '/language',
      icon: 'information-circle'
    },
	{
      title: 'ABOUT',
      url: '/contact',
      icon: 'information-circle'
    },
	{
      title: 'SUJHAAV',
      url: '/sujhav',
      icon: 'information-circle'
    },
  
  ];
  }
}
  

ngOnInit() {
    this.hideButton();
    this.router.navigate(['/language']);
    
    const path = window.location.pathname.split('folder/')[1];
    
    let user = localStorage.getItem('Sess_name');
    this.user = user;
    
    if(user){
      $("#menu_/signin").css("display", "none");
    }
   
    if (path !== undefined) {
		 this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());

    }else{
        let lang_code = localStorage.getItem('lang_code');
        if(lang_code){
          this.translate.use(lang_code);
          this.selectedIndex = 1;
        }else{
          this.selectedIndex = 2;
        }
    }
    
  	this.backgroundMode.enable();
  	var self = this;
  	document.addEventListener('deviceready', () => {
		
      FCMPlugin.getToken((token: any) => {
      localStorage.setItem('device_token', JSON.stringify(token));
			self.fetch.fcm_token(token).subscribe(res => {
			
			});
      });

      FCMPlugin.onNotification((data: any) => {
  		
      let device_id = JSON.parse(localStorage.getItem('device_token'));

      let n_id = data.notification_id;
        
      if (data.wasTapped) 
        {
         
          var message = JSON.parse(data.message);
		      if(data.notification_route == null)
          {
					self.router.navigate(['/notification']);

  				}else{

          let data_update = JSON.stringify({'device_id' : device_id, 'notification_id' : n_id});
          
          self.fetch.notification_status_update(data_update).subscribe(res => {
          

          });
          
  				self.router.navigate(['/'+data.notification_route]);

  				}
        } else {
          
         
        }
      });
	  }, false);


  }
  share(){
	  var self = this;
		document.addEventListener("deviceready", function() {
			//alert('device ready');
			//alert(self.post_link);
			window.plugins.socialsharing.share('https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain');
		  }, false);
  }

  rating(){
    window.open("https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain", "_self");
  }

	/*  private async setupFCM() {
  	  var self = this;
  	  document.addEventListener('deviceready', () => {
  		  alert('device');
  	 var token =await self.fcm.getToken();
  	  alert(token);
  	  }, false);
    }*/
 logout(){

	if(localStorage.getItem('login_type') == "facebook"){
		var self = this;
		document.addEventListener("deviceready", function() {
			facebookConnectPlugin.logout(
				function (msg) {
					localStorage.removeItem('Sess_name');
					
					  //alert(msg); // do something useful instead of alerting
					}
			);
		}, false);0
	} else if(localStorage.getItem('login_type') == "google"){
		var self = this;
		document.addEventListener("deviceready", function() {
			//alert('google');
			window.plugins.googleplus.logout(
				 (msg) => {
				 localStorage.removeItem('Sess_name');
				 
				  //alert(msg); // do something useful instead of alerting
				},
				(error) => {
					//alert(JSON.stringify(error));
				}
			);
		}, false);
	} else{
		
	localStorage.removeItem('Sess_Id'); 
    localStorage.removeItem('Sess_log_email');
    localStorage.removeItem('Sess_name');
		
	}	
	 
      this.event.publish('user:logout', {
      user: '',
      message: 'Logout successfully',
      time: new Date()
      });
	  
	  this.logoutToast();
	  
	  this.getSidebar("logout");
	  this.showLogout = false;
      this.showLogin = true;
      this.showUserName = false;
     
      this.navCtrl.navigateBack('/signin');
}
public ngOnDestroy() {
    this.sharedSvc._OnMessageReceivedSubject.unsubscribe();
  }

hideButton(){
		$( "#shop-button" ).hide();
		$( "#hide-button" ).show();
	}
showButton(){
		
		$( "#shop-button" ).show();
		$( "#hide-button" ).hide();
	}
  openWhatsAppChat() {
    // Replace '1234567890' with the recipient's phone number
    const phoneNumber = '918989153379';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello!`;
    
    if (this.platform.is('cordova')) {
      // If running on a device, open WhatsApp using InAppBrowser (cordova plugin)
      this.iab.create(whatsappURL, '_system');
    } else {
      // If running on a web browser, open WhatsApp using window.open()
      window.open(whatsappURL, '_blank');
    }
  }
}
