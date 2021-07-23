import React,{useState,useEffect,useRef} from 'react';
import {useDimensions} from "@react-native-community/hooks";
import WelScrnTemplate from '../Components/WelScrnTemplate';
import { ScrollView,View,Text,TextInput } from 'react-native';

function TimePickScreen({navigation}) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const dimension= useDimensions().screen.height;
  const dimensionwidth= useDimensions().screen.width;
console.log(hours)
console.log(minutes)

    return (<>
<WelScrnTemplate dimension={dimension} maintitle="Pick A Time" subtitle="You’ll Get Reminder To Do Your Sport At The Choose Time" onClick={()=>{navigation.navigate("Welcome3");console.log('add button Clicked');}}>
<View style={{backgroundColor:'#FFFFFF', display: 'flex',height:'100%',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',borderRadius: 5,width:dimensionwidth-40,padding:10}}>
<View style={{display:'flex',flexDirection:"row"}}>
<TextInput placeholder="Hours" keyboardType='number-pad' style={{width:60,borderColor:"black",borderWidth:1,padding:10}} maxLength={2} onChangeText={(text)=>setHours(text)}/>
<Text style={{fontSize:40,marginLeft:10,marginRight:10}}>:</Text>
<TextInput placeholder="Minutes" keyboardType='number-pad' style={{width:70,borderColor:"black",borderWidth:1,padding:10}} maxLength={2} onChangeText={(text)=>setMinutes(text)}/>

</View>

            </View>
</WelScrnTemplate>
</>
        );
}
export default TimePickScreen;