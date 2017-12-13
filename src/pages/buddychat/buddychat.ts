import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import firebase from 'firebase';
/**
 * Generated class for the BuddychatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buddychat',
  templateUrl: 'buddychat.html',
})
export class BuddychatPage {
   buddy: any;
   newmessage;
   allmessages = [];
   photoURL;
   constructor(public navCtrl: NavController, public navParams: NavParams, public chatservice: ChatProvider,
                public events: Events) {
     this.buddy = this.chatservice.buddy;
     this.photoURL = firebase.auth().currentUser.photoURL;
     this.events.subscribe('newmessage', () =>{
      this.allmessages =[];
      this.allmessages = this.chatservice.buddymessages;
     })

     console.log(this.buddy);
   }

  addmessage(){
    this.chatservice.addnewmessage(this.newmessage).then(()=>{
      this.newmessage = '';
    })
  }
 
  ionViewDidEnter(){
    this.chatservice.getbuddymessages();

  }
 
}
