import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupchattPage } from './groupchatt';

@NgModule({
  declarations: [
    GroupchattPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupchattPage),
  ],
})
export class GroupchattPageModule {}
