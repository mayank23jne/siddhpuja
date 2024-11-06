import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FetchServiceService } from '../fetch-service.service';
import { PlatformLocation } from '@angular/common'
import { Platform ,NavController} from '@ionic/angular';
import { Location } from "@angular/common";

import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'





@Component({
  selector: 'app-main-menu-new',
  templateUrl: './main-menu-new.page.html',
  styleUrls: ['./main-menu-new.page.scss'],
})
export class MainMenuNewPage implements OnInit {
public sub_menu_data: any;
public post: any;
public language: any;
public error: any;
public menu_nm:any;
public page_name:any;
public path: any = []; 
public language_nm :any;


  constructor(private translate: TranslateService,private event: EventService,private http: HttpClient, private route: ActivatedRoute, private router: Router, private fetch: FetchServiceService,private platform: Platform,public navCtrl: NavController,private loc: Location) { 

	this.path = this.platform.url().split('/');

	this.platform.backButton.subscribeWithPriority(10, () => {
      	this.loc.back();
    });

  }

  ngOnInit() {
	  let menu_id = this.route.snapshot.params['id'];

	 let lang_key = localStorage.getItem('lang_key');
	 console.log(lang_key);
	  lang_key = JSON.parse(lang_key);
	  this.language = JSON.parse(lang_key);
	  
	  this.fetch.getSubMenu(menu_id,lang_key).subscribe(res => {
		//console.log(res['data']);
		this.sub_menu_data = res['data'];
		console.log(res['data']);
		this.error = '';
		this.fetch.getSidhhMenuName(menu_id,lang_key).subscribe(res2 => {
			
			if(res2.data[0].name == "" || res2.data[0].name == null){
				this.menu_nm = res2.data[0].name_hi;
			}else{
				this.menu_nm = res2.data[0].name;
			}
		});
		if(this.sub_menu_data == 'no festivals'){
		this.router.navigate(['/post-new',menu_id]);	
		}
	});
  }
  ionViewDidEnter()
 {
	let lang_code = localStorage.getItem('lang_code');
    this.translate.use(lang_code);
	
	this.language_nm = lang_code;

	this.event.subscribe('language:change', (data: any) => {
		let lang_code = localStorage.getItem('lang_code');
		this.translate.use(lang_code);
		
	});

	let post_id = localStorage.getItem('post_id');
	let menu_id = this.route.snapshot.params['id'];
	console.log(post_id);
	if(post_id == menu_id){
		this.loc.back();
	}
  }
  

}
