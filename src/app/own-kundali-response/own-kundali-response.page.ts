import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-own-kundali-response',
  templateUrl: './own-kundali-response.page.html',
  styleUrls: ['./own-kundali-response.page.scss'],
})
export class OwnKundaliResponsePage implements OnInit {
model:any = {};
pdfUrl:any = {};
grah_data: any = [];
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService) {
	document.addEventListener("backbutton", function() {
		this.router.navigate(['/kundali']);
	}, false);
  }

  ngOnInit() {
	/* let data = JSON.stringify({"name" : "Ajeet Kanojia","gender" : "male", "day" : 10, "month" : 7, "year" :1992,"hour" : 5, "min" : 12,"lat" : 19.231,"lon" : 72.4242, "language" : "hi", "tzone" : 5.5, "place" : "Mumbai,Maharashtra India","chart_style" : "NORTH_INDIAN", "footer_link" : "http://siddhpuja.com/", "logo_url" : "logo_url", "company_name" :"SiddhPuja", "company_info" : "Your Company Info", "domain_url" : "http://siddhpuja.com/","company_email" : "info@siddhpuja.com", "company_mobile" : "+918989153379"});
	  this.fetch.getPdfKundali(data).subscribe(res => {
		console.log("pdf response",res);
		
	});*/

	  //var data = this.route.snapshot.params['data'];
	/* let data = JSON.stringify({"day":12,"month":3,"year":1992,"hour":2,"min":23,"lat":19.132,"lon":72.342,"tzone":5.5});
	 let ndata = JSON.stringify({"name":"test","day":12,"month":3,"year":1992});
	  this.fetch.birth_details(data).subscribe(res => {
		console.log("birth_details",res);
		this.model.janam_dinank = res['day']+"/"+res['month']+"/"+res["year"];
		this.model.janm_samay = res["hour"]+":"+res["minute"];
		this.model.janam_shetra = res["timezone"];
		this.model.ayanamsha = res["ayanamsha"];
		this.model.suryoday = res["sunrise"];
		this.model.suryast = res["sunset"];
	});
	 this.fetch.basic_panchang(data).subscribe(res => {
		console.log("basic_panchang",res);
		this.model.karan = res['karan'];
		this.model.nakshatra = res['nakshatra'];
		this.model.tithi = res['tithi'];
		this.model.yog = res['yog'];
	});
	  this.fetch.astro_details(data).subscribe(res => {
		console.log("astro_details",res);
		this.model.Varna = res['Varna'];
		this.model.Charan = res['Charan'];
		this.model.Gan = res['Gan'];
		this.model.Karan = res['Karan'];
		this.model.Nadi = res['Nadi'];
		this.model.Naksahtra = res['Naksahtra'];
		this.model.NaksahtraLord = res['NaksahtraLord'];
		this.model.SignLord = res['SignLord'];
		this.model.Tithi = res['Tithi'];
		this.model.Vashya = res['Vashya'];
		this.model.Yog = res['Yog'];
		this.model.Yoni = res['Yoni'];
		this.model.ascendant = res['ascendant'];
		this.model.ascendant_lord = res['ascendant_lord'];
		this.model.name_alphabet = res['name_alphabet'];
		this.model.paya = res['paya'];
		this.model.sign = res['sign'];
		this.model.tatva = res['tatva'];
		this.model.yunja = res['yunja'];
	});
	  this.fetch.planets(data).subscribe(res => {
		console.log("planets",res);
		this.grah_data = res;
	});
	  this.fetch.bhav_madhya(data).subscribe(res => {
		console.log("bhav_madhya",res);
		this.model.ascendant = res['ascendant'];
		this.model.ayanamsha = res['ayanamsha'];
		this.bhav_madhya = res['bhav_madhya'];
		this.bhav_sandhi = res['bhav_sandhi'];
	});
	  this.fetch.current_vdasha(data).subscribe(res => {
		console.log("current_vdasha",res);
	});
	  this.fetch.major_vdasha(data).subscribe(res => {
		console.log("major_vdasha",res);
	});
	  this.fetch.current_vdasha_all(data).subscribe(res => {
		console.log("current_vdasha_all",res);
	});
	  this.fetch.current_chardasha(data).subscribe(res => {
		console.log("current_chardasha",res);
	});
	  this.fetch.current_yogini_dasha(data).subscribe(res => {
		console.log("current_yogini_dasha",res);
	});
	  this.fetch.major_chardasha(data).subscribe(res => {
		console.log("major_chardasha",res);
	});
	  this.fetch.major_yogini_dasha(data).subscribe(res => {
		console.log("major_yogini_dasha",res);
	});
	  this.fetch.sarvashtak(data).subscribe(res => {
		console.log("sarvashtak",res);
	});
	  this.fetch.kalsarpa_details(data).subscribe(res => {
		console.log("kalsarpa_details",res);
	});
	  this.fetch.pitra_dosha_report(data).subscribe(res => {
		console.log("pitra_dosha_report",res);
	});
	  this.fetch.sadhesati_current_status(data).subscribe(res => {
		console.log("sadhesati_current_status",res);
	});
	  this.fetch.basic_gem_suggestion(data).subscribe(res => {
		console.log("basic_gem_suggestion",res);
	});
	  this.fetch.rudraksha_suggestion(data).subscribe(res => {
		console.log("rudraksha_suggestion",res);
	});
	  this.fetch.general_ascendant_report(data).subscribe(res => {
		console.log("general_ascendant_report",res);
	});
	  this.fetch.numero_table(data).subscribe(res => {
		console.log("numro_table -" , res);
	});
	this.fetch.numero_report(data).subscribe(res => {
		console.log("numero_report",res);
	}); 
	this.fetch.numero_fav_time(data).subscribe(res => {
		console.log("numero_fav_time",res);
	}); 
	this.fetch.numero_place_vastu(data).subscribe(res => {
		console.log("numero_place_vastu",res);
	}); 
	this.fetch.numero_fasts_report(data).subscribe(res => {
		console.log("numero_fasts_report",res);
	}); 
	this.fetch.numero_fav_lord(data).subscribe(res => {
		console.log("numero_fav_lord",res);
	}); 
	this.fetch.numero_fav_mantra(data).subscribe(res => {
		console.log("numero_fav_mantra",res);
	}); */
	var data = this.route.snapshot.params['data'];
	this.pdfUrl = data;
  }

}
