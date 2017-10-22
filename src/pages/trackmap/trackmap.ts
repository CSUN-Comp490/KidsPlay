import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*import {GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, /*private _googleMaps: GoogleMaps*/) {
  }
/*
  ngAfterViewInit(){
    this.initMap();
  }
*/
  initMap(){
    //Location - lat long
    const location = new google.maps.LatLng(51.5-7351, -0.127758);
    
    // Map options

    const options = {
      center: location,
      zoom: 10
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
    

    /*
    let element = this.mapElement.nativeElement;
    this.map = this._googleMaps.create(element)*/
  }

   ionViewDidLoad() {
     this.initMap();
    /*console.log(this.mapElement/*'ionViewDidLoad TrackmapPage');*/
   }

   
}
