import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl,SafeUrl  } from '@angular/platform-browser';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PlatformLocation } from '@angular/common'
import { Platform ,NavController} from '@ionic/angular';
import { Location } from "@angular/common";

import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'

declare let window: any;
declare var $ : any;

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.page.html',
  styleUrls: ['./post-new.page.scss'],
})
export class PostNewPage implements OnInit {
	post:any;
	public whatsapp_link:any;
	category_id:any;
	name:any;
	model:any={};
	puja_price:any;
	puja_id:any;
	public post_link:any;
	title:any;
	safehtml: any;
	image_url:any;
	post_share:any;
	menu_id:any;
	parent:any;
	pr_id:any;
	public path: any = []; 
	book_now:any;
	first_free:any;
	audio_url:any;
	audio:any;
	audio_eng:any;
	language:any;
	public msg_whatsapp:any;

  constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,private sanitizer: DomSanitizer,private socialSharing: SocialSharing,location: PlatformLocation,private platform: Platform,public navCtrl: NavController,private loc: Location) {
	this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
    };
   

}


ngOnInit() {

	let lang_code = localStorage.getItem('lang_code');
    this.translate.use(lang_code);
	this.first_free = 'FIRST_FREE';
	this.book_now = 'BOOK_NOW';
	

	  
	  $("#book_now").hide();
		$("#book_now_whatsup").hide();
		let id = this.route.snapshot.params['id'];
		let lang_key = localStorage.getItem('lang_key');
	    //console.log(lang_key);
	    lang_key = JSON.parse(lang_key);
		
		
		this.fetch.getPostByMenu(id,lang_key).subscribe(res => {
			if(res){
			//console.log(res);
				//console.log(res.link);
				//this.post_link = res.link;

				

				this.post=res['data'];
				this.puja_price = res['data']['price'];
				this.whatsapp_link = res['data']['whatsapp_link'];
				this.audio = res['data']['audio'];
				this.audio_eng = res['data']['audio_eng'];
				this.audio_url = environment.audio_url_for_granth_detail;
				//console.log(this.puja_price);
				if(this.puja_price === "")
				{
					this.puja_price = null;
				}
			this.puja_id = res['data']['id'];
			if(res['data']['title'] == "" || res['data']['title'] == null ){
			this.title = res['data']['title_hi'];
			}else{
				this.title = res['data']['title'];
			}

			//console.log(this.title);
			if(res['data']['description'] == "" || res['data']['description'] == null ){
			this.post_share = res['data']['description_hi'];
			}else{
				this.post_share = res['data']['description'];

				//console.log($(this.post_share).text());

				var text = $(this.post_share).text();
				//console.log(text);
				if(text.length > 200){
				var text_with_limit = text.substring(0,500) + '..... Read more on https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain';
				//console.log(text_with_limit);
				}
				var msg = text+"\r\n\r\nसिद्ध पूजा ऍप से निर्मित \r\n\r\n https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain";
				var msg = text_with_limit;
		
	 			this.post_link = msg;



			}
			this.safehtml = this.createSafeMap(this.post_share);

				this.image_url=res['data']['image'];
	
				$("#loader").hide();
				$("#book_now").show();
				$("#book_now_whatsup").show();
			}else{
				$("#no_post").html("No Post Available.");
			}
		});
		

	

	var cat_id =  this.route.snapshot.params['id'];

	localStorage.setItem('post_id',cat_id);

	let  language_id = 1;

	//console.log(cat_id+" ,"+language_id);

	let data = JSON.stringify({"category" : cat_id, "language_id":language_id});
	this.fetch.post_detail(data).subscribe(res => {
		//console.log(res);
		if(res['status'] == "true"){
		
			this.model.data = res['data'];
			this.model.category_id = res['data'].puja_category_id;
			this.model.name = res['data'].name;
			this.parent = res['data'].parent.parent;
			
			
		}else{
			$("#detail_content").css("display","none");
			$("#no_details").css("display","block");
		}
	});

				
				// console.log($(this.post_share).text());
				

  }
  createSafeMap(url){
	return this.sanitizer.bypassSecurityTrustHtml(url);
	}

  
  ionViewDidEnter()
    {
		let lang_code = localStorage.getItem('lang_code');
		this.language = lang_code;
		

	    this.event.subscribe('language:change', (data: any) => {
		let lang_code = localStorage.getItem('lang_code');
		this.translate.use(lang_code);
	   
		});

	}
  share_post(){
		var text = $(this.post_share).text();
		//console.log(text);
		if(text.length > 200){
		var text_with_limit = text.substring(0,500) + '..... Read more on https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain';
		//console.log(text_with_limit);
		}
		var msg = text+"\r\n\r\nसिद्ध पूजा ऍप से निर्मित \r\n\r\n https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain";
		var msg = text_with_limit;
		//console.log(this.post_link);
		//var self = this;
		//alert(self.post_link);
		// document.addEventListener("deviceready", function() {
		// 	//alert('device ready');
		// 	//alert(self.post_link);
	 	window.plugins.socialsharing.share(msg);
		 //  }, false);
	}





}
