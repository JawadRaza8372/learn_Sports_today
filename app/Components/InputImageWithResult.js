import React from 'react'
import { View,ScrollView} from 'react-native'
import InputFieldImage from './InputFieldImage'
import ImageWithCross from './ImageWithCross';

const InputImageWithResult = ({iconName,imagesValue,addImage,removeImage}) => {
    return (
        <View style={{width:"90%"}}>
        <ScrollView horizontal  contentContainerStyle={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
            <InputFieldImage iconName={iconName} pressFunction={addImage}/>
            {(imagesValue && imagesValue.length !== 0) && imagesValue.map((res)=>(
                <ImageWithCross key={res} imglink={res} removeImage={removeImage}/>
            ))}
        </ScrollView>
        </View>
    )
}

export default InputImageWithResult
