import { AngularFireAuth } from 'angularfire2/auth';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
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
export class RegistrationPage{
  email = '';
  password = '';
  fullName = '';
  famName = '';
  address = '';




  // Variables Used by Child Registration
  childfirstName = '';
  parentEmail = '';
  childPassword = '';
  parentPassword = '';

  // Variables Used by Teen Registration
  teenfirstName = '';
  tparentEmail = '';
  tparentName = '';
  teenPassword = '';
  teenEmail = '';


  kids: string[][];

  


  userProfile: any = firebase.database().ref('users');
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider,
    public fireAuth: AngularFireAuth, public authservice: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  registerUser() {
    this.userService.signUpUser(this.email, this.password)
      .then((newUserCreated) => {

        this.fireAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((authenticatedUser) => {

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

  // Adds a child to an existing parent
  createChild() {
    // let   cred={
    //   email: this.parentEmail,
    //   password: this.parentPassword,
    // } 

  

    //this.checkCredentials(cred);

    this.fireAuth.auth.signInWithEmailAndPassword(this.parentEmail, this.parentPassword).then((authenticatedUser) => {
      
                this.userProfile.child(authenticatedUser.uid).update({

                  kids: this.childfirstName,
                })
              })

  }

  // Adds a teenager to an existing parent
  createTeen() {
    
      }



//   checkCredentials(credentials){

//     this.authservice.login(credentials).then((res:any) =>{
//        if(!res.code)
//          return true;
//        else 
//        alert(res);
//     })
// }

  
}
