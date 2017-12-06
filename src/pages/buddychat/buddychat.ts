import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public chatservice: ChatProvider) {
    this.buddy = this.chatservice.buddy;
  }

  

}
