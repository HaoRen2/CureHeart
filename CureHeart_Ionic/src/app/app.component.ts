import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;
import {Capacitor} from "@capacitor/core";
import {ActionPerformed, PushNotifications, PushNotificationSchema, Token} from "@capacitor/push-notifications";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
    if (Capacitor.platform !== 'web'){
      this.registerNotifications()
      this.addListeners()

    }
    }

   addListeners = async () => {
    await PushNotifications.addListener('registration', token => {
      console.info('Registration token: ', token.value);
    });

    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });

    await PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received: ', notification);
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
    });
  }

  registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }

    if (permStatus.receive === 'granted'){
      try {
        await PushNotifications.register()
      }catch (e){
        console.log(e)
      }
    }

  }

   getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    alert('delivered notifications' + JSON.stringify(notificationList) );
  }

}
