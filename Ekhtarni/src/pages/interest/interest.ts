import { LoginPage } from './../login/login';
import { StoreProvider } from './../../providers/store/store';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';



@IonicPage()
@Component({
  selector: 'page-interest',
  templateUrl: 'interest.html',
})
export class InterestPage {
  image: any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider, public store: StoreProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestPage');
  }


  submitForm(data) {
    // let { value } = data;
    // console.log(this.form);
    let interests = this.interests.filter(it => it.isChecked).map(it => it.val).join(',');

    const fd = new FormData();
    fd.append('user_id', this.store.getUserId());
    fd.append('image', this.image);
    fd.append('first_name', data.value.first_name);
    fd.append('last_name', data.value.last_name);
    fd.append('address', data.value.address);
    fd.append('birthdate', data.value.birthdate);
    fd.append('featured_skills', data.value.featured_skills);
    fd.append('phone', data.value.phone);
    fd.append('interests', interests);
    let profile = {
      'image': this.image,
      'first_name': data.value.first_name,
      'last_name': data.value.last_name,
      'address': data.value.address,
      'birthdate': data.value.birthdate,
      'featured_skills': data.value.featured_skills,
      'phone': data.value.phone,
      'interests': interests,
    }

    this.db.completeProfile(fd).subscribe(res => {
      console.log(fd);
      console.log(profile);
      if (res['success'] === true) {
        this.navCtrl.setRoot(LoginPage);
      }
    })
  }

  choosePhoto(event) {
    this.image = event.target.files[0];
  }


}
