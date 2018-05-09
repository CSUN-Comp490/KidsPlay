import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildtrackPage } from './childtrack';

@NgModule({
  declarations: [
    ChildtrackPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildtrackPage),
  ],
})
export class ChildtrackPageModule {}
