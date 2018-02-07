// import { Person } from './../../app/person/person';
import { Component,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetailsPage} from '../event-details/event-details';
import * as firebase from 'firebase';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the NewsfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({})
@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {
  // @Input() person: Person;

  events = [];
  allEvents = [];

  public people = new Array();
  public visible: boolean = false;
  //public eventAdded: boolean = false;
  public eventdetailpage : EventDetailsPage;
  public addedToEvents: boolean [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userService: UserServiceProvider, private alertCtrl: AlertController) {

    this.userService.getallEvents().then((res: any)=>{
      console.log(res);
      this.allEvents = res; 
      console.log(this.allEvents);

      this.events = [];
      for (var i in this.allEvents) {
        for (var j in this.allEvents[i]) {

          console.log(this.allEvents[i][j]);
          //console.log(this.allEvents);
          this.events.push(this.allEvents[i][j]);
        }
      }
      
      //this.description = this.events[0].description;
      //this.date = this.events[0].data;
      //this.eventName = this.events[0].eventName;

      //console.log(this.description);
      
      console.log(Object.keys(this.events).length);     //length of events array

      this.addedToEvents = new Array(Object.keys(this.events).length).fill(false);
      //console.log(this.allEvents[0]);
    //   let allDescriptions = [];
    //   for (var i in this.allEvents) {

    //     for (var j in this.allEvents[i].child) {
    //     allDescriptions.push(this.allEvents[i].child[j].description);
    //   }
    // }
    //   console.log(allDescriptions);
    })
    //getcurrentuid
    //this.people.push({ name: "Smith " + "Family", id: 1 });
    // this.people.push({name:"Waller " + "Family", id:2});
    // this.people.push({name:"3", id:3});
  }
  addToMyEvents(index){
    
    console.log(index);
    console.log(this.events[index]);
    if(this.addedToEvents[index]==false){
      // add to your events
      let alert = this.alertCtrl.create({
        title: 'Event Added!',
        subTitle: 'This event was added to your list of attending events',
        buttons: ['Okay']
      });
      alert.present();
      this.addedToEvents[index]=true;
    }
    else{
      // remove from your events
      let alert = this.alertCtrl.create({
        title: 'Event Removed!',
        subTitle: 'This event was removed from your list of attending events',
        buttons: ['Okay']
      });
      alert.present();
      this.addedToEvents[index]=false;
    }

    
  }
  detailsNav(index){
    console.log(index); 
    console.log(this.events[index]);
    this.navCtrl.push(EventDetailsPage, this.events[index]);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsfeedPage');
  }
}