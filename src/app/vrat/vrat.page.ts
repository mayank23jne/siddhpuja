import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';

import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'



declare var $:any;

@Component({
  selector: 'app-vrat',
  templateUrl: './vrat.page.html',
  styleUrls: ['./vrat.page.scss'],
})
export class VratPage implements OnInit {

@ViewChild('slides', { static: true }) slider: IonSlides;

segment = 0;

model:any = {};
public fest_list_data = [];
public image_url:any = {};
public language:any;


constructor(private translate: TranslateService,private event: EventService,private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,public loadingCtrl: LoadingController,public alertController: AlertController) {
}
   async presentLoading() 
  {
    const loading = await this.loadingCtrl.create({
     
		  cssClass: 'custom-loading',
		  translucent: true,
		  showBackdrop: false,
		  spinner:"lines",
		  duration: 2000
		  
      });
      await loading.present();

    const { role, data } = await loading.onDidDismiss();
    $('.pg').show();
    
  }

  ngOnInit() {
	

  }
  ionViewDidEnter(){
	this.presentLoading();
	let lang_code = localStorage.getItem('lang_code');
	this.translate.use(lang_code);
	
   
    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
      this.translate.use(lang_code);
      
	  });
	  console.log(this.language);

	  this.language = lang_code;


	$("#no_fest").css("display","none");
	var current_date = new Date();
	//this.model.year = current_date.getFullYear();
	var year = current_date.getFullYear();
	var month = current_date.getMonth() + 1;
	if(month == 1){
		var month_name = 'जनवरी';
		var month_name_eng = 'Jan';
	}else if(month == 2){
		var month_name = 'फरवरी';
		var month_name_eng = 'Feb';
	}else if(month == 3){
		var month_name = 'मार्च';
		var month_name_eng = 'Mar';
	}else if(month == 4){
		var month_name = 'अप्रैल';
		var month_name_eng = 'Apr';
	}else if(month == 5){
		var month_name = 'मई';
		var month_name_eng = 'May';
	}else if(month == 6){
		var month_name = 'जून';
		var month_name_eng = 'Jun';
	}else if(month == 7){
		var month_name = 'जुलाई';
		var month_name_eng = 'Jul';
	}else if(month == 8){
		var month_name = 'अगस्त';
		var month_name_eng = 'Aug';
	}else if(month == 9){
		var month_name = 'सितंबर';
		var month_name_eng = 'Sep';
	}else if(month == 10){
		var month_name = 'अक्टूबर';
		var month_name_eng = 'Oct';
	}else if(month == 11){
		var month_name = 'नवंबर';
		var month_name_eng = 'Nov';
	}else if(month == 12){
		var month_name = 'दिसंबर';
		var month_name_eng = 'Dec';
	}
	var n = month_name+", "+year;
	var n2 = month_name_eng+", "+year;
	//this.model.today_date = n;
	let data = JSON.stringify({'year' : year, 'month' : month});

	if(this.language == 'en'){
	this.fest_list(data, n2, year, month);
	}else{
		this.fest_list(data, n, year, month);
	}

    
  }
  fest_list(data, n, year, month){
	  console.log(data);
	  console.log(year);
	  this.fetch.festival_list_all(data).subscribe(res => {
		console.log(res);
		if(res['status'] == 'true'){
			this.model.today_date = n;
			this.model.year = year;
			this.model.month = month;
			this.model.fest_data = res.data;
			this.image_url = environment.img_url_for_fest;
			
/* 			$("#fest_list").css("display","block");
 
			$("#no_fest").css("display","none"); */
		}else if(res['status'] == 'false'){
			/* $("#fest_list").css("display","none");
			$("#no_fest").css("display","block"); */
		}
	});
    
  }

  ionViewWillEnter() {
  	var current_date = new Date();
	//this.model.year = current_date.getFullYear();
	var year = current_date.getFullYear();
	var month = current_date.getMonth() + 1;
    this.slider.slideTo(month);
  }
 

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();

    let prev = await this.slider.getPreviousIndex();
   

    let current = await this.slider.getActiveIndex();
    

    if(prev == current - 1){

	
	
	var m = $('#month_hidden').val();
		var y = $('#year_hidden').val();
		if(m == 12){
			y = +y + +1;
			m = 1;
		}else{
			m = +m + +1;
		}
		//$('#month_hidden').val(m);
		//$('#year_hidden').val(y);
		if(m == 1){
			var month_name = 'जनवरी';
			var month_name_eng = 'Jan';
		}else if(m == 2){
			var month_name = 'फरवरी';
			var month_name_eng = 'Feb';
		}else if(m == 3){
			var month_name = 'मार्च';
			var month_name_eng = 'Mar';
		}else if(m == 4){
			var month_name = 'अप्रैल';
			var month_name_eng = 'Apr';
		}else if(m == 5){
			var month_name = 'मई';
			var month_name_eng = 'May';
		}else if(m == 6){
			var month_name = 'जून';
			var month_name_eng = 'Jun';
		}else if(m == 7){
			var month_name = 'जुलाई';
			var month_name_eng = 'Jul';
		}else if(m == 8){
			var month_name = 'अगस्त';
			var month_name_eng = 'Aug';
		}else if(m == 9){
			var month_name = 'सितंबर';
			var month_name_eng = 'Sep';
		}else if(m == 10){
			var month_name = 'अक्टूबर';
			var month_name_eng = 'Oct';
		}else if(m == 11){
			var month_name = 'नवंबर';
			var month_name_eng = 'Nov';
		}else if(m == 12){
			var month_name = 'दिसंबर';
			var month_name_eng = 'Dec';
		}
		var n = month_name+", "+y;
		
		var n2 = month_name_eng+", "+y;
		//this.model.today_date = n;
		let data = JSON.stringify({'year' : y, 'month' : m});
		
		if(this.language == 'en'){
			this.fest_list(data, n2, y, m);
			}else{
				this.fest_list(data, n, y, m);
			}

    
    }
    if(prev == current + 1){
	
	
	var m = $('#month_hidden').val();
	//var m = 12
	var y = $('#year_hidden').val();
	console.log(m+ " , "+y);
	if(m == 12){
		m = m - 1;
	}else if(m == 1){
		y = y - 1;
		m = 12
	}else{
		m = m - 1;
	}
	
	//$('#month_hidden').val(m);
	//$('#year_hidden').val(y);
	if(m == 1){
		var month_name = 'जनवरी';
		var month_name_eng = 'Jan';
	}else if(m == 2){
		var month_name = 'फरवरी';
		var month_name_eng = 'Feb';
	}else if(m == 3){
		var month_name = 'मार्च';
		var month_name_eng = 'Mar';
	}else if(m == 4){
		var month_name = 'अप्रैल';
		var month_name_eng = 'Apr';
	}else if(m == 5){
		var month_name = 'मई';
		var month_name_eng = 'May';
	}else if(m == 6){
		var month_name = 'जून';
		var month_name_eng = 'Jun';
	}else if(m == 7){
		var month_name = 'जुलाई';
		var month_name_eng = 'Jul';
	}else if(m == 8){
		var month_name = 'अगस्त';
		var month_name_eng = 'Aug';
	}else if(m == 9){
		var month_name = 'सितंबर';
		var month_name_eng = 'Sep';
	}else if(m == 10){
		var month_name = 'अक्टूबर';
		var month_name_eng = 'Oct';
	}else if(m == 11){
		var month_name = 'नवंबर';
		var month_name_eng = 'Nov';
	}else if(m == 12){
		var month_name = 'दिसंबर';
		var month_name_eng = 'Dec';
	}
	var n = month_name+", "+y;
    var n2 = month_name_eng+", "+y;
	//this.model.today_date = n;
	console.log(m+ " , "+y);
	let data = JSON.stringify({'year' : y, 'month' : m});
	if(this.language == 'en'){
		this.fest_list(data, n2, y, m);
		}else{
			this.fest_list(data, n, y, m);
		}

    
    }
    
    


   
    


  }
   next_month(){
	var m = $('#month_hidden').val();
	var y = $('#year_hidden').val();
	if(m == 12){
		y = +y + +1;
		m = 1;
	}else{
		m = +m + +1;
	}
	//$('#month_hidden').val(m);
	//$('#year_hidden').val(y);
	if(m == 1){
		var month_name = 'जनवरी';
		var month_name_eng = 'Jan';
	}else if(m == 2){
		var month_name = 'फरवरी';
		var month_name_eng = 'Feb';
	}else if(m == 3){
		var month_name = 'मार्च';
		var month_name_eng = 'Mar';
	}else if(m == 4){
		var month_name = 'अप्रैल';
		var month_name_eng = 'Apr';
	}else if(m == 5){
		var month_name = 'मई';
		var month_name_eng = 'May';
	}else if(m == 6){
		var month_name = 'जून';
		var month_name_eng = 'Jun';
	}else if(m == 7){
		var month_name = 'जुलाई';
		var month_name_eng = 'Jul';
	}else if(m == 8){
		var month_name = 'अगस्त';
		var month_name_eng = 'Aug';
	}else if(m == 9){
		var month_name = 'सितंबर';
		var month_name_eng = 'Sep';
	}else if(m == 10){
		var month_name = 'अक्टूबर';
		var month_name_eng = 'Oct';
	}else if(m == 11){
		var month_name = 'नवंबर';
		var month_name_eng = 'Nov';
	}else if(m == 12){
		var month_name = 'दिसंबर';
		var month_name_eng = 'Dec';
	}
	var n = month_name+", "+y;
	var n2 = month_name_eng+", "+y;
	//this.model.today_date = n;
	let data = JSON.stringify({'year' : y, 'month' : m});
	if(this.language == 'en'){
			this.fest_list(data, n2, y, m);
			}else{
				this.fest_list(data, n, y, m);
			}
  }
  prev_month(){
	var m = $('#month_hidden').val();
	//var m = 12
	var y = $('#year_hidden').val();
	console.log(m+ " , "+y);
	if(m == 12){
		m = m - 1;
	}else if(m == 1){
		y = y - 1;
		m = 12
	}else{
		m = m - 1;
	}
	
	//$('#month_hidden').val(m);
	//$('#year_hidden').val(y);
	if(m == 1){
		var month_name = 'जनवरी';
		var month_name_eng = 'Jan';
	}else if(m == 2){
		var month_name = 'फरवरी';
		var month_name_eng = 'Feb';
	}else if(m == 3){
		var month_name = 'मार्च';
		var month_name_eng = 'Mar';
	}else if(m == 4){
		var month_name = 'अप्रैल';
		var month_name_eng = 'Apr';
	}else if(m == 5){
		var month_name = 'मई';
		var month_name_eng = 'May';
	}else if(m == 6){
		var month_name = 'जून';
		var month_name_eng = 'Jun';
	}else if(m == 7){
		var month_name = 'जुलाई';
		var month_name_eng = 'Jul';
	}else if(m == 8){
		var month_name = 'अगस्त';
		var month_name_eng = 'Aug';
	}else if(m == 9){
		var month_name = 'सितंबर';
		var month_name_eng = 'Sep';
	}else if(m == 10){
		var month_name = 'अक्टूबर';
		var month_name_eng = 'Oct';
	}else if(m == 11){
		var month_name = 'नवंबर';
		var month_name_eng = 'Nov';
	}else if(m == 12){
		var month_name = 'दिसंबर';
		var month_name_eng = 'Dec';
	}
	var n = month_name+", "+y;
	var n2 = month_name_eng+", "+y;
	//this.model.today_date = n;
	console.log(m+ " , "+y);
	let data = JSON.stringify({'year' : y, 'month' : m});
	if(this.language == 'en'){
		this.fest_list(data, n2, y, m);
		}else{
			this.fest_list(data, n, y, m);
		}
  }
}
