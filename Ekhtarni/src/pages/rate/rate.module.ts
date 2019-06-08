import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatePage } from './rate';

@NgModule({
  declarations: [
    RatePage,
  ],
  imports: [
    IonicPageModule.forChild(RatePage),
  ],
  schemas: 
  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RatePageModule {}
