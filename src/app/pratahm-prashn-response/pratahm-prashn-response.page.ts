import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from "@angular/forms";
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { ToastController } from '@ionic/angular';
import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'
import { AlertController } from '@ionic/angular';

declare var $:any;
declare var google: any;
declare var cordova;


@Component({
  selector: 'app-pratahm-prashn-response',
  templateUrl: './pratahm-prashn-response.page.html',
  styleUrls: ['./pratahm-prashn-response.page.scss'],
})
export class PratahmPrashnResponsePage implements OnInit {
public paramarsh_name :any;
model:any={};
public name :any;
public birth_date :any;
public birth_date_req :any;
public birth_time :any;
public birth_time_req :any;
public birth_place :any;
public birth_place_req :any;
public required :any;

public question :any;
public occupation :any;
public whatsapp_no :any;
public valid_mobile:any;
public send:any;
public thank_you:any;
public ques_exp:any;
public title:any;
public paramarsh:any;
language:any;
thank_you_msg:any;
ques_exp_msg:any;

constructor(public alertController: AlertController,public toastController: ToastController,private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,private browserTab: BrowserTab) {
}

ngOnInit() 
{
	
}

ionViewDidEnter(){
	

    let lang_code = localStorage.getItem('lang_code');
	this.translate.use(lang_code);
	this.language = lang_code;
	
	this.name = 'NAME';
	this.valid_mobile ='VALID_MOBILE';
	this.birth_date = 'BIRTH_DATE';
	this.birth_date_req = 'BIRTH_DATE_REQUIRED';
	this.birth_time = 'BIRTH_TIME';
	this.birth_time_req = 'BIRTH_TIME_REQUIRED';
	this.birth_place = 'BIRTH_PLACE';
	this.birth_place_req = 'BIRTH_PLACE_REQUIRED';
	this.required = 'REQUIRED';
	this.whatsapp_no = 'WHATSAPP_NO';
	this.occupation = 'OCCUPATION';
	this.question = 'PRASHN';
	this.send = 'SEND';
	this.ques_exp = 'QUES_EXP';
	this.thank_you = 'THANK_YOU';
	this.paramarsh = 'PARAMARSH';
	

    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
      this.translate.use(lang_code);
      this.language = lang_code;
         
	  });
	  this.paramarsh_name = this.route.snapshot.params['name'];


	  let id = this.route.snapshot.params['id'];
		let lang_key = localStorage.getItem('lang_key');
	    console.log(lang_key);
	    lang_key = JSON.parse(lang_key);
		
		
		this.fetch.getPostByMenu(id,lang_key).subscribe(res => {
			if(res){
			console.log(res);
				//console.log(res.link);
				//this.post_link = res.link;
				
			if(res['data']['title'] == "" || res['data']['title'] == null )
			{
			this.title = res['data']['title_hi'];
			}else{
				this.title = res['data']['title'];
			}
		}

		});
	}
	
  pratham_paramarsh(){
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	//const m_check = /^\+(?:\d(?:\(\d{3}\)|-\d{3})-\d{3}-(?:\d{2}-\d{2}|\d{4})|\d{11})$/;

	var name = $('#name').val();
	var mobile = $('#mobile_no').val();
	var field_name = $('#field_name').val();
	var jnm_name = $('#name_').val();
	var bdate = $('#bdate').val();
	var btime = $('#btime').val();
	var bplace = $('#bplace').val();
	var occupation = $('#occupation').val();
	
	if(name == ''){
		$("#ename").css("display","block");
		$("#ename").fadeOut(2500);
	}else if(jnm_name == ''){
		$("#ename_").css("display","block");
		$("#ename_").fadeOut(2500);
	}else if(bdate == ''){
		$("#edob").css("display","block");
		$("#edob").fadeOut(2500);
	}else if(btime == ''){
		$("#etime").css("display","block");
		$("#etime").fadeOut(2500);
	}else if(bplace == ''){
		$("#eplace").css("display","block");
		$("#eplace").fadeOut(2500);
	}else if(field_name == ''){
		$("#efield").css("display","block");
		$("#efield").fadeOut(2500);
	}
	else if(mobile == '' || mobile.length != 10 ){
		$("#emobile").css("display","block");
		$("#emobile").fadeOut(2500);
	}else  {
		let data = JSON.stringify({'paramarsh_name':this.paramarsh_name,'name' : name,'mobile' : mobile, 'vivran' : field_name, 'birth_name' : jnm_name,'birth_date': bdate, 'birth_time' : btime, 'birth_place' : bplace,'occupation' : occupation});
		
		let self = this;
		this.fetch.firstQues(data).subscribe(res => {
			console.log(res);
			var data_id = res['msg'];
					if(data_id == "success" )
					  {
					  $("#e_success").css("display","block");
						
					   if(this.language == 'en')
					   {
						
					 		this.thankEnAlert();

					   }else{
                         
							this.thankHiAlert();
						  
					   }
						  //console.log(this.thank_you);
						
					  } else if(data_id == "already_ask") {

						if(this.language == 'en')
						{
						 
							this.msgEnAlert();
 
						}else{
						  
							this.msgHiAlert();
						   
						}
						

					  }else{

					  }
					
			
		});
		
	}
	
	
  }

  async thankHiAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: 'प्रथम प्रश्न फ्री (ज्योतिषीय परामर्श सेवा) में पूछने के लिए धन्यवाद ! 7 कार्य दिवसों के भीतर आपको विवरण प्राप्त हो जाएगा। ',
      buttons: ['OK']
    });

    await alert.present();
  }

  async thankEnAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: 'Thanks for asking the First Question Free (astrological consulting service) ! You will get the details within 7 working days.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async msgEnAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: 'You already ask a free question for more information use siddhpuja premium service worth ₹ 551/- . Thank You',
      buttons: ['OK']
    });

    await alert.present();
  }
  async msgHiAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: 'आप एक प्रश्न पूछ चुके हैं अधिक जानकारी के लिए सिद्धपूजा प्रीमियम सेवा मूल्य ₹ 551/- का उपयोग करें।  धन्यवाद ',
      buttons: ['OK']
    });

    await alert.present();
  }

 


}
