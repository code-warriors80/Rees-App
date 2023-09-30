import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useContext, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'twrnc'
import FIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'
import { Image } from 'react-native'

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
            <Image source={require('../assets/logo.png')} style={tailwind`w-70 h-50 mx-auto`}/>
        </View>
        <View style={tailwind`flex-1 bg-white rounded-t-[50px] shadow-2xl`}>
            <View style={tailwind`w-full`}>
                <View style={tailwind`w-[90%] my-3 mx-auto`}>
                        <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2 ${checkValidUsername ? 'border border-red-500' : ''}`}>
                            <FIcon name='user' size={15} color={checkValidUsername ? 'red' : 'gray'}/>
                            <TextInput placeholder='Username' style={tailwind`text-xs flex-1 ${checkValidUsername ? 'text-red-500' : 'text-gray-400'}`} value={username} onChangeText={(text) => handelCheckUsername(text)}/>
                        </View>

                        <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2 ${checkValidEmail ? 'border border-red-500' : ''}`}>
                            <FIcon name='mail' size={15} color={checkValidEmail ? 'red' : 'gray'}/>
                            <TextInput placeholder='Email' style={tailwind`text-xs flex-1 ${checkValidEmail ? 'text-red-500' : 'text-gray-400'}`} value={email} onChangeText={text => handelCheckEmail(text)}/>
                        </View>


                        <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2 ${checkValidMobile ? 'border border-red-500' : ''}`}>
                            <FIcon name='phone' size={15} color={checkValidMobile ? 'red' : 'gray'}/>
                            <TextInput placeholder='Mobile' style={tailwind`text-xs flex-1 ${checkValidMobile ? 'text-red-500' : 'text-gray-400'}`} keyboardType='numeric' value={mobile} onChangeText={(text) => handelCheckMobile(text)}/>
                        </View>


                        <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2 ${checkValidPassword ? ' border border-red-500' : ''}`}>
                            <FIcon name='lock' size={15} color={checkValidPassword ? 'red' : 'gray'}/>
                            <TextInput placeholder='Password' style={tailwind`text-xs flex-1 ${checkValidPassword ? 'text-red-500' : 'text-gray-400'}`} secureTextEntry={passwordSecure} value={password} onChangeText={(text) => handelCheckPassword(text)}/>
                            <TouchableOpacity onPress={seePassword}>
                                <FIcon name='eye' size={15} color={checkValidPassword ? 'red' : 'gray'}/>
                            </TouchableOpacity>
                        </View>


                    <TouchableOpacity style={tailwind`my-2`}>
                        <Text style={tailwind`text-right text-gray-500 text-xs mr-8`}>Forgot your password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity disabled={username == '' || email == '' || mobile == '' 
                        || password == '' || setCheckValidUsername == true || setCheckValidEmail == true 
                        || setCheckValidMobile == true || setCheckValidPassword == true ? true : false} 
                        style={tailwind`w-[90%] p-2 px-5 bg-[#F39300] mx-auto rounded-full shadow mt-1 py-4`} 
                        onPress={() => register(username, email, mobile, password, navigation)}>

                        <Text style={tailwind`text-center text-white font-bold`}>Create Account</Text>
                    </TouchableOpacity>

                    <View>

                        <View style={tailwind`flex-row items-center justify-center gap-1 mt-4`}>
                            <Text style={tailwind`text-center text-gray-500 text-xs`}>Aleady Have An Account</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={tailwind`text-xs text-[#F39300]`}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>  
            </View>
        </View>
    </SafeAreaView>
  )
}