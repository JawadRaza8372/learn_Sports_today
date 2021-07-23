import React from 'react'
import { View, Text } from 'react-native'
import MyProgressBar from './MyProgressBar'

const MyStreaks = ({text1,text2,currentvalue,total,height}) => {
    return (
        <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:'space-evenly',alignItems:"center",marginTop:7,marginBottom:7}}>
        <View style={{width:'20%'}}>
        <Text style={{fontSize:15}}>{text1}</Text>

        </View>
        <View style={{width:'60%'}}>
        <MyProgressBar currentvalue={currentvalue} total={total} height={height}/>

            </View>
            <View style={{width:'20%'}}>
            <Text style={{fontSize:15}}>{text2}</Text>

            </View>
        </View>
    )
}

export default MyStreaks
