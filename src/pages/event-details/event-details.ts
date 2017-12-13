import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsfeedPage} from '../newsfeed/newsfeed';
import * as firebase from 'firebase';
import { UserServiceProvider } from './../../providers/user-service/user-service';
/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  public eventLocation;
  public eventHost;
  public eventTitle;
  public eventDate;
  public eventDescription;
  public eventCapacity;

  public allHosts = [];
  public hostIDs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider) {
    /*this.userService.getEventHosts().then((res: any)=>{
      //console.log(res);
      //_.findKey(users, { 'age': 1, 'active': true });
      this.allHosts = res; 
      console.log(this.allHosts);           // allHosts is an object and the keys are the user ids

      //console.log(JSON.stringify(this.allHosts));
      //console.log(JSON.parse(this.allHosts));
      //this.hostIDs = Object.keys(this.allHosts[0]);
      console.log(this.hostIDs);
      //this.eventHost = this.allHosts;
      // UserHostID
      
    })*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
    this.eventCapacity = this.navParams.get('capacity');
    this.eventDate = this.navParams.get('data');
    this.eventDescription = this.navParams.get('description');
    this.eventLocation = this.navParams.get('location');
    this.eventTitle = this.navParams.get('eventName');
    this.eventHost = this.navParams.get("creator");
  }

}
