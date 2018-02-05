import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { Welcome } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = Welcome;

  constructor(platform: Platform,
    private push: Push,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      this.pushPlugin()
      // Okay, so the platform is ready and our plugins are available.

      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  pushPlugin() {
    let options: any = {
      android: {
        senderID: 950783427743
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {
      console.log('Received a notification', notification);
      alert("notification arrived : " + JSON.stringify(notification));
    });

    pushObject.on('registration').subscribe((registration: any) => {
      alert("Device registered")
      console.log('Device registered', registration)
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
