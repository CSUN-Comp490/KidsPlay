import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { RequestsProvider} from '../../providers/requests/requests';
import { GroupsProvider} from '../../providers/groups/groups';
/**
 * Generated class for the GroupbuddiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groupbuddies',
  templateUrl: 'groupbuddies.html',
})
export class GroupbuddiesPage {
  myfriends = [];
  groupmembers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public requestservice: RequestsProvider,
              public events: Events, public groupservice: GroupsProvider) {
  }

  ionViewWillEnter() {
    this.requestservice.getmyfriends();

    this.events.subscribe('friends', () =>{
      
      this.myfriends = [];
      this.myfriends = this.requestservice.myfriends;
      this.groupmembers = this.groupservice.currentgroup;
      for (var key in this.groupmembers)
      for (var friend in this.myfriends) {
        if (this.groupmembers[key].uid === this.myfriends[friend].uid)
          this.myfriends.splice(this.myfriends.indexOf(this.myfriends[friend]), 1);
      }
   // this.tempmyfriends = this.myfriends;
    })
  }

}
