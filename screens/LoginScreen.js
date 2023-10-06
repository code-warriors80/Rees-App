import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, {useState, useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {tailwind_classes} from '../styles/styles'

// TAILWIND
import tailwind from 'twrnc'

// ICON
import FIcon from 'react-native-vector-icons/Feather'

// NAVIGATION
import { useNavigation } from '@react-navigation/native'

// CONTEXT
import { AuthContext } from '../context/AuthContext'

export default function LoginScreen() {
  // context value is passed on the login button
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();
  const [passwordSecure, setPasswordSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);

  const handelCheckEmail = (text) => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmail(text);
    if (text == "") {
      setCheckValidEmail(false);
    } else {
      if (re.test(text)) {
        setCheckValidEmail(false);
      } else {
        setCheckValidEmail(true);
      }
    }
  };

  const handelCheckPassword = (text) => {
    setPassword(text);
    if (text == "") {
      return setCheckValidPassword(false);
    } else {
      if (text.length < 8) {
        return setCheckValidPassword(true);
      }

      // Check if the password contains at least one uppercase letter
      if (!/[A-Z]/.test(text)) {
        return setCheckValidPassword(true);
      }

      // Check if the password contains at least one lowercase letter
      if (!/[a-z]/.test(text)) {
        return setCheckValidPassword(true);
      }

      // Check if the password contains at least one number
      if (!/[0-9]/.test(text)) {
        return setCheckValidPassword(true);
      }

      // Check if the password contains at least one special character
      if (!/[$@$!%*?&]/.test(text)) {
        return setCheckValidPassword(true);
      }

      if (/\s/.test(text)) {
        return setCheckValidPassword(true);
      }

      return setCheckValidPassword(false);
    }
  };

  const seePassword = () => {
    if (passwordSecure == true) {
      setPasswordSecure(false);
    } else {
      setPasswordSecure(true);
    }
  };
  return (
    <SafeAreaView style={tailwind`${tailwind_classes[1].safe_area}`}>
        <View style={tailwind`p-10`}>
          <Image source={require('../assets/logo.png')} style={tailwind`${tailwind_classes[0].frm_img}`}/>
        </View>
      <View style={tailwind`${tailwind_classes[0].frm_box}`}>
        <View style={tailwind`w-full bg-white rounded-t-[50px] pt-10`}>
          <View style={tailwind`w-[90%] mx-auto`}>

                <View style={tailwind`${tailwind_classes[0].frm_view} ${checkValidEmail ? `${tailwind_classes[0].frm_viewerr}` : ''}`}>
                    <FIcon name='mail' size={15} color={checkValidEmail ? 'red' : 'gray'}/>
                    <TextInput placeholder='Email' style={tailwind`${tailwind_classes[0].frm_input} ${checkValidEmail ? `${tailwind_classes[0].frm_input_err}` : ''}`} value={email} onChangeText={text => handelCheckEmail(text)}/>
                </View>

                <View style={tailwind`${tailwind_classes[0].frm_view} ${checkValidPassword ? `${tailwind_classes[0].frm_viewerr}` : ''}`}>
                    <FIcon name='lock' size={15} color={checkValidPassword ? 'red' : 'gray'}/>
                    <TextInput placeholder='Password' style={tailwind`${tailwind_classes[0].frm_input} ${checkValidPassword ? `${tailwind_classes[0].frm_input_err}` : ''}`} secureTextEntry={passwordSecure} value={password} onChangeText={(text) => handelCheckPassword(text)}/>
                    <TouchableOpacity onPress={seePassword}>
                      <FIcon name='eye' size={15} color={checkValidPassword ? 'red' : 'gray'}/>
                    </TouchableOpacity>
                </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Reset-Password")}
              style={tailwind`my-2`}
            >
              <Text style={tailwind`${tailwind_classes[0].frm_txt_1}`}>
                Forgot your password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={email == '' || password == '' || setCheckValidEmail == true ||  setCheckValidPassword == true ? true : false} 
            style={tailwind`${tailwind_classes[0].frm_buttons}`} 
                        onPress={() => login(email, password)}>
                            <Text style={tailwind`${tailwind_classes[0].frm_buttons_txt}`}>Login</Text>
            </TouchableOpacity>

                    <View>
                        <View style={tailwind`${tailwind_classes[0].frm_nav}`}>
                            <Text style={tailwind`${tailwind_classes[0].frm_txt_2}`}>New To Our App</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={tailwind`${tailwind_classes[0].frm_nav_txt}`}>Register</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>  
            </View>
          </View>
    </SafeAreaView>
  );
}
