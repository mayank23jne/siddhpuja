import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FetchServiceService } from '../fetch-service.service';
import { SharedService } from '../SharedSvc.service';

import { EventService } from '../event.service';
import { TranslateService } from '@ngx-translate/core'


declare var $:any;




@Component({
  selector: 'app-dharmik-news',
  templateUrl: './dharmik-news.page.html',
  styleUrls: ['./dharmik-news.page.scss'],
})
export class DharmikNewsPage implements OnInit {

  public noti_data:any;
public noti_data2:any;


public image_url:any;
public badge_no:any;
public n_id:any = [];
public self:this;
public language:any;
public dharmik_news:any;

  constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,public sharedSvc: SharedService) { 

  }

  ngOnInit() {
  
  }

	
  ionViewWillEnter(){

	let lang_key = localStorage.getItem('lang_key');  
	this.language = JSON.parse(lang_key);

	let lang_code = localStorage.getItem('lang_code');
    this.translate.use(lang_code);
    this.dharmik_news  = 'DHARMIK_NEWS';
   


	console.log(this.language);

  		let test = "test";
		var device_token = JSON.parse(localStorage.getItem('device_token'));
		//alert(device_token);
		$('#loader_noti').css('display','block');
		$('#show_card').css('display','none');
		$('#hide_card').css('display','none');
	  	this.fetch.dharmik_news(test).subscribe(res => {
		 console.log(res);
		 if(res['data'] == "no notification"){
			 $('#show_card').css('display','none');
			 $('#loader_noti').css('display','none');
			 $('#hide_card').css('display','block');
		 }else{
			 console.log(res);
			 $('#loader_noti').css('display','none');
			 $('#show_card').css('display','block');
			 $('#hide_card').css('display','none');

		  	 this.noti_data = res['data'];
		  	 
		  	this.image_url = environment.img_url_for_noti;
		 // alert(JSON.stringify(res['data']));
		 
		 }
	  });
  }
  
  
  fn(id,noti_route){
	  if(noti_route == null)
	  {
		  this.router.navigate(['/notification-detail',id]);
	  }else
	  {
		  this.router.navigate(['/'+noti_route]);
	  }

	    
	  
  }
}
