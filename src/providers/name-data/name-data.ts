import { NavController } from 'ionic-angular';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the NameDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NameDataProvider {
private data: any = null;

get() {

  let data = this.data;
  this.data = null;
  return data;

}
  post(item: any, navCtrl: NavController){
    

  }
}
