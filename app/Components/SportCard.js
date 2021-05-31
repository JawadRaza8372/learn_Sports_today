import React from 'react'
import { View,Text, Image,TouchableWithoutFeedback} from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons";

const SportCard = ({item,select,dimension,onClick}) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>

        <View style={{
            backgroundColor:'#FFFFFF',justifyContent:"center",alignContent:"center",
            borderRadius: 5,
            height: (dimension/2)-15,
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 30,
            paddingBottom: 30,
            marginLeft: 25,
            marginRight: 25, }}>
            <View   style={{display:"flex",flexDirection:"row",marginTop:3,marginBottom:10}}>
            <View style={{marginRight:"auto"}}>
          <MaterialCommunityIcons name="trophy-award" size={32} color={(item.status)?"#FFBA00":"#FFFFFF"} />
        </View>
          <View style={{marginLeft:"auto"}}>
          <MaterialCommunityIcons name="check-circle" size={32} color={select && (select.title === item.title)?"green":"#FFFFFF"} />
          </View></View>
   <Image style={{width:"100%",height:"70%",marginBottom:20}} source={{uri:`${item.imagelink}`}}/>
           <Text style={{fontSize: 30,fontWeight:"bold"}}>{item.title}</Text>
           <Text style={{fontSize: 14,color:"grey"}}>{item.subtitle}</Text>
  
        </View></TouchableWithoutFeedback>
    )
}

export default SportCard
