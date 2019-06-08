import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider) {
  }

  ionViewDidLoad() {
    this.db.getData().subscribe(data => {
      this.db.setData(data);
      // console.log(data);
    })
  }

  gotoRegister() {
    this.navCtrl.setRoot(LoginPage)
  }

}
