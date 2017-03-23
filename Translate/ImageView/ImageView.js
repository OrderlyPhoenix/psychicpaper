import React, {Component} from 'react';
import {Image, View} from 'react-native';

// ImageView Component only contains imageURL
// Using Stateless style
// Expect App.js pass imageURL data to ImageView
const ImageView = (props) => {
  const image = props.imgURL.toString();
  return (
    <View className="image-view-container">
      <Image className="image-view" source={{uri: image}} style={{width: 200, height: 200}}/>
    </View>
  )
};

export default ImageView;