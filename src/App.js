import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA3wlEyNLNiLQ0kJiGKTKalLUi_DwGRFTA",
      authDomain: "auth-e4bee.firebaseapp.com",
      databaseURL: "https://auth-e4bee.firebaseio.com",
      projectId: "auth-e4bee",
      storageBucket: "auth-e4bee.appspot.com",
      messagingSenderId: "365214593053",
      appId: "1:365214593053:web:abe7bf191a3c84ba"
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text>Hello</Text>
      </View>
    );
  }
}

export default App;
