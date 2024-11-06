import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FetchServiceService } from '../fetch-service.service';
import { PlatformLocation } from '@angular/common'
import { Platform ,NavController} from '@ionic/angular';
import { Location } from "@angular/common";


@Component({
  selector: 'app-sub-menu-page',
  templateUrl: './sub-menu-page.page.html',
  styleUrls: ['./sub-menu-page.page.scss'],
})
export class SubMenuPagePage implements OnInit {

public sub_menu_data: any;
public post: any;
public error: any;
public menu_nm:any;
public page_name:any;
public path: any = []; 
public pr_id:any=[];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private fetch: FetchServiceService,private platform: Platform,public navCtrl: NavController,private loc: Location) { 

   this.path = this.platform.url().split('/');

  }

  ngOnInit() {

  	let menu_id = this.route.snapshot.params['id'];
	
	this.fetch.getSubMenu(menu_id).subscribe(res => {
		//console.log(res['data']);
		this.sub_menu_data = res['data'];
		this.error = '';
		this.fetch.getSidhhMenuName(menu_id).subscribe(res2 => {
			this.menu_nm = res2.data[0].name;
		});

		if(this.sub_menu_data != 'no festivals'){
		
			this.pr_id = this.path[4];  
			console.log(this.path);
			localStorage.setItem('sub_page_id',this.pr_id);
		}
		if(this.sub_menu_data == 'no festivals'){
		
			this.fetch.getPostByMenu(menu_id).subscribe(res1 => {
			this.post = res1['data'];
			if(this.post != 'no festivals'){
			let  c = localStorage.getItem('sub_page_id');
			console.log(c);
				this.router.navigate(['/post-new',c,menu_id]);
			}else{
				this.error = "No data available.";  
			}
			
			});
			
		}
	});


  }

}
