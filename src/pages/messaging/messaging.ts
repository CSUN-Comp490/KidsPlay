import { Component } from '@angular/core';
import { ChatsPage } from "../chats/chats";
import {GroupChatPage} from "../group-chat/group-chat";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messaging',
  templateUrl: 'messaging.html',
})
export class MessagingPage {

  tab1: string = "ChatsPage";
  tab2: string = "GroupChatPage";
  constructor(){

  }
 // constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //ionViewDidLoad() {
    //console.log('ionViewDidLoad MessagingPage');
  //}


  //goTO1(){
  //      this.navCtrl.push('GroupChatPage');
  // }
  


 // goTO2(){
   // this.navCtrl.push('ChatsPage');
 // }
//}
