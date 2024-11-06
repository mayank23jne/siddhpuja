import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor(private http: HttpClient) { }
  
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
	  /* 'Access-Control-Allow-Origin': '*',
	  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, PATCH, DELETE' */
    })
  };
  
	getMenu(): Observable<any> { 

		return this.http.get(environment.url + 'wp-json/menus/v1/menus/main-menu')
	}
	
	getNewMenu(lang_key): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/new_puja_categories.php?id='+lang_key, {
      headers: headers
    });
	}
	getSidhhMenuName(category,lang_key=""): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/new_puja_menu_name.php?id='+category+'&lang_key='+lang_key, {
      headers: headers
    });
	}
	getSubMenu(category,lang_key=""): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/new_puja_sub_cat_list.php?id='+category+'&lang_key='+lang_key, {
      headers: headers
    });
	}
	getPostByMenu(category,lang_key=""): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/new_puja_post_by_cat_id.php?id='+category+'&lang_key='+lang_key, {
      headers: headers
    });
	}
	getHomePageSlider(): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/home_page_slider.php', {
      headers: headers
    });
	}
	getPost(id): Observable<any> {

		return this.http.get(environment.url + 'wp-json/wp/v2/posts/'+id+'?_embed')
	}
	getProduct(id): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 

		return this.http.get(environment.url +'api/single_product.php?id='+id, {
      headers: headers
    });
	}

	getProductByCategory(category): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'api/woo_category.php?category='+category, {
      headers: headers
    });
	}
	
	booknow(data : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'api/book_now.php', data, {
      headers: headers
    });
	}
	
	paramarsh(data : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'api/paramarsh.php', data, {
      headers: headers
    });
	}
	getpanchang(data: any): Observable<any> { 
		
		  let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
		return this.http.post(environment.url +'astro_api/panchang.php', data, {
      headers: headers
    });
	}
	
	
	gettimezone(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/timezone_with_dst', data, {
      headers:  headers
    });
	}
	getDailyHoroscope(data:any,lang=""): Observable<any> {
	
	let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': lang
	})
		return this.http.post('https://json.astrologyapi.com/v1/sun_sign_prediction/daily/'+data, { "timezone" : 5.5}, {
      headers:  headers
    });
	}
	getPdfKundali(data:any): Observable<any> {
		
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://pdf.astrologyapi.com/v1/basic_horoscope_pdf', data, {
      headers:  headers
    });
	}
	getPdfMatchMaking(data:any): Observable<any> {
		
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	  })
		return this.http.post('https://pdf.astrologyapi.com/v1/match_making_pdf', data, {
      headers:  headers
    });
	}
	getRashifal(): Observable<any> {
	let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.get('https://json.astrologyapi.com/v1/horoscope_prediction/daily/:capricorn', {
      headers: headers
    });
	}
	basic_panchang(data:any,lang_code=""): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': lang_code
	  })
		return this.http.post('https://json.astrologyapi.com/v1/basic_panchang', data, {
      headers:  headers
    });
	}
	advanced_panchang(data:any,lang_code=""): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': lang_code
	})
		return this.http.post('https://json.astrologyapi.com/v1/advanced_panchang', data, {
      headers:  headers
    });
	}
	 chaughadiya_muhurta(data:any,lang_code=""): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': lang_code
	  })
		return this.http.post('https://json.astrologyapi.com/v1/chaughadiya_muhurta', data, {
      headers:  headers
    });
	}
	hora_muhurta(data:any,lang_code=""): Observable<any> {
	let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': lang_code
	})
		return this.http.post('https://json.astrologyapi.com/v1/hora_muhurta', data, {
      headers:  headers
    });
	}
	birth_details(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/birth_details', data, {
      headers:  headers
    });
	}
	astro_details(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/astro_details', data, {
      headers:  headers
    });
	}
	/* basic_panchang(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/basic_panchang', data, {
      headers:  headers
    });
	} */
	planets(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/planets', data, {
      headers:  headers
    });
	}
	bhav_madhya(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/bhav_madhya', data, {
      headers:  headers
    });
	}
	current_vdasha(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/current_vdasha', data, {
      headers:  headers
    });
	}
	major_vdasha(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/major_vdasha', data, {
      headers:  headers
    });
	}
	current_vdasha_date(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/current_vdasha_date', data, {
      headers:  headers
    });
	}
	sub_vdasha(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/sub_vdasha/:md', data, {
      headers:  headers
    });
	}
	sub_sub_vdasha(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/sub_sub_vdasha/:md/:ad', data, {
      headers:  headers
    });
	}
	sub_sub_sub_sub_vdasha(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/sub_sub_sub_sub_vdasha/:md/:ad/:pd/:sd', data, {
      headers:  headers
    });
	}
	current_vdasha_all(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/current_vdasha_all', data, {
      headers:  headers
    });
	}
	current_chardasha(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/current_chardasha', data, {
      headers:  headers
    });
	}
	current_yogini_dasha(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/current_yogini_dasha', data, {
      headers:  headers
    });
	}
	major_chardasha(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/major_chardasha', data, {
      headers:  headers
    });
	}
	major_yogini_dasha(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/major_yogini_dasha', data, {
      headers:  headers
    });
	}
	sarvashtak(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/sarvashtak', data, {
      headers:  headers
    });
	}
	kalsarpa_details(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/kalsarpa_details', data, {
      headers:  headers
    });
	}
	pitra_dosha_report(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/pitra_dosha_report', data, {
      headers:  headers
    });
	}
	sadhesati_current_status(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/sadhesati_current_status', data, {
      headers:  headers
    });
	}
	basic_gem_suggestion(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/basic_gem_suggestion', data, {
      headers:  headers
    });
	}
	rudraksha_suggestion(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/rudraksha_suggestion', data, {
      headers:  headers
    });
	}
	general_ascendant_report(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/general_ascendant_report', data, {
      headers:  headers
    });
	}
	daily_nakshatra_prediction(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/daily_nakshatra_prediction', data, {
      headers:  headers
    });
	}
	numero_table(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/numero_table', data, {
      headers:  headers
    });
	}
	numero_report(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/numero_report', data, {
      headers:  headers
    });
	}
	numero_fav_time(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/numero_fav_time', data, {
      headers:  headers
    });
	}
	numero_place_vastu(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/numero_place_vastu', data, {
      headers:  headers
    });
	}
	numero_fasts_report(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/numero_fasts_report', data, {
      headers:  headers
    });
	}
	numero_fav_lord(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/numero_fav_lord', data, {
      headers:  headers
    });
	}
	numero_fav_mantra(data:any): Observable<any> {
		let headers =new HttpHeaders({
    'Authorization': 'Basic '+ btoa("605623:1941af7490b5c57f34a9ed115a1dbc34")+'',
    'Content-Type': 'application/json',
	'Accept-Language': 'hi'
	  })
		return this.http.post('https://json.astrologyapi.com/v1/numero_fav_mantra', data, {
      headers:  headers
    });
	}
	
	festival_list(data : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/festival_list.php', data, {
      headers: headers
    });
	}
	festival_list_all(data : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/fest_list.php', data, {
      headers: headers
    });
	}
	
	festival_desc(id : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/festival_description.php?id='+id, {
      headers: headers
    });
	}
	granth_cat(): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/category_list.php', {
      headers: headers
    });
	}
	granth_subCat(id : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/sub_category_list.php?id='+id, {
      headers: headers
    });
	}
	granth_detail(data : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/granth_detail.php', data, {
      headers: headers
    });
	}
	
	live_darshan_list(lang_key=""): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/new_live_darshan.php?lang_key='+lang_key, {
      headers: headers
    });
	}
	live_darshan_video(id : any,lang_key=""): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/new_live_darshan_video.php?id='+id+'&lang_key='+lang_key, {
      headers: headers
    });
	}
	more_granth_cat(): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/more_category_list.php', {
      headers: headers
    });
	}
	more_granth_subCat(id : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/more_sub_category_list.php?id='+id, {
      headers: headers
    });
	}
	more_granth_sub_subCat(data : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/sub_subCategory_list.php', data, {
      headers: headers
    });
	}
	more_granth_detail(data : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/more_cat_details.php', data, {
      headers: headers
    });
	}
	payumonety(): Observable<any> {
		var data = JSON.stringify({'key': 'JJdlHep2', 'txnid':'123456789', 'amount':'1', 'pinfo': 'kundali', 'fname':'khyati', 'email':'khyati.eway@gmail.com', 'udf5':'1234','salt': 'vRKRqPP7Q3'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'payment/payumoney/index.php', data, {
      headers: headers
    });
	}
	granth_cat_by_id(id : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/granth_category_by_id.php?id='+id, {
      headers: headers
    });
	}
	more_category_by_id(id : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/more_category_by_id.php?id='+id, {
      headers: headers
    });
	}
	get_calendar(data : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/calendar.php', data, {
      headers: headers
    });
	}
	get_converted_pdf(data : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'pdf_api/pdf_api.php', data, {
      headers: headers
    });
	}
	generate_kundali(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/generate_kundali_pdf.php', data, {
      headers: headers
    });
	}
	generate_matchmaking(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/generate_matchmaking_pdf.php', data, {
      headers: headers
    });
	}
	getParamarshField(id : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/paramarsh_field.php?id='+id, {
      headers: headers
    });
	}
	payAndMailQues(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/paramarsh_prashan.php', data, {
      headers: headers
    });
	}
	firstQues(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/pratham_paramarsh.php', data, {
      headers: headers
    });
	}
	product_purchase(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/product_purchase.php', data, {
      headers: headers
    });
	}
	hindi_calendar_festival(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.set('Authorization', 'Basic'); 
		 headers.set('Content-Type', 'application/json'); 
		 headers.set('Accept', 'application/json'); 
		 headers.set('Access-Control-Allow-Origin', '*'); 
		 headers.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/hindiCalendar_festival.php', data, {
      headers: headers
    });
	}
	fcm_token(id : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/fcm_token.php?fcm_token='+id, {
      headers: headers
    });
	}
	notification_list(device_token : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/notification_sts_list.php?device_token='+device_token, {
      headers: headers
    });
	}
	book_puja(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/book_puja.php', data, {
      headers: headers
    });
	}
	noti_detail(id): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/notification_detail.php?id='+id, {
      headers: headers
    });
	}
	send_sujhav(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/sujhav.php', data, {
      headers: headers
    });
	}

	getMonthlyHoroscope(data : any,lang_code = ""): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/new_monthly_horoscope.php?data='+data+'&lang_code='+lang_code, {
      headers: headers
    });
	}

	about_as(lang_key): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/about_as.php?lang_key='+lang_key, {
      headers: headers
    });
	}

	signUp(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/signup.php', data, {
      headers: headers
    });
	}
	signIn(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/signin.php', data, {
      headers: headers
    });
	}
	notification_status_add(data_sts): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/notification_status_add.php', data_sts, {
      headers: headers
    });
	}
	notification_sts_update(sts_id): Observable<any> {
	
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/notification_sts_update.php?id='+sts_id, {
      headers: headers
    });
	}
	notification_status_update(data_update): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/notification_status_update.php', data_update, {
      headers: headers
    });
	}
	notification_count(device_token : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/notification_count.php?device_token='+device_token, {
      headers: headers
    });
	}
	
	calender_notes(data_notes): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/calender_notes.php', data_notes, {
      headers: headers
    });
	}
	forgot_password(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/forgot_password.php', data, {
      headers: headers
    });
	}
	post_detail(data : any): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/post_detail.php', data, {
      headers: headers
    });
	}

	dharmik_news(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/dharmik_news.php', data, {
      headers: headers
    });
	}
	generate_kundali_print(data): Observable<any> {
		//let data = JSON.stringify({'name':'test'});
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.post(environment.url +'Admin/api/generate_kundali_print.php', data, {
      headers: headers
    });
	}
	
	getLanguage(): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/get_all_languages.php', {
      headers: headers
    });
	}
	
	getLangCode(lang_code): Observable<any> {
		let headers = new HttpHeaders();
		 headers.append('Authorization', 'Basic'); 
		 headers.append('Content-Type', 'application/json'); 
		 headers.append('Accept', 'application/json'); 
		 headers.append('Access-Control-Allow-Origin', '*'); 
		 headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); 
		return this.http.get(environment.url +'Admin/api/get_lang_code.php?id='+lang_code, {
      headers: headers
    });
	}
	
	
}
