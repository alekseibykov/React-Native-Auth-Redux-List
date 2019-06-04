import React, { Component } from 'react';
import firebase from 'firebase';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email',
      password: 'Password'
    };
  }

  onPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });

    console.log(this.state.email);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button style={{ height: 70 }} onPress={this.onPress.bind(this)}>
          Log In
        </Button>
        <Button style={{ height: 70 }} onPress={() => navigate('Registration')}>
          Registation
        </Button>
      </View>
    );
  }
}

export default LoginForm;
