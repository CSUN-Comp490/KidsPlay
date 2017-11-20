import { AngularFireAuth } from 'angularfire2/auth';
import { RegistrationPage } from './../registration/registration';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {usercreds} from '../../models/interfaces/usercreds';
import { MyProfilePage } from '../my-profile/my-profile';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {


 credentials={} as usercreds;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider) {

  }

  // ionViewWillLoad() {
  //   this.afAuth.authState.subscribe(data => {

  //     if (data.email && data.uid){
  //     this.toast.create({

  //       message: `Welcome to APP_NAME, ${data.email}`,
  //       duration: 3000
  //     }).present();
  //     }
  //     else {
  //         this.toast.create({
  //           message: `Could not find authentication details`,
  //           duration: 3000
  //         }).present();
  //     }
  //   });
  // }
    signin(){
      this.authservice.login(this.credentials).then((res:any) =>{
         if(!res.code)
           this.navCtrl.setRoot('HomePage');
         else 
         alert(res);

      })

    }
        register() {
          this.navCtrl.push('RegistrationPage');
      
    }


}
