import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'

declare let window: any;
declare var $ : any;
@Component({
  selector: 'app-rasifal-response',
  templateUrl: './rasifal-response.page.html',
  styleUrls: ['./rasifal-response.page.scss'],
})


export class RasifalResponsePage implements OnInit {
model:any = {};
rashi_data:any = [];
today:any;
health:any;
emotions:any;
luck:any;
personal_life:any;
business:any;
travel:any;
language:any;

constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,private socialSharing: SocialSharing) { }

ngOnInit() {

	
  }
  ionViewDidEnter(){

	let data = this.route.snapshot.params['data'];
	let lang_code = localStorage.getItem('lang_code');
	

    
		 this.translate.use(lang_code);
		 this.language = lang_code;
		 this.today = 'HORO_TODAY';
		 this.health = 'HEALTH';
		 this.emotions = 'EMOTIONS';
		 this.luck = 'LUCK';
		 this.personal_life = 'PERSONAL_LIFE';
		 this.business = 'BUSINESS';
		 this.travel = 'TRAVEL';
	
	
    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
      this.translate.use(lang_code);
     
         
	  });
	 
	this.fetch.getDailyHoroscope(data,lang_code).subscribe(res => {
		console.log(res);
		this.rashi_data = res.prediction;
		this.model.rashi_date = res.prediction_date;

		if(lang_code == 'hi')
		{
		if(res.sun_sign == 'aries'){
			this.model.rashi_name = 'मेष';
			this.model.image_url = 'mesh.png';
		}else if(res.sun_sign == 'taurus'){
			this.model.rashi_name = 'वृष';
			this.model.image_url = 'vrushabha.png';
		}else if(res.sun_sign == 'gemini'){
			this.model.rashi_name = 'मिथुन';
			this.model.image_url = 'mithun.png';
		}else if(res.sun_sign == 'cancer'){
			this.model.rashi_name = 'कर्क';
			this.model.image_url = 'karka.png';
		}else if(res.sun_sign == 'leo'){
			this.model.rashi_name = 'सिंह';
			this.model.image_url = 'singh.png';
		}else if(res.sun_sign == 'virgo'){
			this.model.rashi_name = 'कन्या';
			this.model.image_url = 'kanya.png';
		}else if(res.sun_sign == 'libra'){
			this.model.rashi_name = 'तुला';
			this.model.image_url = 'tula.png';
		}else if(res.sun_sign == 'scorpio'){
			this.model.rashi_name = 'वृश्चिक';
			this.model.image_url = 'vrishchik.png';
		}else if(res.sun_sign == 'sagittarius'){
			this.model.rashi_name = 'धनु';
			this.model.image_url = 'dhanu.png';
		}else if(res.sun_sign == 'capricorn'){
			this.model.rashi_name = 'मकर';
			this.model.image_url = 'makara.png';
		}else if(res.sun_sign == 'aquarius'){
			this.model.rashi_name = 'कुम्भ';
			this.model.image_url = 'kumbh.png';
		}else if(res.sun_sign == 'pisces'){
			this.model.rashi_name = 'मीन';
			this.model.image_url = 'meen.png';
		}
	}else{
		this.model.rashi_name = res.sun_sign;
		if(res.sun_sign == 'aries'){
			this.model.image_url = 'mesh.png';
		}else if(res.sun_sign == 'taurus'){
			this.model.image_url = 'vrushabha.png';
		}else if(res.sun_sign == 'gemini'){
			this.model.image_url = 'mithun.png';
		}else if(res.sun_sign == 'cancer'){
			this.model.image_url = 'karka.png';
		}else if(res.sun_sign == 'leo'){
			this.model.image_url = 'singh.png';
		}else if(res.sun_sign == 'virgo'){
			this.model.image_url = 'kanya.png';
		}else if(res.sun_sign == 'libra'){
			this.model.image_url = 'tula.png';
		}else if(res.sun_sign == 'scorpio'){
			this.model.image_url = 'vrishchik.png';
		}else if(res.sun_sign == 'sagittarius'){
			this.model.image_url = 'dhanu.png';
		}else if(res.sun_sign == 'capricorn'){
			this.model.rashi_name = 'मकर';
		}else if(res.sun_sign == 'aquarius'){
			this.model.image_url = 'kumbh.png';
		}else if(res.sun_sign == 'pisces'){
			this.model.image_url = 'meen.png';
		}

	}
	});

  }
 titleCaseWord(word: string) {
	if (!word) return word;
	return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
  share_rashifal(){
	var text = $(this.rashi_data).text();
	console.log(text);
	var rashifal = this.model.rashi_date+"\r\n"+this.model.rashi_name+" राशि \r\n\r\nस्वास्थ्य : "+this.rashi_data.health+"\r\n\r\nभावनाएँ : "+this.rashi_data.emotions+"\r\n\r\nभाग्य ; "+this.rashi_data.luck+"\r\n\r\nव्यक्तिगत जीवन : "+this.rashi_data.personal_life+"\r\n\r\nव्यवसाय: "+this.rashi_data.profession+"\r\n\r\nयात्रा : "+this.rashi_data.travel+"\r\n\r\nसिद्ध पूजा ऍप से निर्मित \r\n\r\n https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain";
	console.log(rashifal);
	document.addEventListener("deviceready", function() {
		window.plugins.socialsharing.share(rashifal);
	  }, false);
  }
}
