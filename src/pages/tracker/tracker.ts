import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackmapPage } from "../trackmap/trackmap";
import { Geolocation } from '@ionic-native/geolocation';
import * as firebase from 'firebase';
import { UserServiceProvider } from './../../providers/user-service/user-service';
//import { Geolocation } from '@ionic-native';
/**
 * Generated class for the TrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//declare var google: any;



@IonicPage()
@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html',
})
export class TrackerPage {
  childProfile: any = firebase.database().ref('kids');

  kids = [];//array of all kids in the database
  kids2 = [];//array of YOUR kids in the database



  lat: any;
  lng: any;

  latLng: any;

  myName: any;
  //newButton = document.createElement('button');
  //@ViewChild('d1') d1:ElementRef;

  htmlToAdd: any;

  number: [1,2,3,4,5];

  // kids: [{
  // //   Name: 'Steve',
  // //   Password: 'John',
  // //   SubAccountType: 'Child',
  // //   Longitude: 12,
  // //   Latitude: 12,
  // // },
  // // {
  // //   Name: 'Jeff',
  // //   Password: 'John',
  // //   SubAccountType: 'Child',
  // //   Longitude: 12.1,
  // //   Latitude: 12.1,
  // }];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation, public userService: UserServiceProvider/*private element: ElementRef*/) {
    this.userService.getallKids().then((res: any)=>{
      console.log(res);
      this.kids = res; 
      console.log(this.kids);
    })

  this.userService.getmyKids(firebase.auth().currentUser.uid).then((res:any)=>{//fetches all kids based on current uid
    this.kids2 = res;
    console.log(this.kids2);

    })
  
  }

  ionViewDidLoad() {

    










    console.log('ionViewDidLoad TrackerPage');

    // document.getElementById("demo").innerHTML = "Paragraph changed!";
    // var ref = firebase.database().ref();
    
    
    // ref.child('kids').orderByChild('uid').equalTo('WzcDU9BLmdMQ5LcBePvUXZVxENl2').on("value", function(snapshot) {
    // console.log(snapshot.val());

    // });

  
    
    this.myName= 'Paul';

    

    // this.kids = [{
    //   Name: 'Steve',
    //   Password: 'John',
    //   SubAccountType: 'Child',
    //   Longitude: -118.2551,
    //   Latitude: 35.1556,
    // },
    // {
    //   Name: 'Jeff',
    //   Password: 'John',
    //   SubAccountType: 'Child',
    //   Longitude: -118.2551,
    //   Latitude: 34.1556,
    // }];
   




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

myCurrentLocation(){


}



find(x,y,z){

  let data ={
    latitude: x,
    longitude: y,
    name: z,

  };
  this.navCtrl.push(TrackmapPage, data);

}

find1(){

    let data ={
      latitude: this.lat,
      longitude: this.lng,
      name: 'Jeffrey'

    };
    this.navCtrl.push(TrackmapPage, data);
}
find2(){
  //getLocation();

      let data ={
        latitude: 34.1556,
        longitude: -118.4676,
        name: 'Steven'
  
      };
      this.navCtrl.push(TrackmapPage, data);
}
find3(){
  
      let data ={
        latitude: 12,
        longitude: 12,
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

  findALL(){
      let data ={
        lat1: this.lat,
        lat2: 34.1556,
        lat3: 34.1425,
        lat4: 34.2426,
        lng1: this.lng,
        lng2: -118.4676,
        lng3: -118.2551,
        lng4: -118.5281,
        name1: 'Jeffrey',
        name2: 'Steven',
        name3: 'Jonathan',
        name4: 'Samantha',
        setting: 'All'
      }
      this.navCtrl.push(TrackmapPage, data);


  }

  findAll(){

    let kidLongitudes= [];
    let kidLatitudes= [];
    let kidNames= [];
    for (var i in this.kids2) {
      kidLongitudes.push(this.kids2[i].Longitude);
      kidLatitudes.push(this.kids2[i].Latitude);
      kidNames.push(this.kids2[i].Name);
    }
    console.log(kidLongitudes);
    console.log(kidLatitudes);
    console.log(kidNames);

    let data ={
      kidLongitudes, kidLatitudes, kidNames, myLat: this.lat, myLong: this.lng, setting: 'All'
    }

    this.navCtrl.push(TrackmapPage, data)
    

 

  }


 

}
