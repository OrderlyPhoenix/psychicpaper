import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';
import Translate from './Translate/Translate.js'

class purple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Photo URL'
    };

    this.sendPhoto = this.sendPhoto.bind(this);
    this.sendPhoto();
  }

  sendPhoto() {
    return fetch('http://127.0.0.1:8080/api/upload', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: this.state.text
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log('RESPONSE: ', responseJson);
    })
    .catch(err => console.log('error1!!: ', err));
  }

  render() {
    return (
      <View>
        <Text style={styles.main}>Translate a picture</Text>
        <TextInput style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
          <Button
            onPress={this.sendPhoto}
            title="Send"
          />
        <Translate />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 30,
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20
  }
});

AppRegistry.registerComponent('purple', () => purple);
