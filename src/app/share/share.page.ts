import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
declare let window: any;
@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  constructor(private socialSharing: SocialSharing) { }

  ngOnInit() {
  }
  shareViaFb(){
	var url = "http://siddhpuja.com/";
	this.socialSharing.shareViaFacebook(url).then((res) => { }).catch((e) => { });
  }
  shareViaWp(){
	var url = "http://siddhpuja.com/";
	this.socialSharing.shareViaWhatsApp(url).then((res) => { }).catch((e) => { });
  }
  shareViaTwitter(){
	var url = "http://siddhpuja.com/";
	this.socialSharing.shareViaTwitter(url).then((res) => { }).catch((e) => { });
  }
  share(){
	  document.addEventListener("deviceready", function() {
		window.plugins.socialsharing.share('Message only')
	  }, false);	
  }
 /* shareViaInstagram(){
	var url = "http://siddhpuja.com/";
	this.socialSharing.shareViaInstagram(url).then((res) => { }).catch((e) => { });
  }*/

}
