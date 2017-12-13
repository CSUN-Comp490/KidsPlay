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
   firedata = firebase.database().ref('/users'); //parent
   kidData = firebase.database().ref('/kids'); //kid
   eventData = firebase.database().ref('/events'); //kid

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
getcurrentuid(){

var promise = new Promise((resolve, reject)=> {
this.firedata.equalTo('uid').once('value',(snapshot)=> {
 let userdata= snapshot.val();
 let temparr= [];
 for (var key in userdata) {
  temparr.push(userdata[key]);
}
resolve(temparr);
})
.catch((err)=>{
  reject(err);
})

})
return promise;

}


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

  getallKids() {

    var promise = new Promise((resolve, reject) => {
      this.kidData.orderByChild('uid').once('value', (snapshot) => {
        let kidvalues = snapshot.val();
        let kidarr = [];
        for (var k in kidvalues) {
          kidarr.push(kidvalues[k]);
        }
        resolve(kidarr);
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;    
  }

  getmyKids(x){

  //   this.kidData.orderByChild('uid').equalTo(x).on("value", function(snapshot) {
  //   console.log(snapshot.val());
  // });


    var promise = new Promise((resolve, reject) => {
      this.kidData.child(x).orderByChild('uid').once('value', (snapshot) => {
        let mykidvalues = snapshot.val();
        let mykidarr = [];
        for (var k in mykidvalues) {
          mykidarr.push(mykidvalues[k]);
        }
        resolve(mykidarr);
      }).catch((err) => {
        reject(err);
      })
    })
    
    return promise;   
  }

  getallEvents(){
    
        var promise = new Promise((resolve, reject) => {
          this.eventData.orderByChild('uid').once('value', (snapshot) => {
            let eventvalues = snapshot.val();
            let eventarr = [];
            for (var k in eventvalues) {
              eventarr.push(eventvalues[k]);
            }
            resolve(eventarr);
          }).catch((err) => {
            reject(err);
          })
        })
        return promise;    
      }


  getmyEvents(y){
        var promise = new Promise((resolve, reject) => {
          this.eventData.child(y).orderByChild('uid').once('value', (snapshot) => {
            let myeventvalues = snapshot.val();
            let myeventarr = [];
            for (var k in myeventvalues) {
              myeventarr.push(myeventvalues[k]);
            }
            resolve(myeventarr);
          }).catch((err) => {
            reject(err);
          })
        })
        
        return promise;   
      }
  
  


} 