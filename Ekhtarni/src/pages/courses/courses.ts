import { DbProvider } from './../../providers/db/db';
import { CDetailsPage } from './../c-details/c-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
  courses: any;
  dates = {
    test: new Date('2018-07').toISOString()
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider) {



  }

  ionViewDidLoad() {
    console.log('welcome to courses');
    // this.db.getCourses().subscribe(res => {
    //   if (res['success'] === true) {
    //     this.courses = res['courses'];
    //   }
    // })
    this.loadCourses();
  }


  loadCourses() {
    this.db.getCourses().subscribe(res => {
      if (res['success'] === true) {
        this.courses = res['courses'];
      }
    })
  }

  onLoad(course: any) {
    this.navCtrl.push(CDetailsPage, {
      course: course
    });
  }

  search(event) {
    this.db.searchCourses(event).subscribe(res => {
      this.courses = res['courses'];
    })
  }

  cancelSearch() {
    this.loadCourses();
  }

  setDate(key, value) {
    this.dates[key] = value;
    console.log(this.dates);
  }

}
