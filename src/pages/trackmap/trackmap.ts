import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
<<<<<<< Updated upstream
=======
//import { SMS } from '@ionic-native/sms';
import * as firebase from 'firebase';
import { UserServiceProvider } from './../../providers/user-service/user-service';


>>>>>>> Stashed changes
/**
 * Generated class for the TrackmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


@IonicPage()
@Component({
  selector: 'page-trackmap',
  templateUrl: 'trackmap.html',
})
export class TrackmapPage {
  @ViewChild('map') mapRef: ElementRef;
  map: any;
  marker: any;

  kidLong = []; //Dynamic
  kidLat = []; //Dynamic
  kidName = []; //Dynamic





<<<<<<< Updated upstream
  constructor(public navCtrl: NavController, public navParams: NavParams, /*private _googleMaps: GoogleMaps*/) {
=======


  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider /*private _googleMaps: GoogleMaps*/) {
>>>>>>> Stashed changes
  }
/*
  ngAfterViewInit(){
    this.initMap();
  }
*/

  initMapAll2(a,b,c,x,y){//a is the kid latitude array, b is the kid longitude array, c is the kid name array, x is the parent lat, y is the parent long
    let locations = [];
    let labels = [];
    for (var i in c) {
      locations.push(new google.maps.LatLng(a[i],b[i]));
      labels.push(c[i]);
    }

    const myLocation = new google.maps.LatLng(x,y);

    const options = {
      center: myLocation,
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)

    let markers = [];

    for (var j in labels) {
    markers.push(
      new google.maps.Marker({
        position: locations[j],
        title: labels[j],
        icon: '../../assets/TrackerTinyClear2.png',
        label: labels[j],
      })
    );
    }

    markers.push(
      new google.maps.Marker({
        position: myLocation,
        title: 'You',
        icon: '../../assets/TrackerTinyGreyClear2.png',
        label: 'You',
      })
    );

    var bounds = new google.maps.LatLngBounds();
    for (var q = 0; q < markers.length; q++) {
     bounds.extend(markers[q].getPosition());
    }


    for (var m in markers) {
     markers[m].setMap(this.map);
    }
    
    this.map.fitBounds(bounds);



  }
  initMapAll(a,b,c,d,e,f,g,h,i,j,k,l){  
    const location1 = new google.maps.LatLng(a,b);
    const location2 = new google.maps.LatLng(c,d);
    const location3 = new google.maps.LatLng(e,f);
    const location4 = new google.maps.LatLng(g,h);

    // var calc1 = google.maps.geometry.spherical.computeDistanceBetween(location1,location2)/1000;
    // var calc2 = google.maps.geometry.spherical.computeDistanceBetween(location1,location3)/1000;
    // var calc3 = google.maps.geometry.spherical.computeDistanceBetween(location1,location4)/1000;

    // if(calc1 >= calc2 && calc1 >= calc3){

    // }
    // else if(calc2 >= calc1 && calc2 >= calc3){

    // }
    // else if(calc2 >= calc1 && calc2 >= calc3){
      
    // }


    // var zoom;

    const options = {
      center: location1,
      //zoom: 2,
      //mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
    
      let marker1 = new google.maps.Marker({
      position: location1,
      //map: this.map,
      title: i,
      icon: '../../assets/TrackerTinyGreyClear2.png',
      label: i,
    });
    let marker2 = new google.maps.Marker({
      position: location2,
      //map: this.map,
      title: j,
      icon: '../../assets/TrackerTinyClear2.png',
      label: j,
    });
    let marker3 = new google.maps.Marker({
      position: location3,
      //map: this.map,
      title: k,
      icon: '../../assets/TrackerTinyClear2.png',
      label: k,
    });
    let marker4 = new google.maps.Marker({
      position: location4,
      //map: this.map,
      title: l,
      icon: '../../assets/TrackerTinyClear2.png',
      label: l,
    });

    var markers = [marker1, marker2, marker3, marker4];//some array
    var bounds = new google.maps.LatLngBounds();
    for (var q = 0; q < markers.length; q++) {
     bounds.extend(markers[q].getPosition());
    }
    marker1.setMap(this.map);
    marker2.setMap(this.map);
    marker3.setMap(this.map);
    marker4.setMap(this.map);
    this.map.fitBounds(bounds);
    





    
  }



  // pickZoom(w,x,y,z){
    // var calc1 = google.maps.geometry.spherical.computeDistanceBetween(w,x)/1000;
    // var calc2 = google.maps.geometry.spherical.computeDistanceBetween(w,y)/1000;
    // var calc3 = google.maps.geometry.spherical.computeDistanceBetween(w,z)/1000;

    // if(calc1 >= calc2 && calc1 >= calc3){

    // }
    // else if(calc2 >= calc1 && calc2 >= calc3){

    // }
    // else if(calc2 >= calc1 && calc2 >= calc3){
      
    // }


    // var zoom;
  // }

<<<<<<< Updated upstream
=======
  stopProximity(){

    this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
      Prox: 'Off',
    });

  }

  setProximity(x,y){
    // var cityCircle = new google.maps.Circle({
    //   strokeColor: '#137C69',
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: '#137C69',
    //   fillOpacity: 0.35,
    //   map: this.map,
    //   center: x,
    //   radius: 10}) 
    let pdist = parseInt(x);
    let ptime = parseInt(y);

      
      this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
        ProxDistance: pdist,
        ProxTime: ptime,
        CenterLat: this.MLat,
        CenterLng: this.MLng,
        Prox: 'On',
      });

      // var proxCircle = new google.maps.Circle({
      //   strokeColor: '#FF0000',
      //   strokeOpacity: 0.8,
      //   strokeWeight: 2,
      //   fillColor: '#FF0000',
      //   fillOpacity: 0.35,
      //   center: 
      // })
    

  }

 
  pushProximity(x,y,z){

  }
  clearLines(){
   // flightPath.setMap(null);
   this.initMapNew(this.childuid);

  }
  history(){
    //flightPath.setMap(null);
    
    this.initMapNew(this.childuid);
    let kidHist2 = [];
    this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).once('value', (snapshot) => {
      let kidObject = snapshot.val();
      console.log(kidObject);
      kidHist2= kidObject.histArray;

      for (let i = 0; i < kidHist2.length ; i++) {
        if(kidHist2[i][2] == 1){
          this.kidHist.push(kidHist2[i]);

        }
      }
      

        console.log(this.kidHist);
     
   });

  var  flightPlanCoordinates = [];
  //flightPlanCoordinates = [];
   for (let i = 0; i < this.kidHist.length ; i++) {
    flightPlanCoordinates[i] = {lat: this.kidHist[i][0], lng: this.kidHist[i][1]};

      console.log(flightPlanCoordinates);



   }




    
    // var flightPlanCoordinates = [
    //   {lat: 34.14, lng: 118.45},
    //   {lat: 34.152, lng: 118.48},
    //   {lat: 38.142, lng: 178.431},
    //   {lat: 27.467, lng: 153.027},
    //   {lat: 36.152, lng: 118.38},
    //   {lat: 37.142, lng: 118.18},
    //   {lat: 39.112, lng: 118.68}
      
    // ];

    var c = 1;
    for (let i = 0; i < flightPlanCoordinates.length ; i++) {

      

      if(i < flightPlanCoordinates.length){
        var pointAtoB = [flightPlanCoordinates[i], flightPlanCoordinates[i+1]
        ];
      }

        var flightPath = new google.maps.Polyline({
          path: pointAtoB,
          geodesic: true,
          strokeColor: '#3238DB',
          strokeOpacity: c,
          strokeWeight: 4
        });

        flightPath.setMap(this.map);
        c = c-(1/flightPlanCoordinates.length);

    }

    var bounds = new google.maps.LatLngBounds();
    for (var q = 0; q < flightPlanCoordinates.length; q++) {
     bounds.extend(new google.maps.LatLng(flightPlanCoordinates[q].lat,flightPlanCoordinates[q].lng));
    }
    this.map.fitBounds(bounds);




    
  }

  history2(){
    this.initMapNew(this.childuid);
    //let kidHist2 = [];
    //flightPath.setMap(null);
    this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).once('value', (snapshot) => {
      let kidObject = snapshot.val();
      console.log(kidObject);
      this.kidHist= kidObject.histArray;

      // for (let i = 0; i < kidHist2.length ; i++) {
      //   if(kidHist2[i][2] == 2){
      //     this.kidHist.push(kidHist2[i]);

      //   }
      // }
      

        console.log(this.kidHist);
     
   });

  var  flightPlanCoordinates = [];
  //flightPlanCoordinates = [];
   for (let i = 0; i < this.kidHist.length ; i++) {
    flightPlanCoordinates[i] = {lat: this.kidHist[i][0], lng: this.kidHist[i][1]};

      console.log(flightPlanCoordinates);



   }




    
    // var flightPlanCoordinates = [
    //   {lat: 34.14, lng: 118.45},
    //   {lat: 34.152, lng: 118.48},
    //   {lat: 38.142, lng: 178.431},
    //   {lat: 27.467, lng: 153.027},
    //   {lat: 36.152, lng: 118.38},
    //   {lat: 37.142, lng: 118.18},
    //   {lat: 39.112, lng: 118.68}
      
    // ];

    var c = 1;
    for (let i = 0; i < flightPlanCoordinates.length ; i++) {

      

      if(i < flightPlanCoordinates.length){
        var pointAtoB = [flightPlanCoordinates[i], flightPlanCoordinates[i+1]
        ];
      }

        var flightPath = new google.maps.Polyline({
          path: pointAtoB,
          geodesic: true,
          strokeColor: '#3238DB',
          strokeOpacity: c,
          strokeWeight: 4
        });

        flightPath.setMap(this.map);
        c = c-(1/flightPlanCoordinates.length);

    }

    var bounds = new google.maps.LatLngBounds();
    for (var q = 0; q < flightPlanCoordinates.length; q++) {
     bounds.extend(new google.maps.LatLng(flightPlanCoordinates[q].lat,flightPlanCoordinates[q].lng));
    }
    this.map.fitBounds(bounds);





    
  }






  setMarkers(){

  }

  initMapNew(i){

        this.map = new google.maps.Map(this.mapRef.nativeElement);
        var cityCircle = new google.maps.Circle({map: this.map});
        //var cityCircle = new google.maps.Circle;

      ////////////////////

        // var flightPlanCoordinates = [
        //   {lat: 34.14, lng: 118.45},
        //   {lat: 34.152, lng: 118.48},
        //   {lat: 38.142, lng: 178.431},
        //   {lat: 27.467, lng: 153.027},
        //   {lat: 36.152, lng: 118.38},
        //   {lat: 37.142, lng: 118.18},
        //   {lat: 39.112, lng: 118.68}
          
        // ];
>>>>>>> Stashed changes

  initMap(x,y,z){
    //Location - lat long
    const location = new google.maps.LatLng(x,y/*34.1490, -118.4514*/);
    /*const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Name'

    })*/
    
    //Map options

    const options = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
    
      let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: z,
      icon: '../../assets/TrackerTiny.png',
      label: {
        //text: z,
        color: 'white',
      },
    });

    /*
    let element = this.mapElement.nativeElement;
    this.map = this._googleMaps.create(element)*/
  }

   ionViewDidLoad() {
    


    this.kidLong = this.navParams.get('kidLongitudes');
    this.kidLat = this.navParams.get('kidLatitudes');
    this.kidName = this.navParams.get('kidNames');
    var myLat = this.navParams.get('myLat');
    var myLong = this.navParams.get('myLong');
    var setting = this.navParams.get('setting');

    console.log(this.kidLong);
    console.log(this.kidLat);
    console.log(this.kidName);

    // for (var i in this.kids2) {
    //   kidLongitudes.push(this.kids2[i].Longitude);
    //   kidLatitudes.push(this.kids2[i].Latitude);
    //   kidNames.push(this.kids2[i].Name);
    // }

    

  

    // //if(this.navParams.get('name1') =null){
    // var lat1 = this.navParams.get('lat1');
    // var lat2 = this.navParams.get('lat2');
    // var lat3 = this.navParams.get('lat3');
    // var lat4 = this.navParams.get('lat4');
    // var lng1 = this.navParams.get('lng1');
    // var lng2 = this.navParams.get('lng2');
    // var lng3 = this.navParams.get('lng3');
    // var lng4 = this.navParams.get('lng4');
    // var name1 = this.navParams.get('name1');
    // var name2 = this.navParams.get('name2');
    // var name3 = this.navParams.get('name3');
    // var name4 = this.navParams.get('name4');
    // var setting = this.navParams.get('setting');
    

    if(setting == "All"){
      // this.initMapAll( lat1,lng1,lat2,lng2,lat3,lng3,lat4,lng4,name1,name2,name3,name4);

      this.initMapAll2(this.kidLat,this.kidLong,this.kidName,myLat,myLong);



    }
    else{
      var lat = this.navParams.get('latitude');
      var long = this.navParams.get('longitude');
      var name = this.navParams.get('name');
      this.initMap(lat,long, name);
    }
    


      


   //}
     
    /*console.log(this.mapElement/*'ionViewDidLoad TrackmapPage');*/
   }

   
}
