// Results React Component contain dropdown list and translate Results
import React, { Component } from 'react';
import {View} from 'react-native';
import Keyword from './Keyword/Keyword.js';
import TranslateResult from './Translate/TranslateResult.js';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View className="results-container">
        <View className="keyword-item"><Keyword keywords={this.props.keywords} /></View>
        {/*<View className="results-item"><TranslateResult keywords={this.props.keywords} /></View>*/}
      </View>
    )
  }
}

export default Results;