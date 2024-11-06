import { Component, OnInit } from '@angular/core';
import { AlertController,LoadingController } from '@ionic/angular';
import { EventService } from '../event.service';
import { TranslateService } from '@ngx-translate/core'

declare var $:any;
declare let window: any;
@Component({
  selector: 'app-new-calender',
  templateUrl: './new-calender.page.html',
  styleUrls: ['./new-calender.page.scss'],
})

export class NewCalenderPage implements OnInit {

  constructor(private translate: TranslateService,private event: EventService,public loadingCtrl: LoadingController,public alertController: AlertController) { }
  
  lang_code:any;
  menu_nm:any;

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
   
  }
  ionViewDidEnter(){
    
    this.presentLoading();
    let lang_key = localStorage.getItem('lang_key');
    this.lang_code = localStorage.getItem('lang_code');
    
    if(this.lang_code == 'hi'){
      this.menu_nm = "हिन्दू कैलेंडर";
    }else{
      this.menu_nm = "Hindu calendar";
    }

    this.event.subscribe('language:change', (data: any) => {
      this.lang_code = localStorage.getItem('lang_code');
      console.log(this.lang_code);
    });
    
  }
   
}
