import { TabsPage } from './../tabs/tabs';
import { DbProvider } from './../../providers/db/db';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  profile: any;
  interests = [
    {
      val: 'Buisness',
      isChecked: false
    },
    {
      val: 'Finance',
      isChecked: false
    },
    {
      val: 'Information System',
      isChecked: false
    },
    {
      val: 'ERP',
      isChecked: false
    },
    {
      val: 'Web-Development',
      isChecked: false
    },
    {
      val: 'Security',
      isChecked: false
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DbProvider, private store: StoreProvider) {
    this.profile = navParams.get('profile');
    this.interests = (<any[]>this.interests).map(item => {
      if((<any[]>this.profile.interests).indexOf(item.val)) {
        item.isChecked = true;
      }
      return item;
    })
    console.log('from edit page', this.profile);
  }

  submitForm(f) {
    console.log(f.value);
    let interests = this.interests.filter(it => it.isChecked).map(it => it.val).join(',');
    let profile = {
      'user_id': this.store.getUserId(),
      'first_name': f.value.first_name,
      'last_name': f.value.last_name,
      'address': f.value.address,
      'birthdate': f.value.birthdate,
      'featured_skills': f.value.featured_skills,
      'phone': f.value.phone,
      'interests': interests,
    }

    this.db.updateProfile(profile).subscribe(result => {
      // Go To profile Page
      this.navCtrl.setRoot(TabsPage);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
