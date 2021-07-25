import React from 'react'
import { View, Text,TextInput,Button } from 'react-native'
import { Formik } from 'formik';

const Forms = ({ initialValues, onSubmit, validationSchema, children })=> {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => <>{children}</>}
      </Formik>
    );
  }
export default Forms
