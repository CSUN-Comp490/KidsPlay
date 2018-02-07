import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { UserServiceProvider } from './../../providers/user-service/user-service';

/**
 * Generated class for the ChildtrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-childtrack',
  templateUrl: 'childtrack.html',
})
export class ChildtrackPage {
  childuid='-L4_q1VY2046v_lXH-oq';

  child = '';
  childProfile: any = firebase.database().ref('kids');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildtrackPage');
    this.child = this.navParams.get('child');
    console.log(this.child);

    this.childProfile.child(firebase.auth().currentUser.uid).child(this.childuid).update({
      Latitude: 24,
      Longitude: 24,
    })



  }

}
