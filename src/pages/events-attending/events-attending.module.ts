import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsAttendingPage } from './events-attending';

@NgModule({
  declarations: [
    EventsAttendingPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsAttendingPage),
  ],
})
export class EventsAttendingPageModule {}
