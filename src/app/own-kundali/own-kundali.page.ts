import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser/ngx";

declare var google: any;
declare var $: any;
declare var cordova;
@Component({
  selector: 'app-own-kundali',
  templateUrl: './own-kundali.page.html',
  styleUrls: ['./own-kundali.page.scss'],
})
export class OwnKundaliPage implements OnInit {
latitude:any = {};
longitude:any = {};
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
public next:any;
public kundali_pdf:any;
public language:any;


public gender_v = '';
  constructor(private inAppBrowser: InAppBrowser,private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService) { 
	const options: InAppBrowserOptions = {
		toolbar: 'no',
		location: 'no',
		zoom: 'no'
	}
	
  }

  ngOnInit() {
	/*let data = JSON.stringify({"day":12,"month":3,"year":1992,"hour":2,"min":23,"lat":19.132,"lon":72.342,"tzone":5.5});
	this.fetch.getKundali(data).subscribe(res => {
		console.log(res);
	});*/
	/*document.addEventListener("deviceready", function() {
		console.log("window.open works well");
		var target = "_system";
		var inAppBrowserRef = cordova.InAppBrowser.open("http://siddhpuja.com/payment/payumoney_kundali/index.php", target);
		console.log(inAppBrowserRef);
		var myCallback = function(event) { alert(event.url); }
		inAppBrowserRef.addEventListener('loadstart', myCallback);
		inAppBrowserRef.removeEventListener('loadstart', myCallback);
	 }, false);*/
  }
  ionViewDidEnter(){

    let lang_code = localStorage.getItem('lang_code');
	this.translate.use(lang_code);
	this.language = lang_code;
	this.kundali_pdf = 'KUNDLI_PDF';
	this.name = 'NAME';
	this.name_req = 'NAME_REQUIRED';
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
	this.next = 'NEXT';

    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
	  this.translate.use(lang_code);
	
	  });
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
	gender(value){
		this.gender_v = value.detail.value;
		console.log(this.gender_v);
	}
	submit(){
	localStorage.removeItem('kundali_data'); 
		var name = $("#name").val();
		var bod = $("#bdate").val();
		var bt = $("#btime").val();
		var b_lat = JSON.parse(localStorage.getItem('latitude'));
		var b_lon = JSON.parse(localStorage.getItem('longitude'));
		var b_place = JSON.parse(localStorage.getItem('birthplace'));
		console.log(b_lat+", "+b_lon+", "+b_place);
		if(name == ''){
			$("#ename").css("display","block");
			$("#ename").fadeOut(2500);
		}else if(this.gender_v == ''){
			$("#egender").css("display","block");
			$("#egender").fadeOut(2500);
		}else if(bod == ''){
			$("#edob").css("display","block");
			$("#edob").fadeOut(2500);
		}else if(bt == ''){
			$("#etime").css("display","block");
			$("#etime").fadeOut(2500);
		}else if(JSON.parse(localStorage.getItem('latitude')) == null && JSON.parse(localStorage.getItem('longitude')) == null && JSON.parse(localStorage.getItem('birthplace')) == null){
			$("#eplace").css("display","block");
			$("#eplace").fadeOut(2500);
		}else{
			var birthdate = new Date(bod);
			var month = birthdate.getMonth() + 1;
			var day = birthdate.getDate();
			var year = birthdate.getFullYear();
			
			var birthtime = new Date(bt);
			var hour = birthtime.getHours();
			var min = birthtime.getMinutes();
			var bdate = month+"-"+day+"-"+year;
			
			/*let data = JSON.stringify({"name" : name,"gender" : this.model.gender_value,'month': month,'day':day, 'year':year, 'hour' : hour, 'min':min, 'lat':JSON.parse(localStorage.getItem('latitude')), 'lon':JSON.parse(localStorage.getItem('longitude')), 'tzone': '5.5', "language" : "hi", "place" : JSON.parse(localStorage.getItem('birthplace')),"chart_style" : "NORTH_INDIAN", "footer_link" : "http://siddhpuja.com/", "logo_url" : "http://siddhpuja.com/logo.png", "company_name" :"SiddhPuja", "company_info" : "Siddhpuja.com के पास सबसे बड़े धार्मिक संगठनों, शैक्षणिक संस्थानों, संस्कृत विद्यापीठ, आचार्यों, बनारस, उज्जैन, हरिद्वार और देश के अन्य हिस्सों से आने वाले पुजारी हैं। हमसे जुड़े सभी शिक्षित और सत्यापित ज्योतिषी हैं।", "domain_url" : "http://siddhpuja.com/","company_email" : "info@siddhpuja.com", "company_mobile" : "+918989153379"});
			
			this.fetch.getPdfKundali(data).subscribe(res => {
				console.log("pdf response",res);
				if(res.status == true){
					this.model.pdfurl = res.pdf_url;
					$('#pdf_btn').css('display','block');
					localStorage.removeItem('latitude'); 
					localStorage.removeItem('longitude'); 
					localStorage.removeItem('birthplace'); 
					$("#name").val('');
					$("#bdate").val('');
					$("#btime").val('');
					$("#bplace").val('');
					this.router.navigate(['/own-kundali-response',this.model.pdfurl]);
				}
			});*/
			/*let data = JSON.stringify({"name" : name,'date':day, 'month':month, 'year':year, 'hour':hour, 'minute':min, 'latitude':JSON.parse(localStorage.getItem('latitude')), 'longitude':JSON.parse(localStorage.getItem('longitude')),'timezone':'5.5', 'place':JSON.parse(localStorage.getItem('birthplace')) });*/
			/*this.fetch.get_converted_pdf(data).subscribe(res => {
				console.log("pdf response",res);
				
			});*/
			let data = JSON.stringify({"name" : name,"gender" : this.gender_v,'month': month,'day':day, 'year':year, 'hour' : hour, 'min':min, 'lat':JSON.parse(localStorage.getItem('latitude')), 'lon':JSON.parse(localStorage.getItem('longitude')), 'tzone': '5.5', "language" : "hi", "place" : JSON.parse(localStorage.getItem('birthplace'))});
			this.fetch.generate_kundali(data).subscribe(res => {
				console.log("pdf response",res);
				
				if(res['status'] == "true"){
					localStorage.removeItem('latitude'); 
					localStorage.removeItem('longitude'); 
					localStorage.removeItem('birthplace'); 
					$("#name").val('');
					$("#bdate").val('');
					$("#btime").val('');
					$("#bplace").val('');
					var data_id = res['data'];

					let kundali_data = "https://siddhpuja.com/payment/payumoney_kundali/index.php?id="+data_id;

					localStorage.setItem('kundali_data',kundali_data);
                  
					//const browser = this.inAppBrowser.create("https://siddhpuja.com/payment/payumoney_kundali/index.php?id="+data_id, '_blank');
					
   					

					//this.router.navigate(['/kundali-payment']);


					//this.browserTab.isAvailable().then(isAvailable => {
					//  if (isAvailable) {
					//	this.browserTab.openUrl("https://siddhpuja.com/payment/payumoney_kundali/index.php?id="+data_id);
					 // } else {
						// open URL with InAppBrowser instead or SafariViewController
					//  }
					//});
					/* document.addEventListener("deviceready", function() {
						console.log("window.open works well");
						var target = "_system";
						var inAppBrowserRef = cordova.InAppBrowser.open("http://siddhpuja.com/payment/payumoney_kundali/index.php?id="+data_id, target);
						console.log(inAppBrowserRef);
						var myCallback = function(event) { alert(event.url); }
						inAppBrowserRef.addEventListener('loadstart', myCallback);
						inAppBrowserRef.removeEventListener('loadstart', myCallback);
					}, false); */
				}
			});
		}
		
	}
	
	
	
}
