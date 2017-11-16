import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyEventsPage } from '../my-events/my-events';
import { MyProfilePage } from '../my-profile/my-profile';
import { EventmadePage } from '../event-made/event-made';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  openProfilePage(){
     this.navCtrl.push( MyProfilePage );
  }
  eventmade() {
     this.navCtrl.push(EventmadePage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  openMyEventsPage() {
    this.navCtrl.setRoot(MyEventsPage, {}, {animate: true, direction: 'forward'});
  }

}

