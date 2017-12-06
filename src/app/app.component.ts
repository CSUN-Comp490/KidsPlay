import { LoginPage } from './../pages/login/login';
import { RegistrationPage } from './../pages/registration/registration';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HomePage} from './../pages/home/home';
import { ChatsPage } from '../pages/chats/chats';
import { BuddiesPage } from '../pages/buddies/buddies';
import { GroupChatPage } from '../pages/group-chat/group-chat';
import { ListPage } from '../pages/list/list';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';
import { EventsAttendingPage } from '../pages/events-attending/events-attending';
import { MessagingPage } from '../pages/messaging/messaging';
import { FriendsPage } from './../pages/friends/friends';
import { MyEventsPage } from '../pages/my-events/my-events';
import { MyProfilePage } from '../pages/my-profile/my-profile';

import { TrackerPageModule } from "../pages/tracker/tracker.module";
import { TrackmapPageModule } from "../pages/trackmap/trackmap.module";
import { AddEventPage } from '../pages/add-event/add-event';
import { EventmadePage } from '../pages/event-made/event-made';
import { ViewcurrentEventPage } from '../pages/viewcurrent-event/viewcurrent-event';
//import { TrackerPage } from "../pages/tracker/tracker";
//import { TrackmapPage } from "../pages/trackmap/trackmap";
import { MessagingPageModule } from "../pages/messaging/messaging.module";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'LoginPage';

  pages: Array<{title: string, component: any, icon: string}>;
  
    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
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
        { title: 'Add A Event', component: AddEventPage, icon: 'add-circle' }
       // { title: 'KidTracker', component: TrackerPage, icon: 'contact' },
       // { title: 'KidMap', component: TrackmapPage, icon: 'contact' },
                
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
      this.nav.setRoot(page.component);
    }
  }