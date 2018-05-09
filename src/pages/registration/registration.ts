import { HomePage } from './../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
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

  homePage: any;
  user:firebase.User;


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
  childLatitude = '';
  childLongitude = '';

  // Variables Used by Teen Registration
  teenfirstName = '';
  tparentEmail = '';
  tparentPassword = '';
  teenPassword = '';
  teenEmail = '';

  account: string = "parent";//Defaults ngModel to parent, in other words, registration is set to parent tab when registration page is opened


  // kid: [string,number];
  // i = 0;
  

  // temparr= [];





  userProfile: any = firebase.database().ref('users');//users aka parent branch reference, reference used to set new parent to database
  childProfile: any = firebase.database().ref('kids');//child branch reference, reference used to set new child to database
  teenProfile: any = firebase.database().ref('teens');//teen branch reference, reference used to set new teen to database

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider,
    public fireAuth: AngularFireAuth, public authservice: AuthProvider) {
      this.homePage = HomePage;
      this.fullName = navParams.data.fullname;
     // this.user = firebase.auth().currentUser;
  }

  gotToHome(){
    this.navCtrl.push(this.homePage,{
      fullName: this.fullName
    });
  }//function that will push data from the registration page to the home when registered

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  registerUser() {
    this.userService.signUpUser(this.email, this.password)
      .then((newUserCreated) => {

        newUserCreated.updateProfile({
          displayName: this.fullName
        });
        this.userProfile.child(newUserCreated.uid).set({
          email: this.email,
          fullName: this.fullName,
          familyName: this.famName,
          address: this.address,
          password: this.password
          // uid: authenticatedUser.uid,
        })
        // this.fireAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((authenticatedUser) => {

         this.navCtrl.push('HomePage');
        // })
      })
      
  }

  // Adds a child to an existing parent
  createChild() {

    //   var ref = firebase.database().ref();
    //   ref.child('users').orderByChild('email').equalTo(this.parentEmail).on("value", function(snapshot) {
    //     console.log(snapshot.val());
    //     //var kidsSnapshot = snapshot.child('kids');
    //     //console.log(kidsSnapshot);
    //     // this.kids = kidsSnapshot.val();
    //     // console.log(this.kids);

    // });
    ////Commented Code above fetches all kids in the database. May possibly use this to check if kid already exists later on

    this.fireAuth.auth.signInWithEmailAndPassword(this.parentEmail, this.parentPassword).then((authenticatedUser) => {//Checks If Parent is Registered and Signs Them In

      this.childProfile.child(authenticatedUser.uid).push({//Adds a child to the child branch of the database, nested by parent's uid value

        Name: this.childfirstName,
        Password: this.childPassword,
        SubAccountType: 'Child',
        Longitude: this.childLongitude,
        Latitude: this.childLatitude,
        ParentID: authenticatedUser.uid,
      })
    })

    //this.navCtrl.setRoot('HomePage');
  }

  // Adds a teenager to an existing parent
  createTeen() {
    this.fireAuth.auth.signInWithEmailAndPassword(this.tparentEmail, this.tparentPassword).then((authenticatedUser) => {//Checks If Parent is Registered and Signs Them In

      this.teenProfile.child(authenticatedUser.uid).push({//Adds a teen to the teen branch of the database, nested by parent's uid value

        Name: this.teenfirstName,
        Password: this.teenPassword,
        Email: this.teenEmail,
        SubAccountType: 'Teen',
        Longitude: 0,
        Latitude: 0,
        ParentID: authenticatedUser.uid,
      })
    })

  }
}
