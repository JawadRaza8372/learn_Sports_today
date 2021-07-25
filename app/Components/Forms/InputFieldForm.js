import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import TextInputwithIcon from "../TextInputwithIcon"
import InputField from "../InputField";
function InputFieldForm({iconName,name,placeholder, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
    <InputField iconName={iconName} placeholder={placeholder} onBlur={()=>{setFieldTouched(name)}}   onChangeText={handleChange(name)} {...otherProps}/>
        <ErrorMessage visible={touched[name]} error={errors[name]}/>
     
    </>
  );
}

export default InputFieldForm;