import { Component, OnInit } from '@angular/core';
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
  selector: 'app-monthly-rashifal-response',
  templateUrl: './monthly-rashifal-response.page.html',
  styleUrls: ['./monthly-rashifal-response.page.scss'],
})
export class MonthlyRashifalResponsePage implements OnInit 
{
	model:any = {};
	monthly_rashi_data:any = [];
	monthly:any;
	raashiphal:any;
	no_data_found:any;
	language:any;
	title_monthly:any;
	unsafe:any;


	  constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,private socialSharing: SocialSharing,private sanitizer: DomSanitizer) { }

  
ngOnInit() 
{
	
}

ionViewDidEnter(){

	let lang_code = localStorage.getItem('lang_code');
	let lang_key = localStorage.getItem('lang_key');
	this.translate.use(lang_code);
	this.language = lang_code;
	this.monthly = 'HORO_MONTHLY';
	this.raashiphal = 'RAASHIPHAL';
	this.no_data_found = 'NO_DATA_FOUND';

	let data = this.route.snapshot.params['data'];
	
	this.event.subscribe('language:change', (data: any) => {
		let lang_code = localStorage.getItem('lang_code');
		this.translate.use(lang_code);
		});

	this.fetch.getMonthlyHoroscope(data,lang_code).subscribe(res => {
		console.log(res);

		if(res.status == "true"){

		this.monthly_rashi_data = res.data.horo_detail_monthly;
		this.model.rashi_name = res.data.name;
		this.title_monthly = res.data.title_monthly;
		if(res.data.sign_name_eng == 'Aries'){
			this.model.image_url = 'mesh.png';
		}else if(res.data.sign_name_eng == 'Taurus'){
			this.model.image_url = 'vrushabha.png';
		}else if(res.data.sign_name_eng == 'Gemini'){
			this.model.image_url = 'mithun.png';
		}else if(res.data.sign_name_eng == 'Cancer'){
			this.model.image_url = 'karka.png';
		}else if(res.data.sign_name_eng == 'Leo'){
			this.model.image_url = 'singh.png';
		}else if(res.data.sign_name_eng == 'Virgo'){
			this.model.image_url = 'kanya.png';
		}else if(res.data.sign_name_eng == 'Libra'){
			this.model.image_url = 'tula.png';
		}else if(res.data.sign_name_eng == 'Scorpio'){
			this.model.image_url = 'vrishchik.png';
		}else if(res.data.sign_name_eng == 'Sagittarius'){
			this.model.image_url = 'dhanu.png';
		}else if(res.data.sign_name_eng == 'Capricorn'){
			this.model.image_url = 'makara.png';
		}else if(res.data.sign_name_eng == 'Aquarius'){
			this.model.image_url = 'kumbh.png';
		}else if(res.data.sign_name_eng == 'Pisces'){
			this.model.image_url = 'meen.png';
		}
		
		
		this.unsafe = this.monthly_rashi_data;
		//this.monthly_rashi_data = this.sanitizer.sanitize(SecurityContext.HTML,this.sanitizer.bypassSecurityTrustHtml(this.monthly_rashi_data));
		
		this.monthly_rashi_data = this.createSafeMap(this.monthly_rashi_data);
		console.log(this.monthly_rashi_data);
			


		}
		
		
	});


}
createSafeMap(url){
	return this.sanitizer.bypassSecurityTrustHtml(url);
	}
}