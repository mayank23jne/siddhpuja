import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { EventService } from '../event.service';
import { Platform } from '@ionic/angular';
import { Location } from "@angular/common";

import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import firebase from 'firebase';


import {TranslateService} from '@ngx-translate/core'


declare let window: any;
declare let facebookConnectPlugin: any;
declare var $ : any;


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

model:any = {};
language:any;
public loading: any;
public isGoogleLogin = false;
public user = null;
userData: any = {};
userProfile:any ={};
fbData: any = {};
facebook : any = {};
isLoggedIn = false;
users = { 
    id: '', 
    name: '', 
    email: '', 
    picture: { 
        data: { 
            url: '' 
        } 
    } 
};



  constructor(private translate: TranslateService,public toastController: ToastController,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,public alertController: AlertController,private event: EventService,private platform: Platform,private location: Location,private googlePlus: GooglePlus,private fb: Facebook) { 

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.location.back();
    });


  fb.getLoginStatus()
  .then(res => {
    console.log(res.status);
    if (res.status === 'connect') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  })
  .catch(e => console.log(e));

  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    let lang_code = localStorage.getItem('lang_code');
	this.translate.use(lang_code);
	this.language = lang_code;

    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
      this.translate.use(lang_code);
      
         
      });
	}
  async loginToast() {
    const toast = await this.toastController.create({
      message: 'Sign in successfully.',
      position: 'top',
      color:'danger',
      duration: 2000
    });
    toast.present();
  }
  log_form(frm) 
  {
     
     const data = JSON.stringify(frm.value);
     this.fetch.signIn(data).subscribe(res=>{
      if (res.status == 'true') 
      {
       console.log(res.data.id);
       console.log(res.data.email);
       localStorage.setItem('Sess_Id',res.data.id);
       localStorage.setItem('Sess_log_email',res.data.email);
       localStorage.setItem('Sess_name',res.data.name);
	   localStorage.setItem('login_type',"normal");
       this.event.publish('user:login', {});
       this.loginToast();
       this.router.navigate(['/home-new']);
      }else{
        this.log_alert();
      }
     });
  }
  async log_alert() 
  {
      const alert = await this.alertController.create({
          message: 'Invalid login Details',
          buttons: ['OK']
        });

        await alert.present();
  
  }
  

getUserDetail(userid: any) {
  this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
    .then(res => {
      console.log(res);
      this.users = res;
    })
    .catch(e => {
      console.log(e);
    });
	
}

loginWithGoogle(){
	var self = this;
	document.addEventListener("deviceready", function() {
	    window.plugins.googleplus.login(
			{},
			function (obj) {
			    let user_data = JSON.stringify({'name': obj.displayName, 'email': obj.email, 'image': obj.imageUrl, 'login_type': "google"});
					
					/* self.http.post(environment.baseUrl+'signup', user_data)
					.subscribe( res=>{
						var user_id = res['msg'].id;
						localStorage.setItem('user', JSON.stringify(user_id));
						var login_type =res['msg'].login_type;
						localStorage.setItem('login_type', JSON.stringify(login_type));
					}); */
					
					localStorage.setItem('Sess_name',obj.displayName);
					localStorage.setItem('login_type',"google");
					localStorage.setItem('user_info',user_data);
					//alert(JSON.stringify(obj.displayName));
					self.event.publish('user:login', {});
					self.loginToast();
					self.router.navigate(['/home-new']);
					
			},
			function (msg) {
			  alert('error: ' + msg);
			},
			
		);
	}, false);
  }
  
 loginWithFacebook(){
	var self = this;
	document.addEventListener("deviceready", function() {
		var perms = new Array("email");
		var _fbLoginStatusSuccess = (response) => {
			var responseStatus = response.status;
			//alert("checking response status");
			//alert(responseStatus);
			if (responseStatus === 'connected') {
			  _fbLoginSuccess(responseStatus);
			} else if (responseStatus !== null) {
			  _doFbLogin();
			} else {
			  handleFacebookError(responseStatus);
			}
		}
		var _fbLoginStatusError = (error) => {
			handleFacebookError(error);
		}    
		var _doFbLogin = () => {
			facebookConnectPlugin.login(perms, _fbLoginSuccess, _fbLoginError);
		}
		var _fbLoginSuccess = (result) => {
			
			facebookConnectPlugin.api('/me?fields=id,email,name',perms, _fbApiSuccess, _fbApiError);
			
		}
		var _fbApiSuccess = (userData) => {
			var picture ="https://graph.facebook.com/"+userData.id+"/picture?width=1024&height=1024";
			//alert(userData.id);
			if(userData.email){
				var user_data = JSON.stringify({'name': userData.name, 'email': userData.email,'fb_id': userData.id, 'login_type': "facebook", "mail":"yes"});
			} else {
				var user_data = JSON.stringify({'name': userData.name,'fb_id': userData.id, 'login_type': "facebook","mail": "no"});
			}
			
			localStorage.setItem('Sess_name',userData.name);
			localStorage.setItem('login_type',"facebook");
			localStorage.setItem('user_info',user_data);
			
					//alert(JSON.stringify(obj.displayName));
					self.event.publish('user:login', {});
					self.loginToast();
					self.router.navigate(['/home-new']);
			
		}
		var _fbApiError = (error) => {
			handleFacebookError(error);
		}
		var _fbLoginError = (error) => {
			//alert(JSON.stringify(error));
			handleFacebookError(error);
		}
		var handleFacebookError = (error) => {
		  if(error){
			//alert(JSON.stringify(error));
		  }
		}
		facebookConnectPlugin.getLoginStatus(_fbLoginStatusSuccess, _fbLoginStatusError);
		setTimeout( () => {
				if(JSON.parse(localStorage.getItem('Sess_name'))){
					self.router.navigate(['/home-new']);
				}
			}, 5000)
	}, false);
  }

}
