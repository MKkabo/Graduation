import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddExperiencePage } from './add-experience';

@NgModule({
  declarations: [
    AddExperiencePage,
  ],
  imports: [
    IonicPageModule.forChild(AddExperiencePage),
  ],
})
export class AddExperiencePageModule {}
