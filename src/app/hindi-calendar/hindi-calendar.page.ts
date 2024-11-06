import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';
import { AlertController,LoadingController } from '@ionic/angular';

declare var $:any;

@Component({
  selector: 'app-hindi-calendar',
  templateUrl: './hindi-calendar.page.html',
  styleUrls: ['./hindi-calendar.page.scss'],
})
export class HindiCalendarPage implements OnInit {

@ViewChild('slides', { static: true }) slider: IonSlides;

segment = 0;


model:any = {}
public day2 = [];
h_month:any;
e_month:any;
monthly_notes:any = [];
//public self = this;
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,private sanitizer: DomSanitizer,public loadingCtrl: LoadingController,public alertController: AlertController) {
router.events.subscribe(event => {
		if (event instanceof NavigationEnd) {
		  this.ngOnInit();
		}
	  });
	  document.addEventListener("backbutton", function() {
		this.router.navigate(['/home-new']);
	}, false);
	
  }
  async presentLoading() 
  {
    const loading = await this.loadingCtrl.create({
     
		  cssClass: 'custom-loading',
		  translucent: true,
		  showBackdrop: false,
		  spinner:"lines",
		  duration: 4000
		  
      });
      await loading.present();

    const { role, data } = await loading.onDidDismiss();
    $('.page').show();
    
  }
  

  ngOnInit() {




	var self = this;
	setTimeout(function(){ 
		$('#loader_calender').css('display','none');
		$('#hindu_calendar').css('display','block');
	}, 10000);
	$(".datepicker").datepicker({
		dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
		beforeShow: this.addCustomInformation,
		beforeShowDay: function(date) {
		  var list=["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"];
        var day = date.getDay();
        var curr=list[day];
        return [true, "",""+curr+""]; 
		},
		onChangeMonthYear: function() {


		$('.page').hide();
		self.presentLoading();


			setTimeout(function() 
			{
				$(".ui-datepicker-calendar td").filter(function() {
					var date = $(this).text();
					let content_data = JSON.stringify({"day":date,"month":+$(this).attr('data-month')+1,"year":$(this).attr('data-year'),"hour":0,"min":0,"lat":23.1765,"lon":75.7885,"tzone":5.5});

					if($(this).attr('data-month') != null){
					let h_month = +$(this).attr('data-month')+1; 



					if(h_month == 1){
					$('.ui-datepicker-month').html("जनवरी");
					}
					if(h_month == 2){
					$('.ui-datepicker-month').html("फ़रवरी");
					}
					if(h_month == 3){
					$('.ui-datepicker-month').html("मार्च");
					}
					if(h_month == 4){
					$('.ui-datepicker-month').html("अप्रैल");
					}
					if(h_month == 5){
					$('.ui-datepicker-month').html("मई");
					}
					if(h_month == 6){
					$('.ui-datepicker-month').html("जून");
					}
					if(h_month == 7){
					$('.ui-datepicker-month').html("जुलाई");
					}
					if(h_month == 8){
					$('.ui-datepicker-month').html("अगस्त");
					}
					if(h_month == 9){
					$('.ui-datepicker-month').html("सितम्बर");
					}
					if(h_month == 10){
					$('.ui-datepicker-month').html("अक्टूबर");
					}
					if(h_month == 11){
					$('.ui-datepicker-month').html("नवम्बर");
					}
					if(h_month == 12){
					$('.ui-datepicker-month').html("दिसम्बर");
					}

						self.fetch.basic_panchang(content_data).subscribe(res => {
							let fest_data = JSON.stringify({'date' : date, 'month':+$(this).attr('data-month')+1, 'year':$(this).attr('data-year')});

							let data_notes = JSON.stringify({ 'month':+$(this).attr('data-month')+1, 'year':$(this).attr('data-year')});

							self.fetch.calender_notes(data_notes).subscribe(response => {
							console.log(response.data[0].description);
			
							self.monthly_notes = self.sanitizer.sanitize(SecurityContext.HTML,self.sanitizer.bypassSecurityTrustHtml(response.data[0].description));
									
							
							});

							self.fetch.hindi_calendar_festival(fest_data).subscribe(response => {
								var date_hindi_data = '';
								if(response['data'].name != null){
								date_hindi_data = res.tithi+" \r\n"+response['data'].name;
								self.model.tithi_1 = res.tithi;
								self.model.fest = response['data'].name;
								}else{
									date_hindi_data = res.tithi;
									self.model.tithi_1 = res.tithi;
									self.model.fest = 'no_fest';
								}
								$(this).children('a').attr('data-custom',date_hindi_data);


							});
						});

					}
					return /\d/.test(date);
				});
				$('.ui-datepicker-calendar tbody tr td').click(function(){
					var date = $(this).text();
					var month = +$(this).attr('data-month')+1
					var year = $(this).attr('data-year');

					var complete_date = $(this).attr('data-year')+"-"+(+$(this).attr('data-month')+1)+"-"+(date);
					self.router.navigate(['/choose-calendar',complete_date]);
				}); 
			}, 0);
			
			
		}
	});
	this.addCustomInformation();
	var self = this;
	 $('.ui-datepicker-calendar tbody tr td').click(function(){
		var date = $(this).text();
		var month = +$(this).attr('data-month')+1
		var year = $(this).attr('data-year')
		var complete_date = $(this).attr('data-year')+"-"+(+$(this).attr('data-month')+1)+"-"+(date);
		self.router.navigate(['/choose-calendar',complete_date]);

	}); 

	let e_month = $('.ui-datepicker-month').html();
	let month_of = 0;

	let e_year = $('.ui-datepicker-year').html();


					if(e_month == 'November')
					{
					$('.ui-datepicker-month').html("नवम्बर");
					month_of = 11;
					}
					if(e_month == 'December')
					{
					$('.ui-datepicker-month').html("दिसम्बर");
					month_of = 12;
					}
					if(e_month == 'January')
					{
					$('.ui-datepicker-month').html("जनवरी");
					month_of = 1;
					}
					if(e_month == 'February'){
					$('.ui-datepicker-month').html("फ़रवरी");
					month_of = 2;
					}
					if(e_month == 'March'){
					$('.ui-datepicker-month').html("मार्च");
					month_of = 3;
					}
					if(e_month == 'April'){
					$('.ui-datepicker-month').html("अप्रैल");
					month_of = 4;
					}
					if(e_month == 'May'){
					$('.ui-datepicker-month').html("मई");
					month_of = 5;
					}
					if(e_month == 'June'){
					$('.ui-datepicker-month').html("जून");
					month_of = 6;
					}
					if(e_month == 'July'){
					$('.ui-datepicker-month').html("जुलाई");
					month_of = 7;
					}
					if(e_month == 'August'){
					$('.ui-datepicker-month').html("अगस्त");
					month_of = 8;
					}
					if(e_month == 'September'){
					$('.ui-datepicker-month').html("सितम्बर");
					month_of = 9;
					}
					if(e_month == 'October'){
					$('.ui-datepicker-month').html("अक्टूबर");
					month_of = 10;
					}


					let data_note = JSON.stringify({'month':month_of, 'year':e_year});
					

							this.fetch.calender_notes(data_note).subscribe(response => {
							console.log(response.data[0].description);

							localStorage.setItem('notes_calender', JSON.stringify(response.data[0].description));

							localStorage.setItem('notes_calender', JSON.stringify(response.data[0].description));

							this.monthly_notes = JSON.parse(localStorage.getItem('notes_calender'));
										
							this.monthly_notes = this.sanitizer.sanitize(SecurityContext.HTML,this.sanitizer.bypassSecurityTrustHtml(this.monthly_notes));
							localStorage.setItem('notes_calender', JSON.stringify(" "));
									
							
							});

  }
  
  addCustomInformation() {
	var self = this;
	setTimeout(function() {
		$(".ui-datepicker-calendar td").filter(function() {
			var date = $(this).text();
			let content_data = JSON.stringify({"day":date,"month":+$(this).attr('data-month')+1,"year":$(this).attr('data-year'),"hour":0,"min":0,"lat":23.1765,"lon":75.7885,"tzone":5.5});
			if($(this).attr('data-month') != null){
			self.fetch.basic_panchang(content_data).subscribe(res => {
				let fest_data = JSON.stringify({'date' : date, 'month':+$(this).attr('data-month')+1, 'year':$(this).attr('data-year')});
				self.fetch.hindi_calendar_festival(fest_data).subscribe(response => {
					var date_hindi_data = '';
					if(response['data'].name != null){
						date_hindi_data = res.tithi+" \r\n"+response['data'].name;
						self.model.tithi_1 = res.tithi;
						self.model.fest = response['data'].name
					}else{
					   date_hindi_data = res.tithi;
					   self.model.tithi_1 = res.tithi;
					   self.model.fest = 'no_fest';
					}
				$(this).children('a').attr('data-custom',date_hindi_data);
				}); 
			});
			}
			return /\d/.test(date);
		});
	}, 0)
  }

 
}
