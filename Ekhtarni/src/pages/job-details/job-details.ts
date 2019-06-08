import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-job-details',
  templateUrl: 'job-details.html',
})
export class JobDetailsPage {

  job: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.job = navParams.get('job');
  }

  ionViewDidLoad() {
    this.job = this.navParams.get('job');
  }

}
