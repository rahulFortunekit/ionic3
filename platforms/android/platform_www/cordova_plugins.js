cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "com.applozic.phonegap.applozic",
    "file": "plugins/com.applozic.phonegap/www/applozic.js",
    "pluginId": "com.applozic.phonegap",
    "clobbers": [
      "applozic"
    ]
  },
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-console": "1.1.0",
  "cordova-plugin-device": "1.1.7",
  "cordova-plugin-splashscreen": "4.1.0",
  "cordova-plugin-statusbar": "2.4.1",
  "cordova-plugin-whitelist": "1.3.3",
  "ionic-plugin-keyboard": "2.2.1",
  "com.applozic.phonegap": "0.8.0",
  "phonegap-plugin-push": "2.1.3"
};
// BOTTOM OF METADATA
});