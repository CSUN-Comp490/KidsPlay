import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabysitPage } from './babysit';

@NgModule({
  declarations: [
    BabysitPage,
  ],
  imports: [
    IonicPageModule.forChild(BabysitPage),
  ],
})
export class BabysitPageModule {}
