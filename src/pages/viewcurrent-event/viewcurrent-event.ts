import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyEventsPage } from '../my-events/my-events';

/**
 * Generated class for the ViewcurrentEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewcurrent-event',
  templateUrl: 'viewcurrent-event.html',
})
export class ViewcurrentEventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewcurrentEventPage');
  }
  
  goback(){
   this.navCtrl.setRoot(MyEventsPage);

  }

  delet_event(){
    

  //  this is the function to delet the current event that the user just made

    }
}
