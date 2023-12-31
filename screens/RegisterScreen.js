import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, {useContext, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {tailwind_classes} from '../styles/styles'

// TAILWIND
import tailwind from 'twrnc'

// ICON
import FIcon from 'react-native-vector-icons/Feather'

// MAVIGATION
import { useNavigation } from '@react-navigation/native'

// CONTEXT
import { AuthContext } from '../context/AuthContext'

export default function RegisterScreen() {
    const {register} = useContext(AuthContext)
    const navigation = useNavigation()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState()
    const [password, setPassword] = useState('')
    const [checkValidUsername, setCheckValidUsername] = useState(false)
    const [checkValidEmail, setCheckValidEmail] = useState(false)
    const [checkValidMobile, setCheckValidMobile] = useState(false)
    const [checkValidPassword, setCheckValidPassword] = useState(false)
    const [passwordSecure, setPasswordSecure] = useState(true)

    const handelCheckUsername = (text) => {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        setUsername(text)
        if(text == '')
        {
            setCheckValidUsername(false)  
        }
        else
        {
            if (text.length < 3 || text.length > 15) {
                return setCheckValidUsername(true);
            }

            if (!usernameRegex.test(text)) {
                return setCheckValidUsername(false) ;
            }

            if (text.startsWith('_') || text.endsWith('_')) {
                return setCheckValidUsername(true);
            }

            return true
        }
    };

    const handelCheckEmail = (text) => {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        setEmail(text);
        if(text == '')
        {
            setCheckValidEmail(false)
        }
        else
        {
            if(re.test(text))
            {
                setCheckValidEmail(false)
            }
            else
            {
                setCheckValidEmail(true)
            }
        }
    };

    const handelCheckMobile = (text) => {
        const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{4})[- ]?(\d{4})$/;
        setMobile(text)

        if(text == '')
        {
            setCheckValidMobile(false)
        }
        else
        {
            if(phoneRegex.test(text))
            {
                setCheckValidMobile(false)
            }  
            else
            {
                setCheckValidMobile(true)
            }
        }
    };


    const handelCheckPassword = (text) => {
        setPassword(text)
        if(text == '')
        {
            setCheckValidPassword(false)
        }
        else
        {
            if (text.length < 8 ) {
                return setCheckValidPassword(true)
            }
            
              // Check if the password contains at least one uppercase letter
              if (!/[A-Z]/.test(text)) {
                return setCheckValidPassword(true)
              }
            
              // Check if the password contains at least one lowercase letter
              if (!/[a-z]/.test(text)) {
                return setCheckValidPassword(true)
              }
            
              // Check if the password contains at least one number
              if (!/[0-9]/.test(text)) {
                return setCheckValidPassword(true)
              }
            
              // Check if the password contains at least one special character
              if (!/[$@$!%*?&]/.test(text)) {
                return setCheckValidPassword(true)
              }

              if(/\s/.test(text))
              {
                return setCheckValidPassword(true)
              }

              return setCheckValidPassword(false)
        }
    };

    const seePassword = () => {
     if(passwordSecure == true){
         setPasswordSecure(false)
     }
     else
     {
         setPasswordSecure(true)
     }
    }
  return (
    <SafeAreaView style={tailwind`flex-1`}>
        <View style={tailwind`flex-row py-3`}>
            <Image source={require('../assets/logo.png')} style={tailwind`${tailwind_classes[0].frm_img}`}/>
        </View>
        <View style={tailwind`${tailwind_classes[0].frm_box}`}>
            <View style={tailwind`w-full`}>
                <View style={tailwind`w-[90%] my-3 mx-auto`}>
                        <View style={tailwind`${tailwind_classes[0].frm_view} ${checkValidUsername ? `${tailwind_classes[0].frm_viewerr}` : ''}`}>
                            <FIcon name='user' size={15} color={checkValidUsername ? 'red' : 'gray'}/>
                            <TextInput placeholder='Username' style={tailwind`${tailwind_classes[0].frm_input} ${checkValidUsername ? `${tailwind_classes[0].frm_input_err}` : ''}`} value={username} onChangeText={(text) => handelCheckUsername(text)}/>
                        </View>

                        <View style={tailwind`${tailwind_classes[0].frm_view} ${checkValidEmail ? `${tailwind_classes[0].frm_viewerr}` : ''}`}>
                            <FIcon name='mail' size={15} color={checkValidEmail ? 'red' : 'gray'}/>
                            <TextInput placeholder='Email' style={tailwind`${tailwind_classes[0].frm_input} ${checkValidEmail ? `${tailwind_classes[0].frm_input_err}` : ''}`} value={email} onChangeText={text => handelCheckEmail(text)}/>
                        </View>


                        <View style={tailwind`${tailwind_classes[0].frm_view} ${checkValidMobile ? `${tailwind_classes[0].frm_viewerr}` : ''}`}>
                            <FIcon name='phone' size={15} color={checkValidMobile ? 'red' : 'gray'}/>
                            <TextInput placeholder='Mobile' style={tailwind`${tailwind_classes[0].frm_input} ${checkValidMobile ? `${tailwind_classes[0].frm_input_err}` : ''}`} keyboardType='numeric' value={mobile} onChangeText={(text) => handelCheckMobile(text)}/>
                        </View>


                        <View style={tailwind`${tailwind_classes[0].frm_view} ${checkValidPassword ? `${tailwind_classes[0].frm_viewerr}` : ''}`}>
                            <FIcon name='lock' size={15} color={checkValidPassword ? 'red' : 'gray'}/>
                            <TextInput placeholder='Password' style={tailwind`${tailwind_classes[0].frm_input} ${checkValidPassword ? `${tailwind_classes[0].frm_input_err}` : ''}`} secureTextEntry={passwordSecure} value={password} onChangeText={(text) => handelCheckPassword(text)}/>
                            <TouchableOpacity onPress={seePassword}>
                                <FIcon name='eye' size={15} color={checkValidPassword ? 'red' : 'gray'}/>
                            </TouchableOpacity>
                        </View>


                    <TouchableOpacity disabled={username == '' || email == '' || mobile == '' 
                        || password == '' || setCheckValidUsername == true || setCheckValidEmail == true 
                        || setCheckValidMobile == true || setCheckValidPassword == true ? true : false} 
                        style={tailwind`${tailwind_classes[0].frm_buttons}`} 
                        onPress={() => register(username, email, mobile, password, navigation)}>

                        <Text style={tailwind`${tailwind_classes[0].frm_buttons_txt}`}>Create Account</Text>
                    </TouchableOpacity>

                    <View>

                        <View style={tailwind`${tailwind_classes[0].frm_nav}`}>
                            <Text style={tailwind`${tailwind_classes[0].frm_txt_2}`}>Aleady Have An Account</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={tailwind`${tailwind_classes[0].frm_nav_txt}`}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>  
            </View>
        </View>
    </SafeAreaView>
  )
}