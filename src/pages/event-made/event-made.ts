import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewcurrentEventPage } from '../viewcurrent-event/viewcurrent-event';
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
    this.navCtrl.setRoot (ViewcurrentEventPage);
  }
  checkeventbook(){

   this.navCtrl.setRoot (MyEventsPage);

  }
}
