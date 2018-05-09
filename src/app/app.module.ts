import { KidsaccountPageModule } from './../pages/kidsaccount/kidsaccount.module';
import { ResetPasswordPageModule } from './../pages/reset-password/reset-password.module';
import { OffersPageModule } from './../pages/offers/offers.module';
import { GroupChatPageModule } from './../pages/group-chat/group-chat.module';
import { Camera } from '@ionic-native/camera';
import { NavController } from 'ionic-angular';
// import { PhotoProvider } from './../providers/photo/photo';
import { TrackmapPageModule } from './../pages/trackmap/trackmap.module';
import { TrackerPageModule } from './../pages/tracker/tracker.module';
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
import {FileTransfer,FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {File } from '@ionic-native/file';
// import { MyEventsPageModule } from '../pages/my-events/my-events.module';
import {GroupChatPage} from '../pages/group-chat/group-chat';
// import { AddEventPageModule } from '../pages/add-event/add-event.module';
import { MyEventsPageModule } from '../pages/my-events/my-events.module';
import { VieweventPageModule } from '../pages/viewevent/viewevent.module';
import { AddEventPageModule } from '../pages/add-event/add-event.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { EventmadePageModule } from '../pages/event-made/event-made.module';
import { ViewcurrentEventPageModule } from '../pages/viewcurrent-event/viewcurrent-event.module'
import { MyProfilePageModule } from '../pages/my-profile/my-profile.module';
import {HttpModule} from '@angular/http';
import { RequestsProvider } from '../providers/requests/requests';
import { NewgroupPageModule } from '../pages/newgroup/newgroup.module';
import { GroupchattPageModule} from '../pages/groupchatt/groupchatt.module';
import { GroupbuddiesPageModule} from '../pages/groupbuddies/groupbuddies.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { TrackerPage } from '../pages/tracker/tracker';
import { TrackmapPage } from '../pages/trackmap/trackmap';
import { AddPicPageModule } from '../pages/add-pic/add-pic.module';
import { CameraProvider } from '../providers/camera/camera';
import { NameDataProvider } from '../providers/name-data/name-data'; 
import { ChatProvider } from '../providers/chat/chat';
import { GroupsProvider } from '../providers/groups/groups';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from '@ionic-native/file-chooser';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { HomePage } from '../pages/home/home';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {BarcodeScanner} from '@ionic-native/barcode-scanner'; 

@NgModule({
  declarations: [
    MyApp,
    // HomePage// added to initialize Feb 2nd 2018
   
   
  ],
  imports: [
    // KidsaccountPageModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
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
    NewgroupPageModule,
    GroupchattPageModule,
    MyEventsPageModule,
    OffersPageModule,
    GroupChatPageModule,
    HomePageModule,
    AngularFireDatabaseModule,
    AddPicPageModule,
    ResetPasswordPageModule,
    NgxQRCodeModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrackerPage,
    TrackmapPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    File,
    FilePath,
    FileChooser,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    FileTransferObject,
    File,
    AuthProvider,
    UserServiceProvider,
    RequestsProvider,
    GroupsProvider,
    ImghandlerProvider,
    NameDataProvider,
    ChatProvider,
    CameraProvider,
    Camera,
    BarcodeScanner
    
  ]
})
export class AppModule {}


