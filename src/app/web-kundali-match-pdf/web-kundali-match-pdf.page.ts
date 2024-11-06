import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { File } from "@ionic-native/file/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";


import {
  FileTransfer,
  FileTransferObject
 } from "@ionic-native/file-transfer/ngx";

import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-web-kundali-match-pdf',
  templateUrl: './web-kundali-match-pdf.page.html',
  styleUrls: ['./web-kundali-match-pdf.page.scss'],
})
export class WebKundaliMatchPdfPage implements OnInit {
  
  public menu_nm:any;
  public para1:any;
  public pay_now:any;
  public sample:any;
  public click:any;
  public fileURI:any;
  public please_wait:any;
  public language:any;
  fileTransfer: FileTransferObject;
  constructor(private fileOpener: FileOpener,
    private transfer: FileTransfer,
    private file: File,private translate: TranslateService,private event: EventService,private route: ActivatedRoute,private router: Router,private fetch: FetchServiceService,public loadingCtrl: LoadingController,public alertController: AlertController) { }
  ngOnInit() {
    this.fileURI = "https://siddhpuja.com/sample_kundali/";
  }
  ionViewDidEnter(){

    let lang_code = localStorage.getItem('lang_code');
    this.translate.use(lang_code);
    this.language = lang_code;
    this.para1 = 'KUNDALI_PRINT_PARA1';
    this.pay_now = 'PAY_NOW';
    this.sample = 'SAMPLE_KUNDALI_PRINT';
    this.click = 'CLICK_HERE_TO_SEE';
    this.please_wait = 'PLEASE_WAIT';

   

    this.event.subscribe('language:change', (data: any) => {
      let lang_code = localStorage.getItem('lang_code');
      this.translate.use(lang_code);
      this.language = lang_code;
      
    });
    this.please_wait = this.translate.instant(this.please_wait);
    let menu_id = this.route.snapshot.params['id'];
    let lang_key = localStorage.getItem('lang_key');
    this.fetch.getSidhhMenuName(menu_id,lang_key).subscribe(res2 => {
      this.menu_nm = res2.data[0].name;
    });
  }
  async presentLoading() 
  {
    const loading = await this.loadingCtrl.create({
     
      cssClass: 'custom-loading3',
      translucent: true,
      showBackdrop: false,
      duration: 3500
      
      });
      await loading.present();

    const { role, data } = await loading.onDidDismiss();
   
  }
  download(file_name: string) {
   
    this.presentLoading();
    let fileExtn=file_name.split('.').reverse()[0];
    let fileMIMEType=this.getMIMEtype(fileExtn);
         this.fileOpener.open(this.fileURI+ file_name+"", fileMIMEType)
                .then(() => console.log('File is opened'))
                .catch(e => console.log('Error openening file', e));
    //alert(this.fileURI+file_name);
    this.fileTransfer = this.transfer.create();
    this.fileTransfer
    .download(this.fileURI+file_name, this.file.dataDirectory + file_name)
    .then(entry => {
    //alert("download complete: " + entry.toURL());
    let fileExtn=file_name.split('.').reverse()[0];
    let fileMIMEType=this.getMIMEtype(fileExtn);
         this.fileOpener.open(entry.toURL()+"", fileMIMEType)
                .then(() => console.log('File is opened'))
                .catch(e => console.log('Error openening file', e));
    });
    }
    getMIMEtype(extn){
      let ext=extn.toLowerCase();
      let MIMETypes={
        'txt' :'text/plain',
        'docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'doc' : 'application/msword',
        'pdf' : 'application/pdf',
        'jpg' : 'image/jpeg',
        'bmp' : 'image/bmp',
        'png' : 'image/png',
        'xls' : 'application/vnd.ms-excel',
        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'rtf' : 'application/rtf',
        'ppt' : 'application/vnd.ms-powerpoint',
        'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
      }
      return MIMETypes[ext];
    }

}