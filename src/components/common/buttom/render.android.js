import React from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';

const Render = ({text, onPress, buttomStyle, textStyle}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}
      background={TouchableNativeFeedback.SelectableBackground()} >
      <View style={buttomStyle}>
        <Text style={textStyle}>
          {text}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Render;
