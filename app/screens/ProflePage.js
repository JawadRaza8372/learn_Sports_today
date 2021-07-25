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
import Mytext from "../Components/Mytext"
import {itemdata} from '../TextData'

import {
  LineChart,
} from "expo-chart-kit";
import BoxWithContent2 from '../Components/BoxWithContent2';
import SportCard from '../Components/SportCard';
const ProflePage = ({navigation}) => {
  const [daymodal, setdaymodal] = useState(false)
  const [daymodalText, setdaymodaltext] = useState("today")

    const dimension= useDimensions().screen.width;
    const chartwidth= useDimensions().window.width;
    const chartwheight= useDimensions().window.height;

    const dimension1= useDimensions().screen.height;

    let textupdatefunction=(mytext)=>{
      setdaymodaltext(`${mytext}`);
      setdaymodal(false);

    }
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [ 20, 45, 28, 80, 99, 43 ]
      }]
    }
    const chartConfig = {
      backgroundGradientFrom: 'white',
      backgroundGradientTo: 'white',
      color: ()=>`black`
    }
    return (<>
            <SafeAreaView style={styles.contan}>
<View style={{width:"100%",height:dimension1/4,overflow:"hidden"}}>
<Sreen styles={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",borderBottomLeftRadius:40,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,borderBottomRightRadius:40}}>
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


<View style={{display:"flex",flexDirection:"row",alignItems:'center',justifyContent:"space-evenly",height:120,width:"100%"}}>
  <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"white",height:90,width:'45%',padding:10,borderRadius:10}}>
  <Text style={{fontSize:20,color:'black'}}>Your Goal</Text>
  <Text style={{fontSize:8}}>is almost there keep trying</Text>
  </View>
  <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"green",width:'45%',height:90,padding:10,borderRadius:10}}>
  <MaterialCommunityIcons name="flag" size={24} color="white" />
  <Text style={{fontSize:20,color:'white'}}>Ongoing</Text>

  </View>
  

</View>

<View style={{width:dimension-50,borderRadius:20,padding:5,backgroundColor:"white"}}>
<SportCard item={itemdata[3]} dimension={dimension1} onClick={()=>{console.log("touched")}}/>
</View>
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
<BoxWithContent2 title="Competition">
<LineChart
  data={data}
  width={chartwidth}
  height={chartwheight/2-10}
  chartConfig={chartConfig}
  
/>

</BoxWithContent2>

<View style={{display:"flex",flexDirection:"row",alignItems:'center',justifyContent:"space-evenly",height:120,width:"100%"}}>
  <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"white",width:'40%',padding:10,borderRadius:10}}>
  <Mytext tec="42.9%" style={{color:'black'}}/>
  <Text style={{fontSize:10}}>This week</Text>
  </View>
  <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"white",width:'40%',padding:10,borderRadius:10}}>
  <Mytext tec="12.5%" style={{color:'black'}}/>
  <Text style={{fontSize:10}}>Average</Text>

  </View>
  

</View>
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
