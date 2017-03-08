import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Render = ({children, onPress, buttomStyle, textStyle}) => {
  return (
    <TouchableOpacity style={buttomStyle} onPress={onPress}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Render;
