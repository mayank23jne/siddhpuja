import { Component, OnInit } from '@angular/core';
import { AlertController,LoadingController } from '@ionic/angular';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Platform ,NavController} from '@ionic/angular';
import { EventService } from '../event.service';

@Component({
  selector: 'app-web-kundali',
  templateUrl: './web-kundali.page.html',
  styleUrls: ['./web-kundali.page.scss'],
})
export class WebKundaliPage implements OnInit {

public menu_nm:any;
public lang_code:any;

constructor(private event: EventService,private route: ActivatedRoute,private platform: Platform,public navCtrl: NavController,private router: Router,private fetch: FetchServiceService,public loadingCtrl: LoadingController,public alertController: AlertController) { }

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
  }
  
  ionViewDidEnter(){
    let menu_id = this.route.snapshot.params['id'];
    let lang_key = localStorage.getItem('lang_key');
    this.lang_code = localStorage.getItem('lang_code');
    
    this.fetch.getSidhhMenuName(menu_id,lang_key).subscribe(res2 => {
      this.menu_nm = res2.data[0].name;
    });

    this.event.subscribe('language:change', (data: any) => {
      this.lang_code = localStorage.getItem('lang_code');
      console.log(this.lang_code);
    });
  }

}
