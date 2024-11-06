import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

import { EventService } from '../event.service';
import { TranslateService } from '@ngx-translate/core'




@Component({
  selector: 'app-live-darshan-video',
  templateUrl: './live-darshan-video.page.html',
  styleUrls: ['./live-darshan-video.page.scss'],
})
export class LiveDarshanVideoPage implements OnInit {
model:any = {};
video:any;
name:any;
description:any = [];
language_nm:any;
  constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,private embedService: EmbedVideoService,private sanitizer: DomSanitizer) {
	
	  }

  ngOnInit() {
	
	    
	    
  }
 
	ionViewDidEnter(){
		let lang_code = localStorage.getItem('lang_code');
		this.translate.use(lang_code);
		this.language_nm = lang_code;
	   
	
		this.event.subscribe('language:change', (data: any) => {
		  let lang_code = localStorage.getItem('lang_code');
		  this.translate.use(lang_code);
		  
		  });


		  let lang_key = localStorage.getItem('lang_key'); 

	var id = this.route.snapshot.params['id'];
	 this.fetch.live_darshan_video(id,lang_code).subscribe(res => {

		 this.model.data = res['data'].video_url;
		 this.description = res['data'].description;
		 this.name = res['data'].name;
		 console.log(res['data']);

		  //this.model.data1 = this.model.data.replace('watch?v=','embed/');
		 this.model.data2 = this.model.data.replace('&feature=youtu.be',''); 
		// this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.model.data2);
		//this.video = this.model.data2;
		//console.log(this.video);
		this.video = this.embedService.embed(this.model.data2, {
		  attr: { width: 400, height: 250 }
		});
		console.log(this.video);
		//this.video = this.sanitizer.bypassSecurityTrustHtml(this.video);
		this.video = this.sanitizer.sanitize(SecurityContext.HTML,this.sanitizer.bypassSecurityTrustHtml(this.video));
	    
	    this.description =this.createSafeMap(this.description);

		});


	  }
	  
	  createSafeMap(url){
		return this.sanitizer.bypassSecurityTrustHtml(url);
		}

}
