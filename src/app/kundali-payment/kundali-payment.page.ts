import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { AlertController,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-kundali-payment',
  templateUrl: './kundali-payment.page.html',
  styleUrls: ['./kundali-payment.page.scss'],
})
export class KundaliPaymentPage implements OnInit {
url:any;
  
constructor(private sanitizer: DomSanitizer,public loadingCtrl: LoadingController,public alertController: AlertController) {

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
   
  }
  ngOnInit() {

		this.presentLoading();

		let kundali_data = localStorage.getItem('kundali_data');
		console.log(kundali_data);
	    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(kundali_data);  

  }

}
