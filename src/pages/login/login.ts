import { ResetPasswordPage } from './../reset-password/reset-password';
import { EmailValidator } from './../../validators/email';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegistrationPage } from './../registration/registration';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController,Loading,AlertController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {usercreds} from '../../models/interfaces/usercreds';
import { MyProfilePage } from '../my-profile/my-profile';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import{HomePage} from '../home/home';


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
 public loginForm: FormGroup;
 public loading: Loading;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider,
     public formBuilder:FormBuilder, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, 
          EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), 
        Validators.required])]
      });
  }

 

    login(){
      if (!this.loginForm.valid){
        console.log(this.loginForm.value);
      } else {
        this.credentials.email = this.loginForm.value.email;
        this.credentials.password = this.loginForm.value.password;
        this.authservice.login(this.credentials)
        .then(() => {
          this.navCtrl.setRoot('HomePage');
        }, error => {
          this.loading.dismiss().then( () => {
            var errrorMessage: string = error.message;
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });
    
        this.loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
        });
        this.loading.present();
      }
    }
    


        register() {
          this.navCtrl.push('RegistrationPage');
      
    }
    goToResetPassword(){
      this.navCtrl.push('ResetPasswordPage');
    }
    
 

}
