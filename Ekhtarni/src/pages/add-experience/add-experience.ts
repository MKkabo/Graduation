import { TabsPage } from './../tabs/tabs';
import { StoreProvider } from './../../providers/store/store';
import { DbProvider } from './../../providers/db/db';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-experience',
  templateUrl: 'add-experience.html',
})
export class AddExperiencePage {
  dates = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DbProvider, private store: StoreProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExperiencePage');
  }

  setDate(key, value) {
    this.dates[key] = value;
  }
  submitForm(f) {
    console.log(f.value);
    f.value['user_id'] = this.store.getUserId();
    this.db.addExperience(f.value).subscribe(res => {
      console.log(res);
      this.navCtrl.setRoot(TabsPage);
    })
  }

}
