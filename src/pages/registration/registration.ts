import { HomePage } from './../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';


/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  homePage: any;
  email='';
  password='';
  fullName = '';
  famName='';
  address = '';

userProfile:any = firebase.database().ref('users');
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService:UserServiceProvider,
  public fireAuth:AngularFireAuth) {
    this.homePage = HomePage;
    this.fullName = navParams.data.fullname;
    
  }//function that will push data from the registration page to the home when registered
  gotToHome(){
    this.navCtrl.push(this.homePage,{
      fullName: this.fullName
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
registerUser(){
  this.userService.signUpUser(this.email, this.password)
  .then((newUserCreated)=>{  
    newUserCreated.updateProfile({
      displayName: this.fullName
    });
            this.fireAuth.auth.signInWithEmailAndPassword(this.email,this.password).then((authenticatedUser) => {
    
                        this.userProfile.child(authenticatedUser.uid).set({
                            email: this.email,
                            fullName: this.fullName,
                            familyName: this.famName,
                            address: this.address
                        })
                    })
                })
            
                this.navCtrl.setRoot('HomePage');
}
  
}
