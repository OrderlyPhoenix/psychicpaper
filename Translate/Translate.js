import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ImageView from './ImageView/ImageView.js';
import Results from './Results/Results.js';

class Translate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: [ { class: 'tiara',
        score: 0.761,
        type_hierarchy: '/headdress/tiara' },
        { class: 'headdress', score: 0.761 },
        { class: 'crown', score: 0.594 },
        { class: 'arm band', score: 0.59 },
        { class: 'circlet decorated band', score: 0.554 },
        { class: 'azure color', score: 0.89 },
        { class: 'indigo color', score: 0.725 } ]
    }
  }

  render() {
    return (
      <View className="translate-container">
        <View className="translate-header">
        <Text>translation results</Text>
        </View>
    <View className="translate-components">
      <View className="image-div">
        <ImageView imgURL={this.props.imgURL} />
      </View>
    <View className="results-div"><Results keywords={this.state.keywords}/></View>
    </View>
    </View>
    )
  }
}

export default Translate;