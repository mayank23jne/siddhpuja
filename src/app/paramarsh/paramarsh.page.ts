import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from "@angular/forms";
import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

declare var $:any;
declare var google: any;
declare var cordova;


@Component({
  selector: 'app-paramarsh',
  templateUrl: './paramarsh.page.html',
  styleUrls: ['./paramarsh.page.scss'],
})
export class ParamarshPage implements OnInit {
public paramarsh_name :any;

public name :any;
public birth_date :any;
public birth_date_req :any;
public birth_time :any;
public birth_time_req :any;
public birth_place :any;
public birth_place_req :any;
public required :any;

public question :any;
public occupation :any;
public whatsapp_no :any;
public valid_mobile:any;
public pay:any;
public paramrsh:any;
public title:any;
language:any;

model:any={};
  constructor(private iab:InAppBrowser,private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService) { }

  ngOnInit() {
	 
  }
  ionViewDidEnter(){
    let lang_code = localStorage.getItem('lang_code');
	this.translate.use(lang_code);
	this.language = lang_code;
	this.name = 'NAME';
	this.valid_mobile ='VALID_MOBILE';
	this.birth_date = 'BIRTH_DATE';
	this.birth_date_req = 'BIRTH_DATE_REQUIRED';
	this.birth_time = 'BIRTH_TIME';
	this.birth_time_req = 'BIRTH_TIME_REQUIRED';
	this.birth_place = 'BIRTH_PLACE';
	this.birth_place_req = 'BIRTH_PLACE_REQUIRED';
	this.required = 'REQUIRED';
	this.whatsapp_no = 'WHATSAPP_NO';
	this.occupation = 'OCCUPATION';
	this.question = 'PRASHN';
	this.pay = 'PAY_NOW';
	this.paramrsh = 'PARAMARSH';
    
   
    this.event.subscribe('language:change', (data: any) => {
    let lang_code = localStorage.getItem('lang_code');
    this.translate.use(lang_code);
         
	});
	  
	  this.paramarsh_name = this.route.snapshot.params['name'];
	  var id = this.route.snapshot.params['id'];
	  console.log(id);
	  this.fetch.getParamarshField(id).subscribe(res => {
		  console.log(res);
		  if(res['status'] == "true"){
			  console.log(res['data']);
			  this.model.field_name = res['data'].field_name;
		  }else{
			  console.log(res['data']);
			  this.model.field_name = '';
			  $('#dynamic_field').css('display','none');
		  }
	  });
	  let lang_key = localStorage.getItem('lang_key');
	    console.log(lang_key);
	    lang_key = JSON.parse(lang_key);
		
		
		this.fetch.getPostByMenu(id,lang_key).subscribe(res => {
			if(res){
			console.log(res);
				//console.log(res.link);
				//this.post_link = res.link;
				
			if(res['data']['title'] == "" || res['data']['title'] == null )
			{
			this.title = res['data']['title_hi'];
			}else{
				this.title = res['data']['title'];
			}
		}

		});
	  
  }
  paramarsh(){
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	//const m_check = /^\+(?:\d(?:\(\d{3}\)|-\d{3})-\d{3}-(?:\d{2}-\d{2}|\d{4})|\d{11})$/;
	var name = $('#name').val();
	var email = $('#email').val();
	var mobile = $('#mobile_no').val();
	var field_name = $('#field_name').val();
	var jnm_name = $('#name_').val();
	var bdate = $('#bdate').val();
	var btime = $('#btime').val();
	var bplace = $('#bplace').val();
	var occupation = $('#occupation').val();
	
	if(name == ''){
		$("#ename").css("display","block");
		$("#ename").fadeOut(2500);
	}
	// else if(jnm_name == ''){
	// 	$("#ename_").css("display","block");
	// 	$("#ename_").fadeOut(2500);
	// }
	else if(bdate == ''){
		$("#edob").css("display","block");
		$("#edob").fadeOut(2500);
	}else if(btime == ''){
		$("#etime").css("display","block");
		$("#etime").fadeOut(2500);
	}else if(bplace == ''){
		$("#eplace").css("display","block");
		$("#eplace").fadeOut(2500);
	}
	// else if(field_name == ''){
	// 	$("#efield").css("display","block");
	// 	$("#efield").fadeOut(2500);
	// }else if(mobile == '' || mobile.length != 10 ){
	// 	$("#emobile").css("display","block");
	// 	$("#emobile").fadeOut(2500);
	// }
	else  {
		let data = JSON.stringify({'paramarsh_name':this.paramarsh_name,'name' : name, 'email' : email, 'mobile' : mobile, 'birth_name' : name,'birth_date': bdate, 'birth_time' : btime, 'birth_place' : bplace});
		console.log(data);
		this.fetch.payAndMailQues(data).subscribe(res => {
			console.log(res);
			var data_id = res['msg'];
			let options:any = {
				location : 'yes',
				hidden : 'no', 
				zoom : 'yes',
				hideurlbar:'yes',
			};
			let target = "_blank";
			let url = "https://siddhpuja.com/payment/payumoney_paramarsh/index.php?id="+data_id;
			this.iab.create(url,target,options);
					
			/* document.addEventListener("deviceready", function() {
				console.log("window.open works well");
				var target = "_system";
				var inAppBrowserRef = cordova.InAppBrowser.open("http://siddhpuja.com/payment/payumoney_paramarsh/index.php?id="+data_id, target);
				console.log(inAppBrowserRef);
				var myCallback = function(event) { alert(event.url); }
				inAppBrowserRef.addEventListener('loadstart', myCallback);
					inAppBrowserRef.removeEventListener('loadstart', myCallback);
			}, false); */
		});
		
	}
	
	/* this.fetch.paramarsh(data).subscribe(res => {
		console.log(res);
		$('.form_blank')[0].reset();
		this.router.navigate(['/home-new']);
	}); */
  }
  birthplace(){
	var input = document.getElementById('bplace').getElementsByTagName('input')[0];
	
	var autocomplete = new google.maps.places.Autocomplete(input);
	
	autocomplete.addListener('place_changed', function() {
		var place = autocomplete.getPlace();
		var inputValue = place.formatted_address;
		this.latitude = place.geometry.location.lat();
		this.longitude = place.geometry.location.lng();
		if(this.latitude){
			console.log(autocomplete);
			console.log(this.latitude + ", " + this.longitude); 
		}
		localStorage.setItem('latitude', JSON.stringify(this.latitude));
		localStorage.setItem('longitude', JSON.stringify(this.longitude));
		localStorage.setItem('birthplace', JSON.stringify(inputValue));
	});
}
 
}
