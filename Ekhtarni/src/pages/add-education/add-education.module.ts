import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEducationPage } from './add-education';

@NgModule({
  declarations: [
    AddEducationPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEducationPage),
  ],
})
export class AddEducationPageModule {}
