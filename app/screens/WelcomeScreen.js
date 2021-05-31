import React,{useState,useEffect,useRef} from 'react';
import {useDimensions} from "@react-native-community/hooks";
import Carousel from 'react-native-snap-carousel';
import {itemdata} from '../TextData'
import SportCard from '../Components/SportCard';
import WelScrnTemplate from '../Components/WelScrnTemplate';
function WelcomeScreen({navigation}) {
  const dimension= useDimensions().screen.height;
  const dimensionwidth= useDimensions().screen.width;
  const [selected, setselected] = useState(null)
const c=useRef(null)

    return (
<WelScrnTemplate dimension={dimension} maintitle="Pick A Sport" subtitle="Pick Your Sport And Feel Motivated Even Day And Even Time Your Streaks Go Up" onClick={()=>{navigation.navigate("Welcome1")}}>
<Carousel
                  layout={'stack'} layoutCardOffset={18}
                  data={itemdata}
                  ref={c}
              renderItem={({ item }) => (
  <SportCard item={item} select={selected} dimension={dimension} onClick={()=>{setselected(item)}}/>

          )}
          enableSnap={true}
          loop={true}
          loopClonesPerSide={itemdata.length}
                  itemWidth={dimensionwidth-30}
                  sliderWidth={dimensionwidth-50}
                  />
</WelScrnTemplate>
        );
}
export default WelcomeScreen;