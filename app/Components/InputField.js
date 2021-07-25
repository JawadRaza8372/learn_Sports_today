import React from 'react'
import { View, TextInput } from 'react-native'
import { MaterialCommunityIcons} from "@expo/vector-icons";

const InputField = ({iconName,placeholder,onBlur,onChangeText,...otherProps}) => {
    return (
        <View style={{width:'90%',height:50,borderWidth:2,borderColor:'white',borderRadius:25,marginTop:25,display:'flex',overflow:"hidden",flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{marginLeft:10,marginRight:10,width:'7%'}}>
        <MaterialCommunityIcons name={`${iconName}`} size={24} color="white" />
        </View>
        <View style={{marginRight:10,width:'93%',height:'100%'}}>

            <TextInput  placeholder={`${placeholder}`} onBlur={onBlur} onChangeText={onChangeText} placeholderTextColor="white" style={{height:'100%',color:"white"}} {...otherProps}/>
        </View>
        </View>
    )
}

export default InputField
