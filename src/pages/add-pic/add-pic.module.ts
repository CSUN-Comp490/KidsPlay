import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPicPage } from './add-pic';

@NgModule({
  declarations: [
    AddPicPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPicPage),
  ],
})
export class AddPicPageModule {}
