import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from "@angular/common";
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'

declare var $ : any;
@Component({
  selector: 'app-sujhav',
  templateUrl: './sujhav.page.html',
  styleUrls: ['./sujhav.page.scss'],
})
export class SujhavPage implements OnInit {

full_name:any;
mobile_no:any;
valid_mobile_no:any;
valid_email:any;
email:any;
message:any;
send:any;
required:any;
suggest:any;
language:any;

  constructor(public toastController: ToastController,private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,private platform: Platform,private location: Location) { 
	this.platform.backButton.subscribeWithPriority(10, () => {
			this.location.back();
		});
  }

  ngOnInit() {
  }

  async successEngToast() {
    const toast = await this.toastController.create({
      message: 'Your message has been delivered Thank You for this suggestion.',
      position: 'top',
      color:'danger',
      duration: 2000
    });
    toast.present();
  }

  async errorEngToast() {
    const toast = await this.toastController.create({
      message: 'Something went wrong please try again.',
      position: 'top',
      color:'danger',
      duration: 2000
    });
    toast.present();
  }
  async errorHindiToast() {
    const toast = await this.toastController.create({
      message: 'सुझाव प्राप्त नहीं हुआ कृपया पुनः प्रयास करे ',
      position: 'top',
      color:'danger',
      duration: 2000
    });
    toast.present();
  }

  async successHindiToast() {
    const toast = await this.toastController.create({
      message: 'आपका सुझाव प्राप्त हुआ । सुझाव के लिए धन्यवाद',
      position: 'top',
      color:'danger',
      duration: 2000
    });
    toast.present();
  }

  ionViewDidEnter(){
    let lang_code = localStorage.getItem('lang_code');
	this.translate.use(lang_code);
	this.language = lang_code;
	
	this.full_name = 'FULL_NAME';
	this.mobile_no = 'MOBILE_NO';
	this.valid_mobile_no = 'MOBILE_NO';
	this.email = 'EMAIL_ID';
	this.valid_email = 'VALID_EMAIL';
	this.message = 'MESSAGE';
	this.send = 'SEND';
	this.required = 'REQUIRED';
	this.suggest = 'SUJHAAV';

    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
      this.translate.use(lang_code);
      
         
      });
	}
	
  submit(){
	  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  var name = $('#name').val();
	  var email = $('#email').val();
	  var mobile = $('#mobile').val();
	  var message = $('#message').val();
	  if(name == ''){
		$("#ename").css("display","block");
		$("#ename").fadeOut(2500);
	  }else if(email == '' || re.test(email) == false){
		$("#eemail").css("display","block");
		$("#eemail").fadeOut(2500);
	  }else if(mobile == '' || mobile.length != 10){
		$("#emobile").css("display","block");
		$("#emobile").fadeOut(2500);
	  }else if(message == ''){
		$("#emessage").css("display","block");
		$("#emessage").fadeOut(2500);
	  }else{
		
		  let data = JSON.stringify({'name' : name, 'email' : email, 'mobile' : mobile, 'message' : message});
		  this.fetch.send_sujhav(data).subscribe(res => {
			  console.log(res);
			  if(res['status'] == "true")
			  {
				var name = $('#name').val("");
				var email = $('#email').val("");
				var mobile = $('#mobile').val("");
				var message = $('#message').val("");
				if(this.language == "hi"){
					this.successHindiToast();
				}else{
					this.successEngToast();
				}
				this.router.navigate(['/home-new']);
			  }else{

				if(this.language == "hi"){
					this.errorHindiToast();
				}else{
					this.errorEngToast();
				}

			  }
		  });
	  }
  }

}
