import { StoreProvider } from './../../providers/store/store';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DbProvider } from '../../providers/db/db';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // username: any;
  // password: any;
  error: any;
  constructor(public navCtrl: NavController, public forgotCtrl: AlertController, public toastCtrl: ToastController, public db: DbProvider, private store: StoreProvider) {

  }

  register() {
    this.navCtrl.setRoot(RegisterPage);
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

  submitForm(data) {
    let { email, password } = data.value;
    this.db.login(email, password).subscribe(res => {
      console.log(res);
      if (res['success'] === true) {
        let { id } = res['user'];
        this.error = false;
        this.store.setUser(id);
        // Store Image and name
        this.db.getProfile().subscribe(result => {
          let name = (`${result['profile']['first_name']} ${result['profile']['last_name']}`);
          let image = result['profile']['image'];
          this.store.setUserData({ name, image });
          this.store.emitState();
          // setTimeout(() => {
          this.navCtrl.setRoot(TabsPage);
          // }, 1500);
        })
      } else {
        this.error = true;
      }
    });








    
    // let result = this.db.login(username, password)
    // if (!result.length) {
    //   this.error = true;
    // } else {
    //   this.error = false;
    //   localStorage.setItem("user", JSON.stringify(result[0]));
    //   localStorage.setItem("loggedIN", "true");
    //   this.navCtrl.setRoot(TabsPage);
    // }

  }

}
