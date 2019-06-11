import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './common';
import LoginForm from './LoginForm';

class HomeScreen extends Component {
  constructor(props) {
    super();
    this.state = { loggedIn: null, privet: 1 };
  }

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

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      console.log('Mounting...');
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });

    setTimeout(() => {
      this.setState({ privet: 2 });
      console.log('privet');
      console.log(this.state.loggedIn);
      console.log(user);
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }, 11000);
  }

  // async signOutUser() {
  //   try {
  //     await firebase.auth().signOut();
  //     // navigate('Auth');
  //     console.log('Succesfully logged out');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  signOutUser() {
    firebase.auth().signOut()
      .then(() => {
        console.log('Sign Out Done');
      });
  }

  renderMainScreen() {
    let self = this;
    if (this.state.loggedIn) {
      console.log('LOGGED IN');
      return (
        <Button style={{ height: 70 }} onPress={this.signOutUser}>
          Log Out
        </Button>
      );
    } else if (this.state.loggedIn === false) {
      console.log('NOT LOGGED IN');
      return (
        <LoginForm navigation={self.props.navigation} />
      );
    } else {
      return (
        <ActivityIndicator />
      );
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Authentication' />
        { this.renderMainScreen() }
      </View>
    );
  }
}

export default HomeScreen;
