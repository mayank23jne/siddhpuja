import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from "@angular/forms";
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { Location } from "@angular/common";

import { EventService } from '../event.service';
import { TranslateService } from '@ngx-translate/core'


declare var $:any;

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.page.html',
  styleUrls: ['./book-now.page.scss'],
})
export class BookNowPage implements OnInit {

	puja_name:any;
	puja_id:any;
	puja_price:any;
	name_of_puja:any;
	price_of_puja:any;
	address:any;
	state:any;
	city:any;
	required:any;
	mother_name:any;
	father_name:any;
	gotra:any;
	birth_date:any;
	birth_time:any;
	birth_place:any;
	postcode:any;
	zip:any;
	country:any;
	email_id:any;
	book_now:any;
	lang_code:any;
	birth_date_req:any;
	birth_time_req:any;
	birth_place_req:any;
	full_name:any;
	gotra_msg:any;
	mobile_no:any;
	extra_detail:any;
	billing_detail:any;
	extra_detail_place:any;
	address_place:any;
	language:any;
  constructor(private iab:InAppBrowser,private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,private browserTab: BrowserTab,private platform: Platform,private loc: Location) {

  this.platform.backButton.subscribeWithPriority(10, () => {
      this.loc.back();
    });
   }

  ngOnInit() {
	   this.puja_id = this.route.snapshot.params['puja_id'];
	   this.puja_name = this.route.snapshot.params['puja_name'];
	   this.puja_price = this.route.snapshot.params['puja_price'];
  }
  ionViewDidEnter()
  {
	let lang_key = localStorage.getItem('lang_key');
	let lang_code = localStorage.getItem('lang_code');
	this.translate.use(lang_code);
	this.language = lang_code;
	
	this.full_name = 'FULL_NAME';
	this.name_of_puja = 'POOJA_NAME';
	this.price_of_puja = 'POOJA_PRICE';
	this.email_id = 'EMAIL_ID';
	this.birth_date = 'BIRTH_DATE';
	this.birth_date_req = 'BIRTH_DATE_REQUIRED';
	this.birth_time = 'BIRTH_TIME';
	this.birth_time_req = 'BIRTH_TIME_REQUIRED';
	this.birth_place = 'BIRTH_PLACE';
	this.birth_place_req = 'BIRTH_PLACE_REQUIRED';
	this.address = 'ADDRESS';
	this.address_place = 'ADDRESS_PLACE';
	this.city = 'CITY';
	this.state = 'STATE';
	this.country = 'COUNTRY';
	this.required = 'REQUIRED';
	this.zip='ZIP';
	this.postcode = 'POSTCODE';
	this.gotra='GOTRA';
	this.gotra_msg ='GOTRA_MSG';
	this.book_now = 'BOOK_NOW';
	this.mobile_no = 'MOBILE_NO';
	this.extra_detail = 'EXTRA_DETAIL';
	this.extra_detail_place = 'EXTRA_DETAIL_PLACE';
	this.billing_detail = 'BILLING_DETAIL';
	
    
    this.event.subscribe('language:change', (data: any) => {
      this.lang_code = localStorage.getItem('lang_code');
      
    });
  
  }
  book_puja(){

	  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  //const m_check = /^\+(?:\d(?:\(\d{3}\)|-\d{3})-\d{3}-(?:\d{2}-\d{2}|\d{4})|\d{11})$/;
	  var puja_name = this.puja_name;
	  var puja_price = $('#puja_price').val();
	  var user_name = $('#name').val();
	  var email = $('#email').val();
	  var mobile = $('#mobile').val();
	  var address = $('#address').val();
	  var city = $('#city').val();
	  var state = $('#state').val();
	  var country = $('#country').val();
	  var zip = $('#zip').val();
	  var dob = $('#bdate').val();
	  var birth_place = $('#bplace').val();
	  var birth_time = $('#btime').val();
	  var fname = $('#fname').val();
	  var mname = $('#mname').val();
	  var gotra =  $('#gotra').val();
	  if(gotra == ''){
		  gotra = null;
	  }
	  var add_info = $('#add_info').val();
	  if(add_info == ''){
		  add_info = null;
	  }
	  if(address == ''){
		/*$("#eaddress").css("display","block");
		$("#eaddress").fadeOut(2500);*/
		address = 'not filled';
	  }
	  if(city == ''){
		/*  $("#ecity").css("display","block");
		$("#ecity").fadeOut(2500);*/
		city = 'not filled';
	  }
	  if(state == ''){
		 /* $("#estate").css("display","block");
		$("#estate").fadeOut(2500);*/
		state = 'not filled';
	  }
	  if(country == ''){
		/*  $("#ecountry").css("display","block");
		$("#ecountry").fadeOut(2500);*/
		country = 'not filled';
	  }
	  if(zip == ''){
		/*  $("#ezip").css("display","block");
		$("#ezip").fadeOut(2500);*/
		zip = 'not filled';
	  }
	  if(user_name == ''){
		$("#ename").css("display","block");
		$("#ename").fadeOut(2500);
	  }else if(dob == ''){
		$("#edob").css("display","block");
		$("#edob").fadeOut(2500);
	  }else if(birth_time == ''){
		$("#etime").css("display","block");
		$("#etime").fadeOut(2500);
	  }else if(birth_place == ''){
		$("#eplace").css("display","block");
		$("#eplace").fadeOut(2500); 
	  }else if(fname == ''){
		$("#efname").css("display","block");
		$("#efname").fadeOut(2500);
	  }else if(mname == ''){
		$("#emname").css("display","block");
		$("#emname").fadeOut(2500);
	  }else if(email == '' || re.test(email) == false){
		$("#eemail").css("display","block");
		$("#eemail").fadeOut(2500);
	  }else if(mobile == '' || mobile.length != 10){
		$("#emobile").css("display","block");
		$("#emobile").fadeOut(2500);
	  }else{
		  let data = JSON.stringify({'puja_id' : this.puja_id, 'puja_name' : puja_name, 'puja_price' : puja_price, 'user_name' : user_name, 'email' : email, 'mobile' : mobile, 'address' : address, 'dob' : dob, 'birth_place' : birth_place, 'birth_time' : birth_time, 'fname' : fname, 'mname' : mname, 'gotra' : gotra, 'add_info' : add_info, 'city': city, 'state' : state, 'country' : country, 'zip' : zip});
		  //console.log(data); 
		    this.fetch.book_puja(data).subscribe(res => {
			console.log(res);
			var data_id = res['msg'];
			
				this.iab.create("https://siddhpuja.com/payment/payumoney_puja/index.php?id="+data_id+"&price="+puja_price+"&puja_name="+puja_name);
			 
			}); 
		    
	  }
  }

}
