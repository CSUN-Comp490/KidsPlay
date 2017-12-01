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
export class RegistrationPage {
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


  kid: [string,number];

  account: string = "parent";
  


  userProfile: any = firebase.database().ref('users');
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider,
    public fireAuth: AngularFireAuth, public authservice: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
    //let account: "parent";
  }
  registerUser() {
    this.userService.signUpUser(this.email, this.password)
      .then((newUserCreated) => {

        this.fireAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((authenticatedUser) => {

          this.userProfile.child(authenticatedUser.uid).set({
            email: this.email,
            fullName: this.fullName,
            familyName: this.famName,
            address: this.address,   
            password: this.password,
            key: authenticatedUser.uid,
            kids: [],    
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



        // if(this.userProfile.child((authenticatedUser.uid.kids).includes(this.childfirstName))){

        // }
        // else{
      
                this.userProfile.child(authenticatedUser.uid).update({




                    kids: {
                    [this.childfirstName]: {
                      Name: this.childfirstName,
                      Password: this.childPassword,
                      SubAccountType: 'Child',
                      Longitude: 12,
                      Latitide: 12,
                    },
                  }


                
                  
                  // this.userProfile.child(this.childfirstName).set({

                  //   password: this.childPassword,
                  //   longitude: 12,
                  //   latitide: 12,
                  // })

                  //kids: this.userProfile.child(authenticatedUser.uid).push([this.childfirstName,this.childPassword]),
                  //kids2: this.kids,
                  //kids: authenticatedUser.kids.push("Kid"),

                  //kids: this.userProfile.child(authenticatedUser.uid).kids.push(this.childfirstName),
                  //kids: this.childfirstName,
                  //this.kids.push(this.childfirstName),
                })

              //} //Else Bracket
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
