import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'register.html',
})
export class RegisterPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  onSignup(form: NgForm){
    let loader = this.loadingCtrl.create({
      content: "Signin you up..."
    });
    let alert = this.alertCtrl.create({
      title: 'Error!',
      message: 'Email is already in use.',
      buttons: ['Ok']
    });
    let alert2 = this.alertCtrl.create({
      title: 'Error!',
      message: 'Error creating user.',
      buttons: ['Ok']
    });
    loader.present();
    this.authService.signup(form.value.email,form.value.password)
    .then(data => {
      console.log(data);
      loader.dismiss();
    }).catch(e => {
      loader.dismiss();
      console.log(e);
        if (e.code == 'auth/email-already-in-use'){
          alert.present();
        } else{
          alert2.present();
        }
    });
  }
}
