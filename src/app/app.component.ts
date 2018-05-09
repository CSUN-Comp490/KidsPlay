import { KidsaccountPage } from './../pages/kidsaccount/kidsaccount';
import { ResetPasswordPage } from './../pages/reset-password/reset-password';
import { EmailValidator } from './../validators/email';
import { OffersPage } from './../pages/offers/offers';
import { Camera } from '@ionic-native/camera';
import { CameraProvider } from './../providers/camera/camera';
import { LoginPage } from './../pages/login/login';
import { RegistrationPage } from './../pages/registration/registration';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from './../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatsPage } from '../pages/chats/chats';
import { BuddiesPage } from '../pages/buddies/buddies';
import { GroupChatPage } from '../pages/group-chat/group-chat';
import { GroupchattPage} from '../pages/groupchatt/groupchatt';
import { ListPage } from '../pages/list/list';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';
import { EventsAttendingPage } from '../pages/events-attending/events-attending';
import { MessagingPage } from '../pages/messaging/messaging';
import { FriendsPage } from './../pages/friends/friends';
import { MyEventsPage } from '../pages/my-events/my-events';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { NewgroupPage } from '../pages/newgroup/newgroup';
import { GroupbuddiesPage} from '../pages/groupbuddies/groupbuddies';
import { AddPicPage } from '../pages/add-pic/add-pic';
import { TrackerPageModule } from "../pages/tracker/tracker.module";
import { TrackmapPageModule } from "../pages/trackmap/trackmap.module";
import { AddEventPage } from '../pages/add-event/add-event';
import { EventmadePage } from '../pages/event-made/event-made';
import { ViewcurrentEventPage } from '../pages/viewcurrent-event/viewcurrent-event';
import { TrackerPage } from "../pages/tracker/tracker";
//import { TrackmapPage } from "../pages/trackmap/trackmap";
import { MessagingPageModule } from "../pages/messaging/messaging.module";
import { AuthProvider } from '../providers/auth/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl: NavController
  //nav: any;
  rootPage:any; //feb 5th changed to any from rootPage:any HomePage;
                // this will keep us from sending the user to the homepage
                // as soon as they open the app

  pages: Array<{title: string, component: any, icon: string}>;
  
    constructor(public platform: Platform, 
      public statusBar: StatusBar, 
      private splashScreen: SplashScreen, public authprovider: AuthProvider,public afAuth: AngularFireAuth) {
      this.initializeApp();

      
      const authObserver = afAuth.authState.subscribe( user =>{

        if (user)  {
          this.rootPage = HomePage;
          authObserver.unsubscribe();
        } else {
          this.rootPage = 'LoginPage';
          authObserver.unsubscribe();
        }
      
      
      });
      
     
      // feb 5 
      platform.ready().then(()=>{
        // can do higher level native execution we might need
        statusBar.styleDefault();
        splashScreen.hide();
      });
  
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomePage, icon: 'home'},
        { title: 'Newsfeed', component: NewsfeedPage, icon: 'paper' },
        //{ title: 'Events Attending', component: EventsAttendingPage, icon: 'bookmarks' },
        { title: 'Messaging', component: MessagingPage, icon: 'chatbubbles' },
        //{ title: 'Friends', component: FriendsPage, icon: 'contacts' },
        { title: 'My Events', component: MyEventsPage, icon: 'calendar' },
        { title: 'My Profile', component: MyProfilePage, icon: 'contact' },
        { title: 'Picture', component: AddPicPage, icon: 'ios-camera' },
        { title: 'Add An Event', component: AddEventPage, icon: 'add-circle' },
        // { title: 'Registration', component: RegistrationPage, icon: 'heart' },
        { title: 'Kid Tracker', component: TrackerPage, icon: 'pin' },
        { title: 'Kids Account', component: KidsaccountPage, icon: 'body' },
        // { title: 'Logout', component: LogoutPage, icon: 'log-out' }

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

    logout() {
        this.authprovider.logout().then(()=>{
          this.navCtrl.push('LoginPage');
        })
       }

    // loadAll(){

    //   return Promise.resolve(this.pages);
    // }

    



  }