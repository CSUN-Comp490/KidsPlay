import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AddEventPage} from '../add-event/add-event';
import {AngularFireAuth} from 'angularfire2/auth';
import { MessagingPage } from '../messaging/messaging';
import { TrackerPage } from '../tracker/tracker';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth,private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams, public userService:UserServiceProvider) {
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {

      if (data && data.email && data.uid){
      this.toast.create({

        message: `Welcome to KidsPlay, ${data.email}`,
        duration: 3000
      }).present();
      }
      else {//determin log in
          this.toast.create({
            message: `Could not find authentication details`,
            duration: 3000
          }).present();
      }
    });
  }
    // signin(){
    //   this.authservice.login(this.credentials).then((res:any) =>{
    //      if(!res.code)
    //        this.navCtrl.setRoot('HomePage');
    //      else 
    //      alert(res);

    //   })

    // }

   load(){
      this.userService.loadUser(5).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    }
    
    gotoaddeventpage(){
      this.navCtrl.setRoot(AddEventPage);
      
    }

    AddEventPageBitch(){
      this.navCtrl.push(AddEventPage);
    }

    gotoMessaging(){
      this.navCtrl.push(MessagingPage);
    }
    gotoTracker(){
      this.navCtrl.push(TrackerPage);
    }

}
