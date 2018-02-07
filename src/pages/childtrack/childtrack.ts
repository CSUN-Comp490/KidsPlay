import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the ChildtrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-childtrack',
  templateUrl: 'childtrack.html',
})
export class ChildtrackPage {
  childuid='-L4_q1VY2046v_lXH-oq';

  child = '';
  childProfile: any = firebase.database().ref('kids');
  lat: any;
  lng: any;
  CenterLat: '';
  CenterLng: '';
  unit: "M";

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation, public userService: UserServiceProvider) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildtrackPage');
    this.child = this.navParams.get('child');
    console.log(this.child);

    //setInterval(this.updateLocation(), 1000);
    
    //this.updateLocation();
    //this.geo.watchPosition();



      this.geo.watchPosition().subscribe( pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      console.log(this.lat);

      this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
        Latitude: this.lat,
        Longitude:this.lng,
      });

       this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).once('value', (snapshot) => {
         let kidObject = snapshot.val();
         console.log(kidObject);
         this.CenterLat = kidObject.CenterLat;
         this.CenterLng = kidObject.CenterLng;

         console.log(this.CenterLat);
         console.log(this.CenterLng);


        

         console.log(this.getDistance(this.CenterLat,this.CenterLng,this.lat,this.lng,this.unit));

         setInterval(this.checkProximity(this.CenterLat,this.CenterLng,this.lat,this.lng,this.unit)
           
           ,1000);




         });

         
        

      // let centerLat = this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).CenterLat;
      // console.log(centerLat);


      });


    // this.geo.getCurrentPosition().then( pos => {
    //   this.lat = pos.coords.latitude;
    //   this.lng = pos.coords.longitude;
    //   console.log(this.lat);
    //   }).catch( err => console.log(err));
  
    //   console.log(this.lat);
    //   console.log(this.lng);
      
    

    // this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
    //   Latitude: -118.4676,
    //   Longitude: 55,
    // });


    // this.geo.getCurrentPosition().then( pos => {
    //   this.lat = pos.coords.latitude;
    //   this.lng = pos.coords.longitude;
    //   console.log(this.lat);

    //   this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
    //     Latitude: this.lat,
    //     Longitude:this.lng,
    //   });

    //   }).catch( err => console.log(err));
  
      


  }

  updateLocation(){
    this.geo.getCurrentPosition().then( pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      console.log(this.lat);

      // this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
      //   Latitude: this.lat,
      //   Longitude:this.lng,
      // });
      setInterval(this.updateLocation(), 1000);

      }).catch( err => console.log(err));
  }

  updateFirebase(){

    this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
      Latitude: this.lat,
      Longitude:this.lng,
    });

  }

  checkProximity(a,b,c,d,e){

  }

  getDistance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
  }



}
