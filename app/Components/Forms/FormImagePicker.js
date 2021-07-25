import React from 'react'
import { View, Text } from 'react-native'
import { useFormikContext } from "formik";
import InputImageWithResult from '../InputImageWithResult';
import ErrorMessage from './ErrorMessage';

const FormImagePicker = ({iconName,name}) => {
    const { setFieldTouched,setFieldValue, handleChange, errors, touched,values } = useFormikContext();
const imageUris = values[name];
const handleRemove=(uri)=>{
    setFieldValue(name,imageUris.filter((imageUri)=>imageUri!==uri));

  }
  const handleAdd=(uri)=>{
    setFieldValue(name,[...imageUris,uri]);
    }
    return (
      <>
            <InputImageWithResult iconName={iconName} imagesValue={imageUris} addImage={handleAdd} removeImage={handleRemove} />
            <ErrorMessage visible={touched[name]} error={errors[name]}/>
      </>
    )
}

export default FormImagePicker
