/**
 * @format
 */

 import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {name as appName} from './app.json';
import AppNavigator from './src/AppNavigator';
import reducer from './src/reducers/index';

const store = createStore(reducer);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Allie',
        'Gator',
        'Lizzie',
      ],
      currentFriends: [
        'Alex'
      ],
    }
  }

  addFriend = (index) => {
    // ...
  }

  render() {
    return (
      <Provider store={ store }>
        <AppNavigator
          screenProps={ {
            currentFriends: this.state.currentFriends,
            possibleFriends: this.state.possibleFriends,
            addFriend: this.addFriend,
          } }
        />
      </Provider>
    );
  }
}



AppRegistry.registerComponent(appName, () => App);
