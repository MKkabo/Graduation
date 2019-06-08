import { DbProvider } from './../../providers/db/db';
import { RatePage } from './../rate/rate';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-c-details',
  templateUrl: 'c-details.html',
})
export class CDetailsPage {
  course: any;
  randRate: number | string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DbProvider) {
    this.course = navParams.get('course');
    this.db.getCourseRate(this.course.id).subscribe(res => {
      this.randRate = res['rate'];
    })
    // this.randRate =  (Math.random() * 5).toFixed(1);
  }
  
  ionViewDidLoad() {
    this.course = this.navParams.get('course');
  }

  rate(){

    this.navCtrl.push(RatePage, {
      course: this.course
    });

  }
}
