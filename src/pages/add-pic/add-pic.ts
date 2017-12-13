import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {HomePage} from '../home/home';
import {ImagePicker}  from '@ionic-native/image-picker';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

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
user: firebase.User;
  Picture;
  base64Image;

  constructor(public camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
    this.user = firebase.auth().currentUser
  }

  takePhoto(){
    console.log('Take photo clicked');
  try {
    const cameraOptions: CameraOptions ={
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        saveToPhotoAlbum: true
    }
    this.camera.getPicture(cameraOptions).then((result)=>{
        const image = `data:image/jpeg;base64,${result}`;
        const pictures = firebase.storage().ref().child('pictures/'+this.user.uid);
        pictures.putString(image, firebase.storage.StringFormat.DATA_URL).then((snapshot)=>{
            console.log(snapshot);
            
            this.user.updateProfile({
              displayName:this.user.displayName,
              photoURL:snapshot.downloadURL
            }).then(()=>{
              console.log(this.user)

              this.navCtrl.push(HomePage);
            }).catch(err=>console.log(err));
        });
    });
  
  }
  catch (e){
    console.error(e);
 
 }

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPicPage');
  }
}
