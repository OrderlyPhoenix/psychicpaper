import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  CameraRoll,
  ScrollView,
  TouchableHighlight,
  ImagePickerIOS,
} from 'react-native';

export default class purple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      text: ''
    };

    this.sendText = this.sendText.bind(this);
    this.pickImage = this.pickImage.bind(this);
  }

  sendText() {
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

  pickImage() {
    ImagePickerIOS.openSelectDialog(
      {}, 
      imageUri => {this.setState({ image: imageUri }); console.log('IMAGE: ', this.state.image)}, 
      error => console.log(error)
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>Translate a Photo</Text>
        <Text style={styles.section}>Choose photo from URL</Text>
        <TextInput style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} placeholder="URL" />
        <Button title="Send URL" onPress={this.sendText} />
        <Text style={styles.section}>Choose photo from library</Text>
        <Button title="Open photo library" onPress={this.pickImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  section: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5
  },
    container: {
    flex: 1,
    // backgroundColor: '#1CABBD',
  }
});

AppRegistry.registerComponent('purple', () => purple);
