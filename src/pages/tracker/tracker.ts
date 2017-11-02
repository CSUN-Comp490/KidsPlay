import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackmapPage } from "../trackmap/trackmap";
import { Geolocation } from '@ionic-native/geolocation';
//import { Geolocation } from '@ionic-native';
/**
 * Generated class for the TrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;



@IonicPage()
@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html',
})
export class TrackerPage {
  lat: any;
  lng: any;

  latLng: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackerPage');
    this.geo.getCurrentPosition().then( pos => {
    this.lat = pos.coords.latitude;
    this.lng = pos.coords.longitude;
    }).catch( err => console.log(err));
    
  }


    // getLocation(){
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);

    //   }
    // }

    

  // Geolocation.getCurrentPosition(){}
  // getLocation(position){
  //   var lat = position.coords.latitude;
  //   var long = position.coords.longitude;
    
    
  //  }

  // getLocation() {
  //   if (typeof navigator !== "undefined" && typeof navigator.geolocation !== "undefined") {
  //     log("Asking user to get their location");
  //     navigator.geolocation.getCurrentPosition(geolocationCallback, errorHandler);
  //   } else {
  //     log("Your browser does not support the HTML5 Geolocation API, so this demo will not work.")
  //   }
  // };

  /* Callback method from the geolocation API which receives the current user's location */
  // geolocationCallback(location){
  //   var latitude = location.coords.latitude;
  //   var longitude = location.coords.longitude;
  //   log("Retrieved user's location: [" + latitude + ", " + longitude + "]");

  // }

find1(){

    let data ={
      latitude: this.lat,
      longitude: this.lng,
      name: 'Frederick'

    };
    this.navCtrl.push(TrackmapPage, data);
}
find2(){
  //getLocation();

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
