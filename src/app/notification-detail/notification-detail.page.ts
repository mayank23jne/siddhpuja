import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'

declare var $:any;

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.page.html',
  styleUrls: ['./notification-detail.page.scss'],
})
export class NotificationDetailPage implements OnInit {
public image_url : any;
public model :any = [];
public language:any;

  constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService) { }

  ngOnInit() {
	  
  }
  ionViewDidEnter(){

	let lang_code = localStorage.getItem('lang_code');
    this.translate.use(lang_code);
    this.language = lang_code;
      let self = this;
		this.event.subscribe('language:change', (data: any) => {
		let lang_code = localStorage.getItem('lang_code');
		this.translate.use(lang_code);
		this.language = lang_code;
			
		});

	var id = this.route.snapshot.params['id'];
	this.fetch.noti_detail(id).subscribe(res => {
		console.log(res['data']);
		this.image_url = environment.img_url_for_noti;
		this.model.image = res['data'].image;
		this.model.date = res['data'].date;

		if(self.language == "en"){
			this.model.title = res['data'].title_english;

			$('#noti_detail').html(res['data'].message_english);
			
		}else{
			this.model.title = res['data'].title;
		    $('#noti_detail').html(res['data'].message);
		}


	});
  }

}
