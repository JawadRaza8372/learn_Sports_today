import React,{useState} from 'react'
import { SafeAreaView,StyleSheet,View,Text,Platform,StatusBar} from 'react-native'
import {useDimensions} from "@react-native-community/hooks";
import Sreen from "../Components/Sreen"
import Avatar from '../Components/Avatar';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MyCustomModal from '../Components/MyCustomModal';
import ModalItem from '../Components/ModalItem';
import BoxWithContent from "../Components/BoxWithContent"
import MyStreaks from '../Components/MyStreaks';
import MyloadingBar from '../Components/MyloadingBar';

const ProflePage = ({navigation}) => {
  const [daymodal, setdaymodal] = useState(false)
  const [daymodalText, setdaymodaltext] = useState("today")

    const dimension= useDimensions().screen.width;
    const dimension1= useDimensions().screen.height;

    let textupdatefunction=(mytext)=>{
      setdaymodaltext(`${mytext}`);
      setdaymodal(false);

    }
    return (<>
            <SafeAreaView style={styles.contan}>
<View style={{width:"100%",height:dimension1/4,overflow:"hidden"}}>
<Sreen styles={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",borderBottomLeftRadius:40,borderBottomRightRadius:40}}>
<>
<View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",width:"100%",marginBottom:10}}>
<Avatar size={38} imglink='https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png' alt="img"/>
<Text style={{color:"white",fontSize:20}}>Hi, Name</Text>
</View>
<View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",width:"100%"}}>
<Text style={{color:"white",fontSize:30,textTransform:'capitalize'}}>{daymodalText}</Text>
<TouchableOpacity onPress={()=>setdaymodal(true)}>
<View style={{width:110,display:'flex',flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"white",padding:5,borderRadius:50}}>
  <Text style={{fontSize:18,textTransform:'capitalize'}}>{daymodalText}</Text>
  <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
</View>
</TouchableOpacity>
</View>
</>
</Sreen>
</View>
<ScrollView>
<View style={{padding:20,height:'100%',display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
<BoxWithContent title="Streaks">
<MyStreaks text1="16 July" text2="23 July" currentvalue={6} total={7} height={30}/>
<MyStreaks text1="16 July" text2="23 July" currentvalue={6} total={7} height={30}/>
<MyStreaks text1="16 July" text2="23 July" currentvalue={6} total={7} height={30}/>
<MyStreaks text1="16 July" text2="23 July" currentvalue={6} total={7} height={30}/>
<MyStreaks text1="16 July" text2="23 July" currentvalue={6} total={7} height={30}/>
<MyStreaks text1="16 July" text2="23 July" currentvalue={6} total={7} height={30}/>
<MyStreaks text1="16 July" text2="23 July" currentvalue={6} total={7} height={30}/>
<MyStreaks text1="16 July" text2="23 July" currentvalue={6} total={7} height={30}/>

</BoxWithContent>

<BoxWithContent title="Competition">



</BoxWithContent>
</View>
</ScrollView>


        
             
            </SafeAreaView>
     <MyCustomModal show={daymodal} close={()=>setdaymodal(false)}>
     <ModalItem title='today' updateFunction={textupdatefunction}/>
      <ModalItem title='weekly' updateFunction={textupdatefunction}/>
      <ModalItem title='monthly' updateFunction={textupdatefunction}/>
      <ModalItem title='yearly' updateFunction={textupdatefunction}/>
     </MyCustomModal>
       </>
    )
}
const styles = StyleSheet.create({
    contan: {
      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,
      flex: 1,
      justifyContent:'flex-start',
      backgroundColor:"#F4F4F4"
    },
    box: {
      width: 300,
      height: 30,
      marginVertical: 20,
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 7.0,
    }
  });
export default ProflePage
