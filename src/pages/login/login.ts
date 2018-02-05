import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var applozic: any;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  userId: string = '';
  password: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  // login() {
  //   // Your app login API web service call triggers
  //   var alUser = {
  //     'userId': this.userId,   //Replace it with the userId of the logged in user
  //     'password': this.password,  //Put password here
  //     'authenticationTypeId': 1,
  //     'applicationId': '3fcbc8461954c0a335a8c2fb883b816ba',  //replace "applozic-sample-app" with Application Key from Applozic Dashboard
  //     'deviceApnsType': 0    //Set 0 for Development and 1 for Distribution (Release)
  //   };

  //   applozic.login(alUser, function () {
  //     applozic.registerPushNotification(function () { }, function () { });
  //     applozic.launchChat(function () { }, function () { });
  //   }, function () { });
  //   //this.navCtrl.push(TabsPage, {}, {animate: false});
  // }

  login() {
    this.platform.ready().then(() => {
      let user = {
        "userId": "5a69ca66ebd8ff0bfa7d0009",
        "password": "5a69ca66ebd8ff0bfa7d0009",
        "authenticationTypeId": 1,
        "applicationId": "3fcbc8461954c0a335a8c2fb883b816ba",
        "deviceApnsType": 0,
        "displayName": "Pawan Pandey"
      }
      applozic.login(user, function () {
        applozic.registerPushNotification(function (data) {
          alert("data is : " + JSON.stringify(data))
        },
          function (error) { alert("error is : " + JSON.stringify(error)) });
        applozic.launchChat(function () {
          console.log("success");
        },
          function () { console.log("error"); });
      })
    })
  }

}

