import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyEventsPage } from '../my-events/my-events'
import * as firebase from 'firebase';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  eventTitle = '';
  location = '';
  date = '';
  time = '';

  userProfile:any = firebase.database().ref('events');
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService:UserServiceProvider,
    public fireAuth:AngularFireAuth) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  openMyEventsPage() {
    this.navCtrl.setRoot(MyEventsPage, {}, {animate: true, direction: 'forward'});
  }
  addNewEvent(){
    /*
    this.userProfile.child().set({
    eventTitle: this.eventTitle,
    location: this.location,
    date: this.date,
    time: this.time});
                          
                  this.navCtrl.setRoot('HomePage');
                  */
  }

}