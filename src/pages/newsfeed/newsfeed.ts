import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetailsPage} from '../event-details/event-details';
//import * as firebase from 'firebase';

/**
 * Generated class for the NewsfeedPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({})
@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {

  events: any;

  public bColor: string = '#ff6f6f';
  public people = new Array();
  public visible: boolean = false;
  public eventdetailpage : EventDetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.people.push({ name: "Smith " + "Family", id: 1 });

    this.events = new Array(1);
    // this.people.push({name:"Waller " + "Family", id:2});
    // this.people.push({name:"3", id:3});
  }
  addToMyEvents(){
    if(this.bColor === '#ff6f6f') { 
      this.bColor = '#575757';
      this.visible = true;
    } else {
      this.bColor = '#ff6f6f';
      this.visible = false;
    }
  }
  detailsNav(){
    this.navCtrl.push(EventDetailsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsfeedPage');
  }
}