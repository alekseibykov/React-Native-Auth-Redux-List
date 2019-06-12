import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import { Button, Card, CardSection } from './common';
import { connect } from 'react-redux';

class ContentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { show: null };
  }

  onPressButton(item) {
    this.setState({ show: item.id })
  }

  renderDescription(item) {
    if (this.state.show === item.id) {
      return <Text>{item.description}</Text>;
    }
    return null;
  }

  render() {
    // console.log(this.props.content.default);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          extraData={this.state}
          data={this.props.content.default}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity onPress={() => this.onPressButton(item)}>
                <Text>
                  {item.title}
                </Text>
              </TouchableOpacity>
              {this.renderDescription(item)}
            </View>
          )}
          keyExtractor={(item, index) => 'item' + item.id}
        />

        <Button style={{ height: 70 }} onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { content } = state
  return { content }
};

export default connect(mapStateToProps)(ContentScreen);
