import { EditExperiencePage } from './../edit-experience/edit-experience';
import { AddEducationPage } from './../add-education/add-education';
import { AddExperiencePage } from './../add-experience/add-experience';
import { EditProfilePage } from './../edit-profile/edit-profile';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { EditEducationPage } from '../edit-education/edit-education';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class profilePage {
  user: any;
  experience: any;
  education: any;
  interests: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider) {
  }

  ionViewDidLoad() {
    this.db.getProfile().subscribe(res => {
      console.log(res);
      if (res['success'] === true) {
        this.user = res['profile'];
      }
    })

    this.db.getExperience().subscribe(res => {
      console.log('experience', res);
      this.experience = res['experiences'];
    })


    this.db.getEducation().subscribe(res => {
      console.log('education', res);
      this.education = res['educations'];
    })

    // this.user = this.db.getUserData();
    // this.interests = this.user.interests;
    // console.log('ionViewDidLoad ProfilePage');
  }


  goToEditPage() {
    this.navCtrl.push(EditProfilePage, {
      profile: this.user
    })
  }

  goToAddExperience() {
    this.navCtrl.push(AddExperiencePage);
  }

  goToAddEducation() {
    this.navCtrl.push(AddEducationPage)
  }

  goToEditEducation(edu) {
    this.navCtrl.push(EditEducationPage, {
      education: edu
    })
  }
  goToEditExperience(exp) {
    this.navCtrl.push(EditExperiencePage, {
      experience: exp
    })
  }

}
