import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import {GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
/**
 * Generated class for the TrackmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;


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
  initMap(x,y,z){
    //Location - lat long
    const location = new google.maps.LatLng(x,y/*34.1490, -118.4514*/);
    /*const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Name'

    })*/
    
    // Map options

    const options = {
      center: location,
      zoom: 15,
      //mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
    
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: z
    });

    /*
    let element = this.mapElement.nativeElement;
    this.map = this._googleMaps.create(element)*/
  }

   ionViewDidLoad() {
     var lat = this.navParams.get('latitude');
     var long = this.navParams.get('longitude');
     var name = this.navParams.get('name');
     this.initMap(lat,long, name);
     
    /*console.log(this.mapElement/*'ionViewDidLoad TrackmapPage');*/
   }

   
}
