import { DbProvider } from './../../providers/db/db';
import { StoreProvider } from './../../providers/store/store';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {
  rating: number = 5;
  description: string = '';
  course: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events,
    private store: StoreProvider,
    private db: DbProvider) {
    this.course = navParams.get('course');
    events.subscribe('star-rating:changed', (starRating) => {
      this.rating = starRating;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }



  submitRate() {

    let rate = {
      user_id: this.store.getUserId(),
      course_id: this.course.id,
      rate: this.rating,
      description: this.description
    }
    console.log(rate);
    this.db.rateCourse(rate).subscribe(() => {
      this.navCtrl.pop();
    })
  }



}
