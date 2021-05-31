import React from 'react'
import { View, Text,TouchableWithoutFeedback } from 'react-native'

const MyDayCards = ({text,selected,onClick}) => {
    return (        <TouchableWithoutFeedback onPress={onClick}>

<View style={{backgroundColor:(selected)?(selected.text=== text)?"green":"#F4F4F4":"#F4F4F4",marginHorizontal:10,borderColor:(selected)?(selected.text=== text)?'green':"#707070":'#707070',justifyContent:"center",alignContent:"center",height:90,width:122,borderRadius:20,borderWidth:(selected)?(selected.text=== text)?2:1:1}}><Text style={{fontSize:24,textAlign:"center",color:(selected)?(selected.text=== text)?'white':'black':'black'}}>{text}</Text></View>
    </TouchableWithoutFeedback>)
}

export default MyDayCards
