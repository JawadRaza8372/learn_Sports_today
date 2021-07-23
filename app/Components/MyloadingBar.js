import React,{useState,useEffect,useRef} from 'react'
import { View, Text,Animated } from 'react-native'

const MyloadingBar = ({step,steps,height,color,borderColor}) => {
      let [animatwidth,setanimatwidth]=useState(0);
      let animatedvalue=useRef(new Animated.Value(-1000)).current;
      let reactive=useRef(new Animated.Value(-1000)).current;
      useEffect(() => {
          Animated.timing(animatedvalue,{
              toValue:reactive,
              duration:300,
              useNativeDriver:true,
          }).start()
      }, [])
useEffect(() => {
    let newwidth=-animatwidth+animatwidth*(step/steps)

    reactive.setValue(newwidth)
}, [step,animatwidth])

        return (
            <View style={{height,borderColor:`${borderColor}`,borderWidth:2,borderRadius:height,overflow:'hidden',marginLeft:2,marginRight:2}}>
               <Animated.View
               onLayout={e=>setanimatwidth(e.nativeEvent.layout.width)}
            style={{height:'100%',width:`100%`,backgroundColor:`${color}`,borderRadius:height,position:'absolute',left:0,top:0,transform:[{translateX:animatedvalue}]}}
          />
               
            </View>
    )
}

export default MyloadingBar
