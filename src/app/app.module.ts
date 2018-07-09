import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { DisplayPage } from '../pages/display/display';
import { SigninPage } from '../pages/signin/signin';
import { UsersService } from '../services/users';
import { AuthService } from '../services/auth';
import { RegisterPage } from '../pages/register/register';
import { ThankyouPage } from '../pages/thankyou/thankyou';

@NgModule({
  declarations: [
    MyApp,
    DisplayPage,
    SigninPage,
    RegisterPage,
    ThankyouPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DisplayPage,
    RegisterPage,
    ThankyouPage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersService,
    AuthService
  ]
})
export class AppModule {}
