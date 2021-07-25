import React,{useState,useEffect,useCallback} from 'react'
import { View, Text,Image } from 'react-native'
import {bgColor} from "../TextData"
import { MaterialCommunityIcons} from "@expo/vector-icons";
import Mytext from '../Components/Mytext';
import Sreen from '../Components/Sreen';


const Splashscreen = ({navigation}) => {
   

    const [newName, setnewName] = useState("");

    const names=[{line:"."},{line:".."},{line:"..."}];
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index].line);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 1000);
        return () => clearInterval(intervalID);
    }, [shuffle])
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
          }, 4000);
       
    }, [])
    return (
       
        
      
         <Sreen styles={{justifyContent:"center",alignContent:"center"}}>
         <MaterialCommunityIcons style={{alignSelf:"center"}} name='compass-outline' color="white" size={68} />
<Mytext tec="Learn Today" style={{color:`white`,marginLeft:"auto",marginRight:"auto",textTransform:"capitalize", fontWeight: "bold"}}></Mytext>
 
         </Sreen>   
    )
}

export default Splashscreen
