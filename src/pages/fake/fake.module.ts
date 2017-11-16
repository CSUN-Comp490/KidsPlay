import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FakePage } from './fake';

@NgModule({
  declarations: [
    FakePage,
  ],
  imports: [
    IonicPageModule.forChild(FakePage),
  ],
})
export class FakePageModule {}
