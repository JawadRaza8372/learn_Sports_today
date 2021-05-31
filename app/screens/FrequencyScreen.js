import React,{useState,useEffect,useRef} from 'react';
import {useDimensions} from "@react-native-community/hooks";
import WelScrnTemplate from '../Components/WelScrnTemplate';
import { View,Text,StyleSheet,FlatList} from 'react-native';
import {frequency, itemdata} from "../TextData"
import MyDayCards from '../Components/MyDayCards';

function FrequencyScreen({navigation}) {
  const dimension= useDimensions().screen.height;
  const dimensionwidth= useDimensions().screen.width;
  const [selected, setselected] = useState(null)
    return (
<WelScrnTemplate dimension={dimension} maintitle="Pick A Frequency" subtitle="Starting With 2-3 Times Per Week And Raises Your Success Goal"  onClick={()=>{navigation.navigate("Welcome2")}}>
<View style={{
            backgroundColor:'#FFFFFF', display: 'flex',height:'100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
            borderRadius: 5,width:dimensionwidth-40,
            padding:10
          }}>
             <FlatList
        data={frequency}
        keyExtractor={(item)=>id=item.id}
        renderItem={({item})=>{return ( <MyDayCards text={item.text} selected={selected} onClick={()=>setselected(item)}/>
)}}
        style={styles.container}
        contentContainerStyle={styles.list}
        numColumns={2}
        columnWrapperStyle={styles.column}
      />
        

            </View>
</WelScrnTemplate>
        );
}
const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: 10,
          paddingVertical:20,
          flexDirection: 'column',
        },
        list: {
          justifyContent:"space-evenly"
        },
        column: {
          flexShrink: 1,marginTop:15
        },
        card: {
          width: 100,
          margin: 20,backgroundColor:"blue"
        },
      });
      
export default FrequencyScreen;