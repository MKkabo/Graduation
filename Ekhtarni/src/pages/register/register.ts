import { StoreProvider } from './../../providers/store/store';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InterestPage } from '../interest/interest';
import { DbProvider } from '../../providers/db/db';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider, public store: StoreProvider) {
  }

  // register and go to home page
  register(data) {
    let { fullName, email, password } = data.value;
    this.db.register({ name: fullName, email, password }).subscribe(res => {
      if(res['success'] === true) {
        this.navCtrl.setRoot(InterestPage);
        console.log(res);
        this.store.setUser(res['user_id']);
      }
    })
    // this.db.setUser(data.value);
  }
  /**
   * @description Go to Login Page
   */
  login() {
    this.navCtrl.setRoot(LoginPage);
  }
}
