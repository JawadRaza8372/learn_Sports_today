import { useDimensions } from '@react-native-community/hooks'
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const BoxWithContent = ({title,children}) => {
    let width=useDimensions().screen.width;
    let height=useDimensions().screen.height;

    return (
        <View style={{width:width-50,padding:20,height:height/2,borderRadius:20,backgroundColor:'white',overflow:"hidden",marginTop:10,marginBottom:10}}>
        <View style={{display:'flex',flexDirection:'row',padding:5,height:'12%'}}>
        <Text style={{fontSize:26,fontWeight:"bold"}}>{title}</Text>
        </View>
        <View style={{height:'88%',overflow:"hidden",padding:2,width:'100%'}}>
        <ScrollView contentContainerStyle={{width:"100%"}}>
        {children}
        </ScrollView>
           
        </View>
      
        </View>
    )
}

export default BoxWithContent
