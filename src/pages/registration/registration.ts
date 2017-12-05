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
  tparentPassword = '';
  teenPassword = '';
  teenEmail = '';
  


  kid: [string,number];
  i = 0;
  account: string = "parent";

  temparr= [];


  


  userProfile: any = firebase.database().ref('users');
  childProfile: any = firebase.database().ref('kids');
  teenProfile: any = firebase.database().ref('teens');
  parentProfile: any = firebase.database().ref('parent');
  
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

    var ref = firebase.database().ref();


    ref.child('users').orderByChild('email').equalTo(this.parentEmail).on("value", function(snapshot) {
      console.log(snapshot.val());
      //var kidsSnapshot = snapshot.child('kids');
      //console.log(kidsSnapshot);
      // this.kids = kidsSnapshot.val();
      // console.log(this.kids);

  });
    
    // ref.on("value", function(snapshot) {
    //    console.log(snapshot.val());
    //    console.log(snapshot.val().email);
    // }, function (error) {
    //    console.log("Error: " + error.code);
    // });
    
    // let   cred={
    //   email: this.parentEmail,
    //   password: this.parentPassword,
    // } 

  

    //this.checkCredentials(cred);

   

    this.fireAuth.auth.signInWithEmailAndPassword(this.parentEmail, this.parentPassword).then((authenticatedUser) => {

     // console.log(authenticatedUser);
     
    //  var userId = firebase.auth().currentUser.uid; //userid
    //   var starCountRef = firebase.database().ref();
    //   starCountRef.on('value', function(snapshot) {
    //   //  console.log(snapshot.val());
    //     // updateStarCount(postElement, snapshot.val());

    //     if(userId === snapshot.val().uid){
    //       console.log(snapshot.val().email);
    //     }
    //     console.log(snapshot.val().email);

    //   });

      this.userService.getallusers().then((res: any)=>{
        // this.temparr = res;
        // for(this.i=0; this.i<res.length; this.i++){
        //   this.temparr = res['key']['kids'];
        //   //console.log(this.temparr);
        // }
        // return this.temparr;
       
        
      })

    

    




        // var userRef = this.userProfile.child(authenticatedUser.uid);
        // let existingKids = userRef.once('value');
        // console.log(userRef);
        
        //var ref = firebase.database().ref(authenticatedUser.uid);
        //ref.once("value")
        //   .then(function(snapshot){
        //   this.existingKids = snapshot.child("email").val();
          
        //   });
        
        // if(this.userProfile.child((authenticatedUser.uid.kids).includes(this.childfirstName))){

        // }
        // else{.

        // console.log(this.temparr);
                this.childProfile.child(authenticatedUser.uid).push({
                  
                  Name: this.childfirstName,
                  Password: this.childPassword,
                  SubAccountType: 'Child',
                  Longitude: 12,
                  Latitide: 12,
                  ParentID: authenticatedUser.uid,
                  //ParentfullName: authenticatedUser.fullName,
                  //familyName: authenticatedUser.familyName,
                  //address: authenticatedUser.address,   
                  
                  
                  
                  //   kids: {
                  //   [this.childfirstName]: {
                  //     Name: this.childfirstName,
                  //     Password: this.childPassword,
                  //     SubAccountType: 'Child',
                  //     Longitude: 12,
                  //     Latitide: 12,
                  //   },
                  // }
                  


                
                  
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

  // gotData(data){

  //   var kids = Object.keys(kids);
  //   console.log(keys);
  //   for  (var i = 0; i < keys.length; i++){
  //     var k = keys[i];
  //     var initials
  //   }

  // }

  // Adds a teenager to an existing parent
  createTeen() {
        var ref = firebase.database().ref();
        
        ref.child('users').orderByChild('email').equalTo(this.parentEmail).on("value", function(snapshot) {
          console.log(snapshot.val());
       });
        
        this.fireAuth.auth.signInWithEmailAndPassword(this.tparentEmail, this.tparentPassword).then((authenticatedUser) => {
       
          this.userService.getallusers().then((res: any)=>{
          })

                    this.teenProfile.child(authenticatedUser.uid).push({
                      
                      Name: this.teenfirstName,
                      Password: this.teenPassword,
                      Email: this.teenEmail,
                      SubAccountType: 'Teen',
                      Longitude: 12,
                      Latitide: 12,
                      ParentID: authenticatedUser.uid,
                      
                      

                    })
  
                  })
    
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
