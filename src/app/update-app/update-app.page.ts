import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-app',
  templateUrl: './update-app.page.html',
  styleUrls: ['./update-app.page.scss'],
})
export class UpdateAppPage implements OnInit {

  constructor() { }

  ngOnInit() {
    window.open("https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain", "_self");
  }
  
  ionViewDidEnter(){
    window.open("https://play.google.com/store/apps/details?id=com.siddhpuja.ujjain", "_self");
  }

}
