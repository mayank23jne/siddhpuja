import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { EventService } from '../event.service';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-live-darshan',
  templateUrl: './live-darshan.page.html',
  styleUrls: ['./live-darshan.page.scss'],
})
export class LiveDarshanPage implements OnInit {
model:any={};
image_url:any;
language:any;
language_nm:any;
  constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService) { }

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
      this.language = JSON.parse(lang_key);
      console.log(this.language);
      this.fetch.live_darshan_list(lang_key).subscribe(res => {
        console.log(res);
        this.model.video_list = res['data'];
        this.image_url = environment.image_url_for_live_video;
      });
  }
  

}
