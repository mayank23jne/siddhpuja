import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from "@angular/forms";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';
declare let window: any;
declare var $:any;
declare var google: any;
@Component({
  selector: 'app-calendar-panchang',
  templateUrl: './calendar-panchang.page.html',
  styleUrls: ['./calendar-panchang.page.scss'],
})
export class CalendarPanchangPage implements OnInit {
model:any = {};
latitude:any = {};
longitude:any = {};	
timezone:any = {};
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,private geolocation: Geolocation,private socialSharing: SocialSharing,public platform: Platform) { }

  ngOnInit() {
	  var data = this.route.snapshot.params['data'];
	  this.model.data_date = data;
	  $('.panchnag_container').hide();
	  //var data = JSON.parse(localStorage.getItem('user'));
	  this.model.today_date = data;
		var currentTime = new Date(data);
		var month = currentTime.getMonth() + 1;
		var day = currentTime.getDate();
		var year = currentTime.getFullYear();
		var hour = currentTime.getHours();
		var min = currentTime.getMinutes();
		var cdate = month+"-"+day+"-"+year;
		//this.geolocation_fetch(month, day, year, hour, min);
		this.geolocation.getCurrentPosition().then((resp) => {
			this.latitude = resp.coords.latitude;
			this.longitude = resp.coords.longitude;
			var data_ = JSON.stringify({'latitude':this.latitude, 'longitude':this.longitude, 'date':cdate});
				this.fetch.gettimezone(data_).subscribe(res => {
					this.timezone = res.timezone;
					this.geolocation_fetch(month, day, year, hour, min, this.latitude, this.longitude, this.timezone);
				});
		}).catch((error) => {
			console.log('Error getting location', error);
			//alert(JSON.stringify(error));
		});
  }
  panchnagPlace(){
	var self = this;
	var input = document.getElementById('panchnag_place').getElementsByTagName('input')[0];
	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.addListener('place_changed', function() {
		var place = autocomplete.getPlace();
		var inputValue = place.formatted_address;
		this.latitude = place.geometry.location.lat();
		this.longitude = place.geometry.location.lng();
		if(this.latitude){
			console.log(this.latitude + ", " + this.longitude); 
			var currentTime = new Date();
			var month = currentTime.getMonth() + 1;
			var day = currentTime.getDate();
			var year = currentTime.getFullYear();
			var hour = currentTime.getHours();
			var min = currentTime.getMinutes();
			$(".loader").show();
			$('.panchnag_container').hide();
			var cdate = month+"-"+day+"-"+year;
			var data = JSON.stringify({'latitude':this.latitude, 'longitude':this.longitude, 'date':cdate});
			self.fetch.gettimezone(data).subscribe(res => {
				this.timezone = res.timezone;
				self.geolocation_fetch(month, day, year, hour, min, this.latitude, this.longitude, this.timezone);
			});
			//
		} 
	}); 
 }
/*geolocation_fetch(month, day, year, hour, min){
	var cdate = month+"-"+day+"-"+year;
	this.geolocation.getCurrentPosition().then((resp) => {
		//alert(resp.coords.latitude);
		//alert(resp.coords.longitude);
		this.model.lat = resp.coords.latitude;
		this.model.lon = resp.coords.longitude;
		var data = JSON.stringify({'day':day, 'month':month, 'year':year, 'hour':hour, 'min':min, 'lat':this.model.lat, 'lon':this.model.lon, 'tzone':5.5});
			this.fetch.basic_panchang(data).subscribe(res => {
				console.log("basic_panchang",res);
			});
			this.fetch.advanced_panchang(data).subscribe(res => {
				//alert(JSON.stringify(res));
				console.log("advanced_panchang",res);
				$(".loader").hide();
				$('.panchnag_container').show();
				this.model.day = res.day;
				this.model.ritu = res.ritu;
				this.model.sun_sign = res.sun_sign;
				this.model.sunrise = res.sunrise;
				this.model.sunset = res.sunset;
				this.model.moon_sign = res.moon_sign;
				this.model.moonrise = res.moonrise;
				this.model.moonset = res.moonset;
				this.model.disha_shool = res.disha_shool;
				this.model.ayana = res.ayana;
				this.model.paksha = res.paksha;
				this.model.shaka_samvat_name = res.shaka_samvat_name;
				this.model.shaka_samvat = res.shaka_samvat;
				this.model.vikram_samvat = res.vikram_samvat;
				this.model.vkram_samvat_name = res.vkram_samvat_name;
				this.model.abhijit_start = res['abhijit_muhurta'].start;
				this.model.abhijit_end = res['abhijit_muhurta'].end;
				this.model.guliKaal_start = res['guliKaal'].start;
				this.model.guliKaal_end = res['guliKaal'].end;
				this.model.rahukaal_start = res['rahukaal'].start;
				this.model.rahukaal_end = res['rahukaal'].end;
				this.model.yamghant_kaal_start = res['yamghant_kaal'].start;
				this.model.yamghant_kaal_end = res['yamghant_kaal'].end;
				this.model.hindu_maah_amanta = res['hindu_maah'].amanta;
				this.model.hindu_maah_purnimanta = res['hindu_maah'].purnimanta;
				this.model.karan_deity = res['karan']['details'].deity;
				this.model.karan_karan_name = res['karan']['details'].karan_name;
				this.model.karan_special = res['karan']['details'].special;
				this.model.karan_hour = res['karan']['end_time'].hour;
				this.model.karan_minute = res['karan']['end_time'].minute;
				this.model.karan_second = res['karan']['end_time'].second;
				this.model.nakshatra_deity = res['nakshatra']['details'].deity;
				this.model.nakshatra_nak_name = res['nakshatra']['details'].nak_name;
				this.model.nakshatra_ruler = res['nakshatra']['details'].ruler;
				this.model.nakshatra_special = res['nakshatra']['details'].special;
				this.model.nakshatra_summary = res['nakshatra']['details'].summary;
				this.model.nakshatra_hour = res['nakshatra']['end_time'].hour;
				this.model.nakshatra_minute = res['nakshatra']['end_time'].minute;
				this.model.nakshatra_second = res['nakshatra']['end_time'].second;
				this.model.tithi_deity = res['tithi']['details'].deity;
				this.model.tithi_name = res['tithi']['details'].tithi_name;
				this.model.tithi_special = res['tithi']['details'].special;
				this.model.tithi_summary = res['tithi']['details'].summary;
				this.model.tithi_hour = res['tithi']['end_time'].hour;
				this.model.tithi_minute = res['tithi']['end_time'].minute;
				this.model.tithi_second = res['tithi']['end_time'].second;
				this.model.yog_meaning = res['yog']['details'].meaning;
				this.model.yog_name = res['yog']['details'].yog_name;
				this.model.yog_special = res['yog']['details'].special;
				this.model.yog_hour = res['yog']['end_time'].hour;
				this.model.yog_minute = res['yog']['end_time'].minute;
				this.model.yog_second = res['yog']['end_time'].second;
			});
			this.fetch.chaughadiya_muhurta(data).subscribe(res => {
				//console.log("chaughadiya_muhurta",res);
				this.model.mahurat_day = res['chaughadiya']['day'];
				this.model.mahurat_night = res['chaughadiya']['night'];
			});
			this.fetch.hora_muhurta(data).subscribe(res => {
				//console.log("hora_muhurta",res);
				this.model.hora_day = res['hora']['day'];
				this.model.hora_night = res['hora']['night'];
			});
		
	}).catch((error) => {
		console.log('Error getting location', error);
		//alert(JSON.stringify(error));
	}); 
  }*/
  geolocation_fetch(month, day, year, hour, min, lat, lon, timezone){
	var data = JSON.stringify({'day':day, 'month':month, 'year':year, 'hour':hour, 'min':min, 'lat':lat, 'lon':lon, 'tzone':timezone});
			this.fetch.basic_panchang(data).subscribe(res => {
				console.log("basic_panchang",res);
			});
			this.fetch.advanced_panchang(data).subscribe(res => {
				//alert(JSON.stringify(res));
				console.log("advanced_panchang",res);
				$(".loader").hide();
				$('.panchnag_container').show();
				this.model.day = res.day;
				this.model.ritu = res.ritu;
				this.model.sun_sign = res.sun_sign;
				this.model.sunrise = res.sunrise;
				this.model.sunset = res.sunset;
				this.model.moon_sign = res.moon_sign;
				this.model.moonrise = res.moonrise;
				this.model.moonset = res.moonset;
				this.model.disha_shool = res.disha_shool;
				this.model.ayana = res.ayana;
				this.model.paksha = res.paksha;
				this.model.shaka_samvat_name = res.shaka_samvat_name;
				this.model.shaka_samvat = res.shaka_samvat;
				this.model.vikram_samvat = res.vikram_samvat;
				this.model.vkram_samvat_name = res.vkram_samvat_name;
				this.model.abhijit_start = res['abhijit_muhurta'].start;
				this.model.abhijit_end = res['abhijit_muhurta'].end;
				this.model.guliKaal_start = res['guliKaal'].start;
				this.model.guliKaal_end = res['guliKaal'].end;
				this.model.rahukaal_start = res['rahukaal'].start;
				this.model.rahukaal_end = res['rahukaal'].end;
				this.model.yamghant_kaal_start = res['yamghant_kaal'].start;
				this.model.yamghant_kaal_end = res['yamghant_kaal'].end;
				this.model.hindu_maah_amanta = res['hindu_maah'].amanta;
				this.model.hindu_maah_purnimanta = res['hindu_maah'].purnimanta;
				this.model.karan_deity = res['karan']['details'].deity;
				this.model.karan_karan_name = res['karan']['details'].karan_name;
				this.model.karan_special = res['karan']['details'].special;
				this.model.karan_hour = res['karan']['end_time'].hour;
				this.model.karan_minute = res['karan']['end_time'].minute;
				this.model.karan_second = res['karan']['end_time'].second;
				this.model.nakshatra_deity = res['nakshatra']['details'].deity;
				this.model.nakshatra_nak_name = res['nakshatra']['details'].nak_name;
				this.model.nakshatra_ruler = res['nakshatra']['details'].ruler;
				this.model.nakshatra_special = res['nakshatra']['details'].special;
				this.model.nakshatra_summary = res['nakshatra']['details'].summary;
				this.model.nakshatra_hour = res['nakshatra']['end_time'].hour;
				this.model.nakshatra_minute = res['nakshatra']['end_time'].minute;
				this.model.nakshatra_second = res['nakshatra']['end_time'].second;
				this.model.tithi_deity = res['tithi']['details'].deity;
				this.model.tithi_name = res['tithi']['details'].tithi_name;
				this.model.tithi_special = res['tithi']['details'].special;
				this.model.tithi_summary = res['tithi']['details'].summary;
				this.model.tithi_hour = res['tithi']['end_time'].hour;
				this.model.tithi_minute = res['tithi']['end_time'].minute;
				this.model.tithi_second = res['tithi']['end_time'].second;
				this.model.yog_meaning = res['yog']['details'].meaning;
				this.model.yog_name = res['yog']['details'].yog_name;
				this.model.yog_special = res['yog']['details'].special;
				this.model.yog_hour = res['yog']['end_time'].hour;
				this.model.yog_minute = res['yog']['end_time'].minute;
				this.model.yog_second = res['yog']['end_time'].second;
			});
			this.fetch.chaughadiya_muhurta(data).subscribe(res => {
				//console.log("chaughadiya_muhurta",res);
				this.model.mahurat_day = res['chaughadiya']['day'];
				this.model.mahurat_night = res['chaughadiya']['night'];
			});
			this.fetch.hora_muhurta(data).subscribe(res => {
				//console.log("hora_muhurta",res);
				this.model.hora_day = res['hora']['day'];
				this.model.hora_night = res['hora']['night'];
			});  
  }
  go_back(){
	 
	/*  var date = this.route.snapshot.params['data'];
	  alert(date);
	this.router.navigate(['/calendar-panchang',date]); */
	//this.router.navigate(['/home']);
  }
  share_panchang(){
	var date = new Date(this.model.today_date);
	var date_ = date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear();
	var msg_data = "<html>&#128681; श्री गणेशाय नमः &#128681; \r\n&#128220; दैनिक पंचांग &#128220;\r\n\r\n&#127774; "+date_+"\r\n\r\n&#127774; पंचांग  \r\n☀️ तिथि "+this.model.tithi_name+" "+this.model.tithi_hour+":"+this.model.tithi_minute+":"+this.model.tithi_second+"\r\n☀️ नक्षत्र "+this.model.nakshatra_nak_name+" "+this.model.nakshatra_hour+":"+this.model.nakshatra_minute+":"+this.model.nakshatra_second+"\r\n☀️ करण "+this.model.karan_karan_name+" "+this.model.karan_hour+":"+this.model.karan_minute+":"+this.model.karan_second+"\r\n☀️ पक्ष "+this.model.paksha+"\r\n☀️ योग  "+this.model.yog_name+" "+this.model.yog_hour+":"+this.model.yog_minute+":"+this.model.yog_second+"\r\n☀️ वार "+this.model.day+"\r\n\r\n&#127774; सूर्य व चन्द्र से संबंधित गणनाएँ \r\n☀️ सूर्योदय "+this.model.sunrise+"<br>☀️ सूर्यास्त "+this.model.sunset+"\r\n☀️ सूर्य राशि "+this.model.sun_sign+"\r\n☀️ चद्रोदय "+this.model.moonrise+"\r\n☀️ चन्द्रास्त "+this.model.moonset+"\r\n☀️ चंद्र राशि "+this.model.moonset+"\r\n☀️ ऋतू "+this.model.ritu+"\r\n\r\n&#127774; हिन्दू मास एवं वर्ष \r\n☀️ शक सम्वत "+this.model.shaka_samvat+" "+this.model.shaka_samvat_name+"\r\n☀️ विक्रम सम्वत "+this.model.vikram_samvat+" "+this.model.vkram_samvat_name+"\r\n☀️ मास अमांत "+this.model.hindu_maah_amanta+"\r\n☀️ मास पूर्णिमांत "+this.model.hindu_maah_purnimanta+"\r\n\r\n&#127774; शुभ और अशुभ समय \r\n☀️ शुभ समय \r\n☀️ अभिजित "+this.model.abhijit_start+" - "+this.model.abhijit_end+"\r\n☀️ अशुभ समय  \r\n☀️ यमघण्ट "+this.model.yamghant_kaal_start+" - "+this.model.yamghant_kaal_end+"\r\n☀️ राहु काल "+this.model.rahukaal_start+"-"+this.model.rahukaal_end+"\r\n☀️ गुलिक काल "+this.model.yamghant_kaal_start+" - "+this.model.yamghant_kaal_end+"\r\n\r\n&#127774; दिशा शूल\r\n☀️ दिशा शूल "+this.model.disha_shool+"\r\n\r\n\r\n सिद्ध पूजा ऍप से निर्मित \r\n https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain </html>";
	console.log(msg_data);
	var text = $(msg_data).text();
	console.log(text);
	document.addEventListener("deviceready", function() {
		window.plugins.socialsharing.share(text);
	}, false); 
}
}
