import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { OffersPage } from './../offers/offers';
import { crank } from './../../app/app.firebaseconfig';
import { RegistrationPage } from './../registration/registration';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {storage,initializeApp} from 'firebase';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { AddPicPage } from '../add-pic/add-pic';
import {MessagingPage} from '../messaging/messaging'


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
mydate = Date.now();
  user: any;

  qrData = null;
  elementType : 'url' | 'canvas' | 'img' = 'url';
  createdCode = '';
  scannedCode = '';

  constructor(private barcodeScanner: BarcodeScanner,private camera: Camera, private afAuth: AngularFireAuth, private toast: ToastController,public navCtrl: NavController, public navParams: NavParams, public userService:UserServiceProvider) {
      //initializeApp(crank);
      
     
  }

   
  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      console.log(data);
      this.user = data.displayName;
    if (data){
      this.toast.create({
  
        message: `Welcome to KidsPlay, ${data.displayName}`,
        duration: 3000
      }).present();
    }
    else {//determine log in
        this.toast.create({
          message: `Could not find authentication details`,
          duration: 3000
        }).present();
    }
  });
  }

  goToPicEdit(){
    this.navCtrl.push(AddPicPage);
  }

createCode(){
this.createdCode = this.qrData;
}
scanCode(){
this.barcodeScanner.scan().then(barcodeData=>{
  this.scannedCode = barcodeData.text;
})
}

  getMessages() {
    this.navCtrl.push('MessagingPage');
  }

  viewOffers() {
    this.navCtrl.push('OffersPage');
  }

  addChild() {

    this.navCtrl.push("ChildLoginPage")
  }
  // logout() {
  //  this.navCtrl.push()
  // }
  viewEvents() {
    this.navCtrl.push('MyEventsPage');
  }

  ionViewWillLoad() {
    
  }

  
    

}


// signin(){
    //   this.authservice.login(this.credentials).then((res:any) =>{
    //      if(!res.code)
    //        this.navCtrl.setRoot('HomePage');
    //      else 
    //      alert(res);
    
    //   })
   
    // }
  
    // load(){
    //   this.userService.loadUser(5).then((res)=>{
    //     console.log(res);
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    // }//Let go back to the previous version of angular it looks likes  something have been removed from the rxjs library