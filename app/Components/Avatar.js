import React from 'react'
import { View, Text,Image } from 'react-native'

const Avatar = ({size,imglink,alt}) => {
    return (
        <View style={{height:size,width:size,borderRadius:size/2,overflow:'hidden',display:"flex",alignItems:"center",justifyContent:'center',backgroundColor:"white"}}>
         {imglink &&   <Image
        style={{width:"100%",height:"100%"}}
        source={{ uri: `${imglink}`}}
      />}
      {!imglink && <Text>{alt}</Text>}
        </View>
    )
}

export default Avatar
