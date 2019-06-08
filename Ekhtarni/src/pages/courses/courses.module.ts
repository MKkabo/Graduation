import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursesPage } from './courses';

@NgModule({
  declarations: [
    CoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursesPage),
  ],
  schemas: 
  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoursesPageModule {}
