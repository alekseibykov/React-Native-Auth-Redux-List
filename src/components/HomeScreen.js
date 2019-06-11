import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from 'react-native-firebase';
import { Header, Button } from './common';
import LoginForm from './LoginForm';

class HomeScreen extends Component {
  constructor(props) {
    super();
    this.state = { loggedIn: null, privet: 1 };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      console.log('Mounting...');
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  

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
