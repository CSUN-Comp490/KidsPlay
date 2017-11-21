import { AngularFireAuth } from 'angularfire2/auth';

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

    private data: any;
    //private fireAuth: any;
   // private userProfile: any;
   firedata = firebase.database().ref('/users');
  constructor(public http: Http, public fireAuth: AngularFireAuth) {

    //this.fireAuth = firebase.auth();
    //this.userProfile = firebase.database().ref('users');
  }

  loadUser(number) {

if(this.data) {
    return Promise.resolve(this.data);
}
    return new Promise(resolve => {

        this.http.get('https://randomuser.me/api/?results=' + number)
            .map(res => res.json())
            .subscribe(data=> {
                this.data = data.results;
                resolve(this.data);


            })


    })
  }
signUpUser(email: string , password: string) {

    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    
    /*.then((newUserCreated)=>{  

        this.fireAuth.SignInWithEmailAndPassowrd(email,password).then((authenticatedUser) => {

                    this.userProfile.child(authenticatedUser.uid).set({
                        email: email
                        

                    })
                })
            })*/
        }

//}
getallusers() {
    var promise = new Promise((resolve, reject) => {
      this.firedata.orderByChild('uid').once('value', (snapshot) => {
        let userdata = snapshot.val();
        let temparr = [];
        for (var key in userdata) {
          temparr.push(userdata[key]);
        }
        resolve(temparr);
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }
} 