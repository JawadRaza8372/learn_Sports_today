import React from 'react'
import { View,TouchableOpacity,Image } from 'react-native'
import { MaterialCommunityIcons} from "@expo/vector-icons";

const ImageWithCross = ({imglink,removeImage}) => {
    return (
        <View style={{borderColor:'white',borderRadius:10,width:90,height:90,marginTop:25,borderWidth:1,marginLeft:5,marginRight:5}}>
        <View style={{position:"absolute",top:-15,right:-7,zIndex:1}}>
        <TouchableOpacity onPress={()=>removeImage(imglink)}>
        <MaterialCommunityIcons name="close-circle" size={34} color="white" />
        </TouchableOpacity>
        </View>
            <Image source={{uri:imglink}} style={{width:'100%',height:"100%",borderRadius:10}} />
        </View>  
    )
}

export default ImageWithCross
