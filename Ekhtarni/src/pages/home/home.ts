import { PopoverComponent } from './../../components/popover/popover';
import { DbProvider } from './../../providers/db/db';
import { JobDetailsPage } from './../job-details/job-details';
import { Component } from '@angular/core';
import { NavController, App, NavParams, PopoverController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  jobDetailsPage = JobDetailsPage;
  jobs: any;
  image: any;

  constructor(public navCtrl: NavController,
    public app: App, public navParams: NavParams, public db: DbProvider, public popoverCtrl: PopoverController) {

  }


  ionViewDidLoad() {
    console.log('welcome to jobs');
    this.db.getJobs().subscribe(res => {
      console.log(res);
      if (res['success'] === true) {
        this.jobs = res['jobs'];
      }

    })
  }


  onLoad(job: any) {

    this.navCtrl.push(JobDetailsPage, {
      job: job
    });

  }


  async presentPopover(ev) {
    const popover = this.popoverCtrl.create(PopoverComponent,{
      
    });
    popover.present({
      ev: ev
    });
  }

}
