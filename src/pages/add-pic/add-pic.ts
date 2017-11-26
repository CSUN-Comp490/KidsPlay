import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {HomePage} from '../home/home';
import {ImagePicker}  from '@ionic-native/image-picker';
import { PhotoProvider } from '../../providers/photo/photo';

/**
 * Generated class for the AddPicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-pic',
  templateUrl: 'add-pic.html',
})
export class AddPicPage {

  Picture;
  base64Image;

  constructor(public cameraPlugin: Camera, public navCtrl: NavController, public navParams: NavParams, public photoProvider: PhotoProvider) {}

  createPost(photoName: string, Picture: string) {
    this.photoProvider.createPost(photoName, this.Picture);
    this.navCtrl.setRoot(HomePage);
  }

  takePicture(){
    this.cameraPlugin.getPicture({
    quality : 95,
    destinationType : this.cameraPlugin.DestinationType.DATA_URL,
    sourceType : this.cameraPlugin.PictureSourceType.CAMERA,
    allowEdit : true,
    encodingType : this.cameraPlugin.EncodingType.PNG,
    targetWidth : 500,
    targetHeight : 500,
    saveToPhotoAlbum : true

    }).then(imageData => {
      //imageData is a base64 encoded string

    this.base64Image = "data.image/jpeg;base64," + imageData;
    // this.Picture is passing the string to our DB
    this.Picture = imageData;

    }, error => {

      console.log("ERROR -> " + JSON.stringify(error));
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPicPage');
  }
}
