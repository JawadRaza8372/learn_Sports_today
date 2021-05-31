import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,Platform,StatusBar,ScrollView,TouchableOpacity, Image, TouchableWithoutFeedback} from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons";
import MyButton from "./MyButton"
import Sreen from "./Sreen"
const WelScrnTemplate = ({dimension,maintitle,subtitle,onClick,children}) => {
    return (
        <SafeAreaView style={styles.contan}>
      <Sreen styles={{justifyContent:"center",alignContent:"center"}}>
      <>
      <View style={{width:'90%',alignSelf:"center",marginTop:40,marginBottom:30}}>
        <Text style={{textTransform:"capitalize",fontSize:24,color:"white",fontWeight:"bold",marginBottom:15}}>{maintitle}</Text>
        <Text style={{textTransform:"capitalize",fontSize:15,color:"white"}}>{subtitle}</Text>

      </View>
      <View style={{height:dimension/2,width:'90%',alignItems:"center",alignSelf:"center",marginTop:20,marginBottom:50}}>
     {
         children
     }
      </View>
      <View style={{justifyContent:"center",alignSelf:"center",width:'100%'}}>
      <MyButton onPress={onClick} varient="white">
      <MaterialCommunityIcons style={{alignSelf:"center"}} name='plus' color="black" size={30} />
      </MyButton>

      </View>
     </>
      </Sreen>

                         </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    contan: {
      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,
      flex: 1,
      justifyContent:'flex-start'
      
    }
  });
export default WelScrnTemplate
