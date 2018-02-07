import { ResetPasswordPage } from './../../pages/reset-password/reset-password';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import{usercreds} from '../../models/interfaces/usercreds';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public afireauth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
 login(credentials:usercreds){
  var promise = new Promise((resolve, reject) =>{
  this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then (() =>{
    resolve(true);
  }) .catch((err) =>{
    reject(err);


  })
})
  return promise;
  }

  logout(){
    return this.afireauth.auth.signOut();
  }

  resetPassword(email: string) : Promise<void> {
    
    return this.afireauth.auth.sendPasswordResetEmail(email);
  }

}

