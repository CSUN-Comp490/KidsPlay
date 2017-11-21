import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, /*private _googleMaps: GoogleMaps*/) {
  }
/*
  ngAfterViewInit(){
    this.initMap();
  }
*/


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
      icon: '../../assets/TrackerTiny.png',
      label: i,
    });
    let marker2 = new google.maps.Marker({
      position: location2,
      //map: this.map,
      title: j,
      icon: '../../assets/TrackerTiny.png',
      label: j,
    });
    let marker3 = new google.maps.Marker({
      position: location3,
      //map: this.map,
      title: k,
      icon: '../../assets/TrackerTiny.png',
      label: k,
    });
    let marker4 = new google.maps.Marker({
      position: location4,
      //map: this.map,
      title: l,
      icon: '../../assets/TrackerTiny.png',
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

  

    //if(this.navParams.get('name1') =null){
    var lat1 = this.navParams.get('lat1');
    var lat2 = this.navParams.get('lat2');
    var lat3 = this.navParams.get('lat3');
    var lat4 = this.navParams.get('lat4');
    var lng1 = this.navParams.get('lng1');
    var lng2 = this.navParams.get('lng2');
    var lng3 = this.navParams.get('lng3');
    var lng4 = this.navParams.get('lng4');
    var name1 = this.navParams.get('name1');
    var name2 = this.navParams.get('name2');
    var name3 = this.navParams.get('name3');
    var name4 = this.navParams.get('name4');
    var setting = this.navParams.get('setting');
    

    if(setting == "All"){
      this.initMapAll( lat1,lng1,lat2,lng2,lat3,lng3,lat4,lng4,name1,name2,name3,name4);

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
