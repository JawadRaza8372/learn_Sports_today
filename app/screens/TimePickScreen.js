import React,{useState,useEffect,useRef} from 'react';
import {useDimensions} from "@react-native-community/hooks";
import Carousel from 'react-native-snap-carousel';
import {itemdata} from '../TextData'
import SportCard from '../Components/SportCard';
import WelScrnTemplate from '../Components/WelScrnTemplate';
import MyButton from '../Components/MyButton';

function TimePickScreen() {
  const dimension= useDimensions().screen.height;
  const dimensionwidth= useDimensions().screen.width;
  const [selected, setselected] = useState(null)
const c=useRef(null)
const [shows, setshows] = useState(false)
    return (<>
<WelScrnTemplate dimension={dimension} maintitle="Pick A Time" subtitle="You’ll Get Reminder To Do Your Sport At The Choose Time" onClick={()=>{navigation.navigate("Welcome1");console.log('add button Clicked');}}>

</WelScrnTemplate>
</>
        );
}
export default TimePickScreen;