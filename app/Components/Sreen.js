import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import {useDimensions} from "@react-native-community/hooks";
const Sreen = ({styles,children}) => {
    const dimension= useDimensions().screen.width;
    const dimension1= useDimensions().screen.height;

    return (
        <LinearGradient
        colors={['#A143FF', '#348AFF']}
        style={[{height:dimension1,flex:1},styles]}
      >
          {children}
      </LinearGradient>
    )
}

export default Sreen
