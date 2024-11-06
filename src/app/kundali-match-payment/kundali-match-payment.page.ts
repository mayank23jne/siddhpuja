import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertController,LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-kundali-match-payment',
  templateUrl: './kundali-match-payment.page.html',
  styleUrls: ['./kundali-match-payment.page.scss'],
})
export class KundaliMatchPaymentPage implements OnInit {
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
      duration: 2500
      
      });
      await loading.present();

    const { role, data } = await loading.onDidDismiss();
   
  }

ngOnInit() {

      this.presentLoading();
  		let kundali_match_data = localStorage.getItem('kundali_match_data');
  		console.log(kundali_match_data);
	    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(kundali_match_data);  

  }

}
