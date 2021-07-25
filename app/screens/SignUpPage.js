import React,{useState,useEffect} from 'react'
import { SafeAreaView,StyleSheet,View,Text,Platform,StatusBar,ScrollView,TouchableOpacity,Alert, Image, TouchableWithoutFeedback} from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons";
import Sreen from "../Components/Sreen"
import InputField from '../Components/InputField';
import InputFieldImage from '../Components/InputFieldImage';
import Forms from '../Components/Forms/Forms';
import * as Yup from "yup";
import InputFieldForm from '../Components/Forms/InputFieldForm';
import FormSubmitButton from '../Components/Forms/FormSubmitButton';
import MyButton from '../Components/MyButton';
import * as ImagePicker from "expo-image-picker";
import FormImagePicker from '../Components/Forms/FormImagePicker';

const SignUpPage= ({navigation}) => {
    const [images, setimages] = useState(null)
 
  
    const validationSchema = Yup.object().shape({
        name:Yup.string().required().min(5).label("Name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
        confirm: Yup.string().required().min(4).label("Confirm"),
        images:Yup.array().min(1,"select atleast one image").max(1,"Only one image is allowed")
      });
      let onSubmitFun=(values)=>{
          if(values.password === values.confirm){
            console.log(values);
            navigation.navigate('Welcome')
          }
          else{
            alert("enter same password")
          }

      }
    return (
        <SafeAreaView style={styles.contan}>
        <Sreen styles={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:"center",paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0}}>
        <>
        <Text style={{fontSize:26,color:"white"}}>Sign Up</Text>
        <Forms
     initialValues={{name:"",email: "", password: "",confirm:"",images:[] }}
        onSubmit={onSubmitFun}
        validationSchema={validationSchema}
     >
      <InputFieldForm iconName="account" name="name" placeholder="Name" autoCompleteType="off" autoCorrect={false} autoCapitalize="none" />
      <InputFieldForm iconName="email" name="email" placeholder="Email" autoCompleteType="off" autoCorrect={false} autoCapitalize="none" />
      <InputFieldForm iconName="lock" name="password" placeholder="Password" secureTextEntry={true} autoCompleteType="off" autoCorrect={false} autoCapitalize="none" />
      <InputFieldForm iconName="lock" name="confirm" placeholder="Confirm Password" secureTextEntry={true} autoCompleteType="off" autoCorrect={false} autoCapitalize="none" />
    <FormImagePicker iconName='camera' name="images"/>
      <FormSubmitButton title="Sign Up"/>
     </Forms>


        
      
  <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
  <Text style={styles.underlinetext}>Already have an account !! Login</Text>
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
export default SignUpPage
