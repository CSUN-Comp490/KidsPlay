import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserServiceProvider} from '../../providers/user-service/user-service';
/**
 * Generated class for the BuddiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buddies',
  templateUrl: 'buddies.html',
})
export class BuddiesPage {
  temparr = [];
  filteredusers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public userservice: UserServiceProvider){
    this.userservice.getallusers().then((res: any)=>{
      this.filteredusers = res;
      this.temparr = res;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuddiesPage');
  }

  searchuser(searchbar) {
    this.filteredusers = this.temparr;
    var q = searchbar.target.value;
    if (q.trim() == '') {
      return;
    }

    this.filteredusers = this.filteredusers.filter((v) => {
      if (v.fullName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }

}
