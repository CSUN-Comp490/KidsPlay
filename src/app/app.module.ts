import { UserServiceProvider } from './../providers/user-service/user-service';
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
import {GroupChatPage} from '../pages/group-chat/group-chat';
import { AddEventPageModule } from '../pages/add-event/add-event.module';
import { EventmadePageModule } from '../pages/event-made/event-made.module';
import { MyProfilePageModule } from '../pages/my-profile/my-profile.module';
import { ViewcurrentEventPageModule } from '../pages/viewcurrent-event/viewcurrent-event.module'
import {HttpModule} from '@angular/http';

//import { GoogleMaps } from '@ionic-native/google-maps';
//import { Geolocation } from '@ionic-native/geolocation';


import { TrackerPageModule } from "../pages/tracker/tracker.module";
import { TrackmapPageModule } from "../pages/trackmap/trackmap.module";

@NgModule({
  declarations: [
    MyApp,
    GroupChatPage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
    AngularFireAuthModule,
    LoginPageModule,
    MyProfilePageModule,
    AngularFireModule.initializeApp(crank),
    TrackmapPageModule,
    TrackerPageModule,
    ViewcurrentEventPageModule,
    AddEventPageModule,
    EventmadePageModule,
    MessagingPageModule,
    EventsAttendingPageModule,
    NewsfeedPageModule,
    ListPageModule,
    HomePageModule,
    RegistrationPage,
    MyEventsPageModule,
    FriendsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GroupChatPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //GoogleMaps,
    //Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserServiceProvider
    
  ]
})
export class AppModule {}
