import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewcurrentEventPage } from '../viewcurrent-event/viewcurrent-event';
import { VieweventPage } from '../viewevent/viewevent';
import { MyEventsPage } from '../my-events/my-events';

@IonicPage()
@Component({
  selector: 'page-eventmade',
  templateUrl: 'event-made.html',
})
export class EventmadePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventmadePage');
  }

  viewit() {
    this.navCtrl.push(ViewcurrentEventPage);
  }
  checkeventbook(){

   this.navCtrl.push (MyEventsPage);

  }
}
