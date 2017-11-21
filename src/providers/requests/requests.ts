import { Injectable } from '@angular/core';
import {connreq} from '../../models/interfaces/request';
import firebase from 'firebase';

/*
  Generated class for the RequestsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestsProvider {
  firereq = firebase.database().ref('/requests');

  constructor() {
 
  }

  sendrequest(req: connreq) {
    var promise = new Promise((resolve, reject) => {
      this.firereq.child(req.recipient).push({
      sender: req.sender
      }).then(() => {
        resolve({ success: true });
        // }).catch((err) => {
        //   resolve(err);
    })
    })
    return promise;  
  }

}
