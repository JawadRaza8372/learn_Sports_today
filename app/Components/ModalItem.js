import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import {useDimensions} from "@react-native-community/hooks";
const ModalItem = ({title,updateFunction}) => {
    const dimension= useDimensions().screen.width;
    let textupdate=()=>{
        updateFunction(`${title}`)
    }
    return (
        <TouchableOpacity onPress={textupdate}>
        <View style={{padding:15,borderRadius:20,width:dimension-50,borderWidth:1,borderColor:'white',marginBottom:20}}>
        <Text style={{color:"white",fontSize:20,textTransform:'capitalize'}}>{title}</Text>
        </View>
        </TouchableOpacity>
        
    )
}

export default ModalItem
