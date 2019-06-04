import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class RegistrationScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>
          REGISTRATION
        </Text>
      </View>
    );
  }
}

export default RegistrationScreen;
