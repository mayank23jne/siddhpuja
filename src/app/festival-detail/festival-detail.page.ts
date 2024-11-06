import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'


@Component({
  selector: 'app-festival-detail',
  templateUrl: './festival-detail.page.html',
  styleUrls: ['./festival-detail.page.scss'],
})
export class FestivalDetailPage implements OnInit {
festival:any={};
  image_url:any;
  language:any;
  constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService) { }

  ngOnInit() {
	 
  }

  ionViewDidEnter(){
    let lang_code = localStorage.getItem('lang_code');
	this.translate.use(lang_code);
	this.language = lang_code;
   
    var id = this.route.snapshot.params['id'];
	  console.log(id);
	  this.fetch.festival_desc(id).subscribe(res => {
		console.log(res);
		this.festival = res['data'];
		this.festival.name = res['data'].name;
		this.festival.image = res['data'].image;
		this.festival.description = res['data'].description;
		this.image_url = environment.img_url_for_fest;
	  });

    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
      this.translate.use(lang_code);
      this.language = lang_code;
      });
  }

}
