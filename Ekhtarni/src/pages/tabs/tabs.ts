import { NewsDetailsPage } from './../news-details/news-details';
import { CoursesPage } from './../courses/courses';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewsDetailsPage;
  tab3Root = CoursesPage;
  

  constructor() {

  }
}
