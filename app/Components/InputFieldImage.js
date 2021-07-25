import React,{useEffect} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const InputFieldImage = ({iconName,pressFunction}) => {
    useEffect(() => {
        requestPermission();
      }, []);
    
      const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) alert("You need to enable permission to access the library.");
        if(granted)console.log("granted")
      };
    let pickImage=async()=>{
        const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled){
          console.log("here")
          pressFunction(result.uri)
      }
    }

    return (
        <TouchableOpacity onPress={pickImage} style={{width:90,height:90,borderWidth:2,borderColor:'white',borderRadius:25,marginTop:25,display:'flex',overflow:"hidden",flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <MaterialCommunityIcons name={`${iconName}`} size={38} color="white" />      
        </TouchableOpacity>
    )
}

export default InputFieldImage
