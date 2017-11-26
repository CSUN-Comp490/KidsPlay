import { Camera } from '@ionic-native/camera';
import { CameraProvider } from './../providers/camera/camera';
import { LoginPage } from './../pages/login/login';
import { RegistrationPage } from './../pages/registration/registration';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from './../pages/home/home';
import { ChatsPage } from '../pages/chats/chats';
import {GroupChatPage} from '../pages/group-chat/group-chat';
import { ListPage } from '../pages/list/list';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';
import { EventsAttendingPage } from '../pages/events-attending/events-attending';
import { MessagingPage } from '../pages/messaging/messaging';
import { FriendsPage } from './../pages/friends/friends';
import { MyEventsPage } from '../pages/my-events/my-events';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { AddPicPage } from '../pages/add-pic/add-pic';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl: NavController
  //nav: any;
  rootPage:any = 'LoginPage';

  pages: Array<{title: string, component: any, icon: string}>;
  
    constructor(public platform: Platform, 
      public statusBar: StatusBar, 
      public splashScreen: SplashScreen) {
      this.initializeApp();
  
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomePage, icon: 'home' },
        { title: 'Newsfeed', component: NewsfeedPage, icon: 'paper' },
        { title: 'Events Attending', component: EventsAttendingPage, icon: 'bookmarks' },
        { title: 'Messaging', component: MessagingPage, icon: 'chatbubbles' },
        { title: 'Friends', component: FriendsPage, icon: 'contacts' },
        { title: 'My Events', component: MyEventsPage, icon: 'calendar' },
        { title: 'My Profile', component: MyProfilePage, icon: 'contact' },
        { title: 'Picture', component: AddPicPage, icon: 'ios-camera' }
      ];
  
    }
  
    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
  
    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.navCtrl.setRoot(page.component);
    }
  }