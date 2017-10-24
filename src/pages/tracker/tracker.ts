import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackmapPage } from "../trackmap/trackmap";
/**
 * Generated class for the TrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html',
})
export class TrackerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackerPage');
  }

  find1(){

    let data ={
      latitude: 34.1490,
      longitude: -118.4514,
      name: 'Frederick'

    };
    this.navCtrl.push(TrackmapPage, data);
 }
 find2(){
  
      let data ={
        latitude: 34.1556,
        longitude: -118.4676,
        name: 'George'
  
      };
      this.navCtrl.push(TrackmapPage, data);
}
find3(){
  
      let data ={
        latitude: 25.7617,
        longitude: -80.1918,
        name: 'Jonathan'
      };
      this.navCtrl.push(TrackmapPage, data);
}
find4(){
  
      let data ={
        latitude: 34.2426,
        longitude: -118.5281,
        name: 'Samantha'
  
      };
      this.navCtrl.push(TrackmapPage, data);
   }

}
