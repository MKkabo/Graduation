import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CDetailsPage } from './c-details';

@NgModule({
  declarations: [
    CDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CDetailsPage),
  ],
})
export class CDetailsPageModule {}
