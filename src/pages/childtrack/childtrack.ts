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
  unit: "K";
  time:'';
  //histArray = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation, public userService: UserServiceProvider) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildtrackPage');
    this.child = this.navParams.get('child');
    console.log(this.child);

    //setInterval(this.updateLocation(), 1000);
    
    //this.updateLocation();
    //this.geo.watchPosition();
    //let myDate: String = new Date().toISOString();

    let myDate = new Date();
    //let myDate: new Date(month, day, year, hours, minutes);
   


    console.log(myDate);


      let dummyArray = [];
      let counter = 7;


      let myDate1 = new Date();
      myDate1.setHours(myDate.getHours()+1);
      let myDate2 = new Date();
      myDate1.setHours(myDate.getHours()+2);
      let myDate3 = new Date();
      myDate1.setHours(myDate.getHours()+3);
      let myDate4 = new Date();
      myDate1.setHours(myDate.getHours()+4);
      //for (var d in dummyArray) {
let dummydata = [];

//34.2410° N, 118.5277

dummydata= [[34.2410, -118.5277,1],[34.2421, -118.5283,1],[34.2425, -118.5491,1],[34.2465, -118.5391,2],[34.2125, -118.5291,2],[34.2410, -118.5277,2],[34.2421, -118.5283,2],[34.2425, -118.5491,2],[34.2465, -118.5391,2],[34.2125, -118.5291,2],[34.2410, -118.5277,2],[34.2421, -118.5283,2],[34.2425, -118.5491,2],[34.2465, -118.5391,2],[34.2125, -118.5291,2]];
let dummydates = [myDate1,myDate2,myDate3,myDate3,myDate3];
        //myDate.setHours(counter);
        dummyArray.push(myDate);
        counter++;
        console.log(myDate1);
      //}

      console.log(myDate);

      console.log(dummyArray);

      this.geo.watchPosition({ enableHighAccuracy: true }).subscribe( pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      //this.time = null;
      //this.DayHistory(this.lat,this.lng, this.time);
      console.log(this.lat);


      this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
        Latitude: this.lat,
        Longitude:this.lng,
        histArray: dummydata,
        datesArray: dummydates
      });

       this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).once('value', (snapshot) => {
         let kidObject = snapshot.val();
         console.log(kidObject);
         this.CenterLat = kidObject.CenterLat;
         this.CenterLng = kidObject.CenterLng;
         let dist = kidObject.ProxDistance /1000;
// new
// for (let i = 0; i < kidObject.histArray.length ; i++) {

//   dummydata[i][0] = kidObject.histArray[i][0];
//   dummydata[i][1] = kidObject.histArray[i][1];
//   dummydata[i][2] = kidObject.histArray[i][2];
// }


        // dummydata = kidObject.histArray;
        // dummydates = kidObject.datesArray;

         //dummydata = Object.assign([], kidObject.histArray);
         console.log(dummydata);
// new
         console.log(dist);

         console.log(this.CenterLat);
         console.log(this.CenterLng);


        

         console.log(this.getDistance(this.CenterLat,this.CenterLng,this.lat,this.lng,this.unit));

         this.checkProximity(this.CenterLat,this.CenterLng,this.lat,this.lng,this.unit,dist);
           
         




         });
//new
         let myDate5 = new Date();
        //  let DateString = myDate5.toString;

        //  dummydata.unshift([this.lat,this.lng]);
        //  dummydates.unshift(myDate5);

        //  this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
        //   histArray: dummydata,
        //   datesArray: dummydates,
        // });

//new
         
        

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
  
      



    // this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).onUpdate(event => {

    //   alert("data updated");
    // });


  }

  DayHistory(x,y,z){


    let histArray = []; 
    
    this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).once('value', (snapshot) => {
      let kidObject = snapshot.val();
      console.log(kidObject);
      histArray = kidObject.histArray;

      
      });



if(this.getDistance(1,2,x,y,'K') > 10){

  //histarray.push({x,y,z});


}
histArray.push({x,y,z});


    this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
      Latitude: this.lat,
      Longitude:this.lng,
      //HistoryArray: HistoryArray.push({x,y,z});
    });




  }
  WeekHistory(){


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

  checkProximity(a,b,c,d,e,f){
    console.log(this.getDistance(a,b,c,d,e));
    if (this.getDistance(a,b,c,d,e) > f){
      //alert("Out of Range");
      this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
        OutofRange: 'Yes',
      });
    }
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
