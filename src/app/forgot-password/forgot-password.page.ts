import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  lang_code:any;
  language:any;
  constructor(private translate: TranslateService,public toastController: ToastController,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,public alertController: AlertController,private event: EventService) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
   
    this.lang_code = localStorage.getItem('lang_code');
    this.translate.use(this.lang_code);
    this.language = this.lang_code;
    this.event.subscribe('language:change', (data: any) => {
      this.lang_code = localStorage.getItem('lang_code');
      this.translate.use(this.lang_code);
	    this.language = this.lang_code;
      console.log(this.lang_code);
    });

  }
  async loginToast() {
    const toast = await this.toastController.create({
      message: 'Submitted successfully plaese check your email account.',
      position: 'top',
      color:'danger',
      duration: 2000
    });
    toast.present();
  }
  forgot_form(frm) 
  {
     
     const data = JSON.stringify(frm.value);
     this.fetch.forgot_password(data).subscribe(res=>{
      if (res.status == 'true') 
      {
      // console.log(res.data.id);
      // console.log(res.data.email);
       
       
       this.loginToast();
      // this.router.navigate(['/sign-in']);
      }else{
        this.log_alert();
      }
     });
  }
  async log_alert() 
  {
      const alert = await this.alertController.create({
          message: 'This email id is not registered with us',
          buttons: ['OK']
        });

        await alert.present();
  
  }

}
