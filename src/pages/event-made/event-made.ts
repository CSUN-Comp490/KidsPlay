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

  type = this.navParams.get('type');
  eventName = this.navParams.get('eventName');
  myDate = this.navParams.get('data');
  location = this.navParams.get('location');
  description = this.navParams.get('description');
  capacity = this.navParams.get('capacity');
  creator = this.navParams.get('creator');

  

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventmadePage');
    
  }

  viewit() {
    let data = {
      'type': this.type,
      'eventName': this.eventName,
      'data': this.myDate,
      'location': this.location,
      'description': this.description,
      'capacity': this.capacity,
      'creator' : this.creator,
    }
    this.navCtrl.setRoot (ViewcurrentEventPage,data);
  }
  checkeventbook(){

   this.navCtrl.setRoot (MyEventsPage);

  
   
}



}
