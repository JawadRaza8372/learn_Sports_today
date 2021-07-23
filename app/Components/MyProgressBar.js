import React from 'react'
import { View, Text, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const MyProgressBar = ({currentvalue,total,height,color1,color2}) => {
    let animatwidth=(currentvalue && total)?(currentvalue/total)*100:100
    let animatcolor=(color1 && color2 )?[color1,color2]:['#A143FF', '#348AFF'];
    let animatBorderColor=(color1)?color1:'#A143FF';
    return (
        <View style={{height,borderColor:`${animatBorderColor}`,borderWidth:2,borderRadius:height,overflow:'hidden',marginLeft:2,marginRight:2}}>
           <LinearGradient
        colors={animatcolor}
        style={{height:'100%',width:`${animatwidth}%`,borderRadius:height,position:'absolute',left:0,top:0}}
      />
           
        </View>
    )
}

export default MyProgressBar
