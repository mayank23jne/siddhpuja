import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'

declare var google: any;
declare var $:any;
declare var cordova;

@Component({
  selector: 'app-match-making',
  templateUrl: './match-making.page.html',
  styleUrls: ['./match-making.page.scss'],
})
export class MatchMakingPage implements OnInit {
model:any = {};

public name:any;
public name_req:any;
public gen:any;
public gen_req:any;
public male:any;
public female:any;
public birth_date:any;
public birth_date_req:any;
public birth_time:any;
public birth_time_req:any;
public birth_place:any;
public birth_place_req:any;
public kundali_match_pdf:any;
public language:any;
public surname:any;
public first:any;
public boy_detail:any;
public girl_detail:any;
public required:any;
public next:any;


constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){

  	let lang_code = localStorage.getItem('lang_code');
	  console.log(lang_code);
	this.translate.use(lang_code);
	this.language = lang_code;
	this.kundali_match_pdf = 'KUNDLI_MATCH_PDF';
  	this.surname = 'SURNAME';
	this.name = 'NAME';
	this.name_req = 'NAME_REQUIRED';
	this.required = 'REQUIRED';
	this.gen = 'GENDER';
	this.gen_req = 'GENDER_REQUIRED';
	this.male = 'MALE';
	this.female = 'FEMALE';
	this.birth_date = 'BIRTH_DATE';
	this.birth_date_req = 'BIRTH_DATE_REQUIRED';
	this.birth_time = 'BIRTH_TIME';
	this.birth_time_req = 'BIRTH_TIME_REQUIRED';
	this.birth_place = 'BIRTH_PLACE';
	this.birth_place_req = 'BIRTH_PLACE_REQUIRED';
	this.boy_detail = 'BOY_DETAIL';
	this.girl_detail = 'GIRL_DETAIL';
	this.first = 'FIRST';
	this.next = 'NEXT';
	

  this.event.subscribe('language:change', (data: any) => {
  let lang_code = localStorage.getItem('lang_code');
	this.translate.use(lang_code);
	
	  });
	}

	m_birthplace(){
		var input = document.getElementById('m_place').getElementsByTagName('input')[0];
		var autocomplete = new google.maps.places.Autocomplete(input);
		autocomplete.addListener('place_changed', function() {
			var place = autocomplete.getPlace();
			var inputValue = place.formatted_address;
			this.latitude = place.geometry.location.lat();
			this.longitude = place.geometry.location.lng();
			console.log("male birthplace", this.latitude + ", " + this.longitude); 
			localStorage.setItem('m_latitude', JSON.stringify(this.latitude));
			localStorage.setItem('m_longitude', JSON.stringify(this.longitude));
			localStorage.setItem('m_birthplace', JSON.stringify(inputValue));
		});
	}
	f_birthplace(){
		var input = document.getElementById('f_place').getElementsByTagName('input')[0];
		var autocomplete = new google.maps.places.Autocomplete(input);
		autocomplete.addListener('place_changed', function() {
			var place = autocomplete.getPlace();
			var inputValue = place.formatted_address;
			this.latitude = place.geometry.location.lat();
			this.longitude = place.geometry.location.lng();
			console.log("female birthplace",this.latitude + ", " + this.longitude); 
			localStorage.setItem('f_latitude', JSON.stringify(this.latitude));
			localStorage.setItem('f_longitude', JSON.stringify(this.longitude));
			localStorage.setItem('f_birthplace', JSON.stringify(inputValue));
		});
	}
	submit(){
	/* 	var data = JSON.stringify({'m_first_name' : "Sanjay", 'm_last_name' : "Sharma",'m_day' : 11, "m_month" : 5, 'm_year' :1992, 'm_hour' : 12, 'm_minute' : 30, 'm_latitude' : 19.231, 'm_longitude' : 72.4242,'m_timezone' : 5.5, 'm_place' : "Mumbai,Maharashtra India", 'f_first_name' : "Ajeet", 'f_last_name' : "Kanojia", 'f_day' : 13,  'f_month' : 5,'f_year' :1990, 'f_hour' : 12, 'f_minute' : 40,  'f_latitude' : 19.231,  'f_longitude' : 72.4242,  'f_timezone' : 5.5,  'f_place' : "Mumbai,Maharashtra India",  'language' : "hi","chart_style" : "NORTH_INDIAN", "footer_link" : "astrologyapi.com",  "logo_url" : "http://siddhpuja.com/logo.png",'company_name' :"Vedic Rishi Astro Solutions Pvt. Ltd.",'company_info' : "Your Company Info",  'domain_url' : "https://www.astrologyapi.com", 'company_email' : "mail@astrologyapi.com",  'company_landline' : "+91-22123222",  'company_mobile' : "+911212121212"});
			console.log(data);
			this.fetch.getPdfMatchMaking(data).subscribe(res => {
				console.log("pdf response",res);
				
			}); */
		var m_fname = $("#m_fname").val();
		var m_lname = $("#m_lname").val();
		var m_dob = $("#m_dob").val();
		var m_bt = $("#m_bt").val();
		var f_fname = $('#f_fname').val();
		var f_lname = $('#f_lname').val();
		var f_dob = $('#f_dob').val();
		var f_bt = $('#f_bt').val();
		if(m_fname == ''){
			$("#em_fname").css("display","block");
			$("#em_fname").fadeOut(2500);
		}else if(m_lname == ''){
			$("#em_lname").css("display","block");
			$("#em_lname").fadeOut(2500);
		}else if(m_dob == ''){
			$("#em_dob").css("display","block");
			$("#em_dob").fadeOut(2500);
		}else if(m_bt == ''){
			$("#em_bt").css("display","block");
			$("#em_bt").fadeOut(2500);
		}else if(JSON.parse(localStorage.getItem('m_latitude')) == null && JSON.parse(localStorage.getItem('m_longitude')) == null && JSON.parse(localStorage.getItem('m_birthplace')) == null){
			$("#em_bp").css("display","block");
			$("#em_bp").fadeOut(2500);
		}else if(f_fname == ''){
			$("#ef_fname").css("display","block");
			$("#ef_fname").fadeOut(2500);
		}else if(f_lname == ''){
			$("#ef_lname").css("display","block");
			$("#ef_lname").fadeOut(2500);
		}else if(f_dob == ''){
			$("#ef_dob").css("display","block");
			$("#ef_dob").fadeOut(2500);
		}else if(f_bt == ''){
			$("#ef_bt").css("display","block");
			$("#ef_bt").fadeOut(2500);
		}else if(JSON.parse(localStorage.getItem('f_latitude')) == null && JSON.parse(localStorage.getItem('f_longitude')) == null && JSON.parse(localStorage.getItem('f_birthplace')) == null){
			$("#ef_bp").css("display","block");
			$("#ef_bp").fadeOut(2500);
		}else{
			//male birth date and time
			var mbirthdate = new Date(m_dob);
			var m_month = mbirthdate.getMonth() + 1;
			var m_day = mbirthdate.getDate();
			var m_year = mbirthdate.getFullYear();
			var mbirthtime = new Date(m_bt);
			var m_hour = mbirthtime.getHours();
			var m_min = mbirthtime.getMinutes();
			
			//Female birth date and time
			var fbirthdate = new Date(f_dob);
			var f_month = fbirthdate.getMonth() + 1;
			var f_day = fbirthdate.getDate();
			var f_year = fbirthdate.getFullYear();
			var fbirthtime = new Date(f_bt);
			var f_hour = fbirthtime.getHours();
			var f_min = fbirthtime.getMinutes();
			
			
			var data = JSON.stringify({"m_first_name" : m_fname, "m_last_name" : m_lname,"m_day" : m_day,"m_month" : m_month, "m_year" :m_year, "m_hour" : m_hour, "m_minute" : m_min, "m_latitude" : JSON.parse(localStorage.getItem('m_latitude')),"m_longitude" : JSON.parse(localStorage.getItem('m_longitude')), "m_timezone" : 5.5, "m_place" : JSON.parse(localStorage.getItem('m_birthplace')), "f_first_name" : f_fname, "f_last_name" : f_lname, "f_day" : f_day, "f_month" : f_month, "f_year" : f_year, "f_hour" : f_hour, "f_minute" : f_min, "f_latitude" : JSON.parse(localStorage.getItem('f_latitude')), "f_longitude" : JSON.parse(localStorage.getItem('f_longitude')), "f_timezone" : 5.5, "f_place" : JSON.parse(localStorage.getItem('f_birthplace'))});
			this.fetch.generate_matchmaking(data).subscribe(res => {
				console.log("pdf response",res);
				if(res['status'] == "true"){
					var data_id = res['data'];


          	let kundali_data = "https://siddhpuja.com/payment/payumoney_matchmaking/index.php?id="+data_id;

			localStorage.setItem('kundali_match_data',kundali_data);

				




					
					// this.browserTab.isAvailable().then(isAvailable => {
					//   if (isAvailable) {
					// 	this.browserTab.openUrl("https://siddhpuja.com/payment/payumoney_matchmaking/index.php?id="+data_id);
					//   } else {
					// 	// open URL with InAppBrowser instead or SafariViewController
					//   }
					// });
					localStorage.removeItem('m_latitude'); 
					localStorage.removeItem('m_longitude'); 
					localStorage.removeItem('m_birthplace'); 
					localStorage.removeItem('f_latitude'); 
					localStorage.removeItem('f_longitude'); 
					localStorage.removeItem('f_birthplace'); 
					$("#m_fname").val('');
					$("#m_lname").val('');
					$("#m_dob").val('');
					$("#m_bt").val('');
					$('#f_fname').val('');
					$('#f_lname').val('');
					$('#f_dob').val('');
					$('#f_bt').val('');
					$('#f_place').val('');
					$('#m_place').val('');

          this.router.navigate(['/kundali-match-payment']);
				}
			});
		}
	}
}

