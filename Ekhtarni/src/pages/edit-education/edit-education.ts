import { TabsPage } from './../tabs/tabs';
import { DbProvider } from './../../providers/db/db';
import { StoreProvider } from './../../providers/store/store';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-edit-education',
  templateUrl: 'edit-education.html',
})
export class EditEducationPage {
  education: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: StoreProvider,
     private db: DbProvider) {
    this.education = navParams.get('education');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEducationPage');
  }

  submitForm(f) {
    // f.value['user_id'] = this.store.getUserId();
    // console.log(f.value);
    this.db.editEducation(this.education.id, f.value).subscribe(res => {
      console.log(res);
      this.navCtrl.setRoot(TabsPage);
    })
  }

}
