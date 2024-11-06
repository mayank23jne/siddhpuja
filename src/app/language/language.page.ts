import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController, MenuController, Platform } from "@ionic/angular";
import { EventService } from '../event.service';
import { TranslateService } from '@ngx-translate/core'

declare var $ :any;
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
	
model:any={};
next_btn:any={};
public language:any;
public language_nm:any;
public language_key:any;
public lang_code:any;

  constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,public alertController: AlertController,public navCtrl: NavController) { }

  ngOnInit() {
	
	
  }
  ionViewDidEnter(){

	if(localStorage.getItem('lang_code')!=null){
		this.lang_code = localStorage.getItem('lang_code');
		this.language_key = localStorage.getItem('lang_key');
	}else{
		this.lang_code = 'hi';
		this.language_key = '1';
	}
	
	
	
	this.language_key = JSON.parse(this.language_key);
	
    this.translate.use(this.lang_code);
    this.language_nm = this.lang_code;
    
    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
	  this.translate.use(this.lang_code);
	
      
    });

	
	//this.next_btn = 'Next';
	this.fetch.getLanguage().subscribe(res => {
		console.log(res['data']);
		this.model.lang_data = res['data'];
	});



  }
  select_lang(value){
	localStorage.setItem('lang', JSON.stringify(value.detail.value));
	var lang_code = value.detail.value;
	
	localStorage.setItem('lang_key', JSON.stringify(lang_code));

	this.language = lang_code;
	this.fetch.getLangCode(lang_code).subscribe(res => {
		let language_nm_code = JSON.stringify(res['data']);

		
		localStorage.setItem('lang_code', res['data']);
		this.event.publish('language:change', {});

	  });
	  this.event.subscribe('language:change', (data: any) => {
		let lang_code = localStorage.getItem('lang_code');
		this.translate.use(lang_code);
	   	this.next_btn = 'NEXT';
	  });
  }
  select_language(){
	  this.router.navigate(['/home-new']);
  }
 

}
