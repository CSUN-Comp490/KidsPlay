import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyEventsPage } from '../my-events/my-events';
import { MyProfilePage } from '../my-profile/my-profile';
import { EventmadePage } from '../event-made/event-made';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import {AuthProvider} from '../../providers/auth/auth';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { LoginPage } from '../login/login';
import {RequestsProvider} from '../../providers/requests/requests';

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


@Injectable()
export class AddEventPage {

 arrData = []
 type='';
 eventName = '';
 myDate = '';
 location = '';
 description = '';
 capacity = '';
 currentid= [];
 creator='';

 userID: String;

 constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase, private afAuth: AngularFireAuth, public userservice: UserServiceProvider,
  public requestservice: RequestsProvider) {
    this.userservice.getcurrentuid().then((res: any)=>{
    this.currentid= res;
    })

 this.afAuth.authState.subscribe(user => {
   if(user) this.userID = user.uid  
 this.fdb.list("/events/").valueChanges().subscribe(data => {
     this.arrData = data;
       //if(users) this.userID = users.uid
     console.log(this.arrData);
    //  return (user.uid);
   })
 })

 this.creator = firebase.auth().currentUser.displayName;
 console.log(this.creator);
}


openProfilePage(){
    this.navCtrl.push( MyProfilePage );
 }

eventmade(){
 if (!this.userID) {
   console.log('user not logged in');
   return;
 }
 //this.arrData = this.fdb.list('items/${this.userID}');

 let eventPath = "/events/" + this.userID;
 // json object; or a typescript class/interface
 this.fdb.list(eventPath).push({
   'type': this.type,
   'eventName': this.eventName,
   'data': this.myDate,
   'location': this.location,
   'description': this.description,
   'capacity': this.capacity,
   'creator' : this.creator,
 });
 // this.fdb.list(eventPath).push(this.type);
 // this.fdb.list(eventPath).push(this.eventName);
 // this.fdb.list(eventPath).push(this.myDate);
 // this.fdb.list(eventPath).push(this.location);
 // this.fdb.list(eventPath).push(this.description);
 // this.fdb.list(eventPath).push(this.capacity);
 // this.fdb.list(eventPath).push(this.userID);

 let data = {
  'type': this.type,
  'eventName': this.eventName,
  'data': this.myDate,
  'location': this.location,
  'description': this.description,
  'capacity': this.capacity,
  'creator' : this.creator,
 }
 this.navCtrl.push(EventmadePage, data);

 //  if (!this.userID) return;
 //  this.items = this.fdb.list('items/${this.userID}');
 //  return this.items



//  (function($) {
//   var $fields = $('#name_input, #date_input, #location_input, #des_input, #capa_input');
  
//   $fields.on('keyup change', function() {
//     if (allFilled($fields)) {
//        $('#add_submit').removeAttr('disabled');
//     }
//   });

//   function allFilled($fields) 
//   {
//     return $fields.filter(function() {
//       return this.value === ''; 
//     }).length == 0;
//   }
// });


 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad AddEventPage');
 }

 openMyEventsPage() {
    this.navCtrl.setRoot(MyEventsPage, {}, {animate: true, direction: 'forward'});
 }

}

// ('#name_input, #date_input, #location_input, #des_input, #capa_input').keyup(function() {
//   if(allFilled()){
//        ('#add_submit').removeAttr('disabled');
//   }
// });

// function allFilled() {
//   var filled = true;
//   ('#add_prod_form input, #add_prod_form textarea').each(function() {
//       if((this).val() == '') filled = false;
//   });
//   return filled;
// }



// (function($) {
//   var $fields = $('#name_input, #date_input, #location_input, #des_input, #capa_input');
  
//   $fields.on('keyup change', function() {
//     if (allFilled($fields)) {
//        $('#add_submit').removeAttr('disabled');
//     }
//   });

//   function allFilled($fields) 
//   {
//     return $fields.filter(function() {
//       return this.value === ''; 
//     }).length == 0;
//   }
// });



