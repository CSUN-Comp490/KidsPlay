import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public people = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.people.push({ name: "Smith " + "Family", id: 1 });
    // this.people.push({name:"Waller " + "Family", id:2});
    // this.people.push({name:"3", id:3});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsfeedPage');
  }
}