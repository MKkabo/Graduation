import { DbProvider } from './../../providers/db/db';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';



@IonicPage()
@Component({
  selector: 'page-edit-experience',
  templateUrl: 'edit-experience.html',
})
export class EditExperiencePage {
  experience: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private store: StoreProvider,
    private db: DbProvider) {
    this.experience = navParams.get('experience');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditExperiencePage');
  }
  submitForm(f) {
    // f.value['user_id'] = this.store.getUserId();
    // console.log(f.value);
    this.db.editExperience(this.experience.id, f.value).subscribe(res => {
      console.log(res);
      this.navCtrl.setRoot(TabsPage);
    })
  }
}
