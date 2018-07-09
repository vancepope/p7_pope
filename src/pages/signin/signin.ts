import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {DisplayPage} from '../display/display';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {
  public myStyles: Object = {showEmail: false};
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }
  pickPizza(){
    this.navCtrl.push(DisplayPage);
    }
  onSignin(form: NgForm){
    let loader = this.loadingCtrl.create({
      content: "Signin you in..."
    });
    this.authService.signin(form.value.email, form.value.password)
    .then(() =>{
      console.log("User is now signed in");
      loader.present();
      loader.dismiss();
    }).catch(error => {
      let err = this.alertCtrl.create({
        title: 'Error!',
        message: error,
        buttons: ['Ok']
      })
      err.present();
    });
    loader.dismiss();
  }
}
