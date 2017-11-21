import { Component } from '@angular/core';

import { MessagingPage } from '../messaging/messaging';
import { AddEventPage } from '../add-event/add-event';
import { HomePage } from '../home/home';
import { MyProfilePage } from '../my-profile/my-profile'; 

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagingPage;
  tab3Root = AddEventPage;
  tab4Root = MyProfilePage;

  constructor() {

  }
}
