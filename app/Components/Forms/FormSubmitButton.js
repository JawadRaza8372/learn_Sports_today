import React from 'react'
import { View, Text } from 'react-native'
import { useFormikContext } from "formik";
import MyButton from '../MyButton';

const FormSubmitButton = ({title}) => {
    const { handleSubmit } = useFormikContext();

    return (<>
        <View style={{marginTop:15}}/>
      <MyButton  onPress={handleSubmit} varient="white"><Text>{title}</Text></MyButton>
    </>)
}

export default FormSubmitButton
