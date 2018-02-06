import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import {GroupsProvider} from '../../providers/groups/groups';


/**
 * Generated class for the GroupChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-chat',
  templateUrl: 'group-chat.html',
})
export class GroupChatPage {
  allmygroups;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
              public loadingCtrl: LoadingController, public groupservice: GroupsProvider) {
  }

  ionViewWillEnter() {
   let loader = this.loadingCtrl.create({
     content: 'Getting your groups, please wait...'
   });
   loader.present();
   this.groupservice.getmygroups();
   this.events.subscribe('newgroup', () =>{
     loader.dismiss();
    this.allmygroups = this.groupservice.mygroups;
   })
  }

  ionViewDidLeave() {
    this.events.unsubscribe('newgroup');
  }

  addgroup(newGroup){
    this.navCtrl.push('NewgroupPage');
  }
  openchat(group) {
    this.groupservice.getintogroup(group.groupName);
    this.navCtrl.push('GroupchattPage', { groupName: group.groupName });
  }

}
