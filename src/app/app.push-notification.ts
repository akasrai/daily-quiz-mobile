import React, {Component} from 'react';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';

import {NOTIFICATION_TOPIC} from './app.notificaiton-topic';

export default class PushNotification extends Component {
  componentDidMount = () => {
    this.checkPermission();
    this.subscribeTopic();
  };

  subscribeTopic = () => {
    messaging().subscribeToTopic(NOTIFICATION_TOPIC.DAILY_QUIZ);
  };

  checkPermission = async () => {
    const enabled = await messaging().hasPermission();

    if (enabled) return this.getToken();

    return this.requestPermission();
  };

  getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');

    if (!fcmToken) {
      fcmToken = await messaging().getToken();

      if (fcmToken) await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  };

  requestPermission = async () => {
    try {
      await messaging().requestPermission();
      this.getToken();
    } catch (error) {
      console.log('permission rejected');
    }
  };

  render() {
    return null;
  }
}
