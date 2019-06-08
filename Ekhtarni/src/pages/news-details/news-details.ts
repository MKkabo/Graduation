import { DbProvider } from './../../providers/db/db';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {

      newsfeeds:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider) {
  }



  ionViewDidLoad() {
    console.log('Welcome to newsfeeds');
    this.db.getNewsfeed().subscribe(res => {
      console.log(res);
      if (res['success'] === true) {
        this.newsfeeds = res['newsfeeds'];
      }
    })
  }
  onLoad(newsfeed:any){

    this.navCtrl.push(newsfeed,{
      newsfeed: newsfeed
    });
  }


}
