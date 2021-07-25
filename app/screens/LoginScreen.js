import React from 'react'
import { SafeAreaView,StyleSheet,Text,Platform,StatusBar,TouchableOpacity} from 'react-native';
import Sreen from "../Components/Sreen"
import Forms from '../Components/Forms/Forms';
import * as Yup from "yup";
import InputFieldForm from '../Components/Forms/InputFieldForm';
import FormSubmitButton from '../Components/Forms/FormSubmitButton';

const LoginScreen= ({navigation}) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  let onSubmitFun=(values)=>{
  console.log(values);
      navigation.navigate('Welcome')
  }
    return (
        <SafeAreaView style={styles.contan}>
      <Sreen styles={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:"center",paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0}}>
      <>
      <Text style={{fontSize:26,color:"white"}}>Login</Text>

     <Forms
     initialValues={{email: "", password: "" }}
        onSubmit={onSubmitFun}
        validationSchema={validationSchema}
     >
      <InputFieldForm iconName="account" name="email" placeholder="Email" autoCompleteType="off" autoCorrect={false} autoCapitalize="none" />
      <InputFieldForm iconName="lock" name="password" placeholder="Password" secureTextEntry={true} autoCompleteType="off" autoCorrect={false} autoCapitalize="none"/>
      <FormSubmitButton title="Login"/>
     </Forms>
   
<TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
<Text style={styles.underlinetext}>Don't Have an account !! Craete One</Text>
</TouchableOpacity>

     </>
      </Sreen>

                         </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    contan: {
      flex: 1,
      justifyContent:'flex-start'
      
    }
    ,underlinetext:{
        fontSize:18,
        margin:15,
        color:"white",
        textDecorationLine:'underline',
        textDecorationStyle:'solid'
    }
  });
export default LoginScreen
