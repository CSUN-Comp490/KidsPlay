import { RegistrationPage } from './../pages/registration/registration';
import { LoginPageModule } from './../pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {crank} from './app.firebaseconfig';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';
import { NewsfeedPageModule } from '../pages/newsfeed/newsfeed.module';
import { EventsAttendingPageModule } from '../pages/events-attending/events-attending.module';
import { MessagingPageModule } from '../pages/messaging/messaging.module';
import { FriendsPageModule } from '../pages/friends/friends.module';
import { MyEventsPageModule } from '../pages/my-events/my-events.module';
import { VieweventPageModule } from '../pages/viewevent/viewevent.module';
import { AddEventPageModule } from '../pages/add-event/add-event.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { EventmadePageModule } from '../pages/event-made/event-made.module';
import { ViewcurrentEventPageModule } from '../pages/viewcurrent-event/viewcurrent-event.module'
import { MyProfilePageModule } from '../pages/my-profile/my-profile.module';

import { GoogleMaps } from '@ionic-native/google-maps';

import { TrackerPageModule } from "../pages/tracker/tracker.module";
import { TrackmapPageModule } from "../pages/trackmap/trackmap.module";


@NgModule({
  declarations: [
    MyApp,
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    LoginPageModule,
    MyProfilePageModule,
    AngularFireModule.initializeApp(crank),
    TrackmapPageModule,
    TrackerPageModule,
    AddEventPageModule,
    TabsPageModule,
    EventmadePageModule,
    ViewcurrentEventPageModule,
    VieweventPageModule,
    NewsfeedPageModule,
    MessagingPageModule,
    FriendsPageModule,
    MyEventsPageModule, 
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    
  ]
})
export class AppModule {}
function newFunction() {
    '../';
}

