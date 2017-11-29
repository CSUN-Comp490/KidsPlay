import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyEventsPage } from '../my-events/my-events';
import { MyProfilePage } from '../my-profile/my-profile';
import { EventmadePage } from '../event-made/event-made';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

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

/*export class item {
  eventName: string;
  myDate: string;
  location: string;
  description: string;
  capacity: string;
}*/

@Injectable()
export class AddEventPage {

  arrData = []
  eventName = '';
  myDate = '';
  location = '';
  description = '';
  capacity = '';

 /* NameOfEvent: string[][];
  DateOfEvent: string[][];
  LocationOfEvent: string[][];
  DescriptionOfEvent: string[][];
  CapacityOfEvent: string[][]; */

 // items: AngularFireObject<item[]>= null;
  userID: string;

  /*constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase, private afAuth: AngularFireAuth){
    this.afAuth.authState.subscribe(user => {
      if(user) this.userID = user.uid
    })
  }*/

 constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    this.fdb.list("/events/").valueChanges().subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData);
    })
  }

 openProfilePage(){
     this.navCtrl.setRoot( MyProfilePage );
  }

 // eventmade(): AngularFireObject<item[]> {
  eventmade(){
   // if (!this.userID) return;
    this.navCtrl.push(EventmadePage);
    this.fdb.list("/events/").push(this.eventName);
    this.fdb.list("/events/").push(this.myDate);
    this.fdb.list("/events/").push(this.location);
    this.fdb.list("/events/").push(this.description);
    this.fdb.list("/events/").push(this.capacity);
   // this.fdb.list('events/${this.userID}').push(this.items);
    //return this.items
    /* this.navCtrl.push(EventmadePage);
     this.navCtrl.push(EventmadePage);
     this.fdb.list("/events/").push(this.eventName);
     this.fdb.list("/events/").push(this.myDate);
     this.fdb.list("/events/").push(this.location);
     this.fdb.list("/events/").push(this.description);
     this.fdb.list("/events/").push(this.capacity);*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  openMyEventsPage() {
     this.navCtrl.setRoot(MyEventsPage);
  }

}

