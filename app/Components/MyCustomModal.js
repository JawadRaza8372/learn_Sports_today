import React from 'react'
import { View, Modal ,Text ,TouchableOpacity } from 'react-native'
import Sreen from './Sreen'
import {useDimensions} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';

const MyCustomModal = ({show,close,children}) => {
    const dimension1= useDimensions().screen.height;

    return (
        <Modal         
        animationType="slide"
        visible={show}
        transparent={true}
        onRequestClose={close}
        style={{height:dimension1/2}}
>    
     <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center'}}>
    <View style={{
            width:'100%',
            height: dimension1/2,backgroundColor:'white',opacity:1}}>
            <Sreen styles={{display:"flex",alignItems:"center",flexDirection:"column",borderTopLeftRadius:30,borderTopRightRadius:30,padding:10}}>
            <View style={{width:"100%",display:"flex",alignItems:"flex-end",padding:10}}>
            <TouchableOpacity onPress={close}>
            <MaterialCommunityIcons name="close-circle" size={34} color="white" />
            </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{display:"flex",alignItems:"center",flexDirection:"column",borderTopLeftRadius:30,borderTopRightRadius:30,padding:10}}>
            {children}
            </ScrollView>
            

</Sreen>
    </View>
  </View>        
            </Modal>
    )
}

export default MyCustomModal
