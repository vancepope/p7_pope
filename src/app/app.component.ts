import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { AuthService } from '../services/auth';
import { DisplayPage } from '../pages/display/display';
import { SigninPage } from '../pages/signin/signin';
import { RegisterPage } from '../pages/register/register';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;
  signinPage = SigninPage;
  registerPage = RegisterPage;
  displayPage = DisplayPage;
  isAuthenticated: boolean = false;
  @ViewChild('nav') nav: NavController;
  constructor(private menuCtrl: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService) {
    firebase.initializeApp({
      apiKey: "AIzaSyDe6sKl9BUydXf7H4sEj44SzM6PFogR4O0",
      authDomain: "p7pope.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged( user =>{
      if (user){
        this.isAuthenticated = true;
        this.rootPage = DisplayPage;
      } else {
        this.isAuthenticated = false;
        this.rootPage = SigninPage;
      }


    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}

