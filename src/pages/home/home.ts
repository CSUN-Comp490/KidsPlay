import { crank } from './../../app/app.firebaseconfig';
import { RegistrationPage } from './../registration/registration';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {storage,initializeApp} from 'firebase';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { AddPicPage } from '../add-pic/add-pic';

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

  user: any;

  constructor(private camera: Camera, private afAuth: AngularFireAuth, private toast: ToastController,public navCtrl: NavController, public navParams: NavParams, public userService:UserServiceProvider) {
      //initializeApp(crank);
     
  }

   
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToPicEdit(){
    this.navCtrl.push(AddPicPage);
  }




  getMessages() {
    this.navCtrl.push('Messaging');
  }

  viewevents() {
    this.navCtrl.push('My-Events');
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
        console.log(data);
        this.user = data.displayName;
      if (data && data.email && data.uid){
      this.toast.create({

        message: `Welcome to KidsPlay, ${data.displayName}`,
        duration: 3000
      }).present();
      }
      else {//determin log in
          this.toast.create({
            message: `Could not find authentication details`,
            duration: 3000
          }).present();
      }
    });
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
    // }

