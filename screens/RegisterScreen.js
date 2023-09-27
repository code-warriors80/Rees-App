import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useContext, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'twrnc'
import FIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
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
    <SafeAreaView style={tailwind`bg-white flex-1`}>
        <View style={tailwind`my-15`}>
            <Text style={tailwind`text-center font-bold text-2xl`}>Create account</Text>

            <View style={tailwind`w-full`}>
                <View style={tailwind`w-[90%] mt-7 mx-auto`}>
                    {checkValidUsername ? (
                        <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full border border-red-500 shadow my-2 flex-row items-center gap-2`}>
                            <FIcon name='user' size={15} color='red'/>
                            <TextInput placeholder='Username' style={tailwind`text-xs flex-1 text-red-500`} value={username} onChangeText={(text) => handelCheckUsername(text)}/>
                        </View>
                    ): (
                        <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2`}>
                            <FIcon name='user' size={15} color='gray'/>
                            <TextInput placeholder='Username' style={tailwind`text-xs flex-1`} value={username} onChangeText={(text) => handelCheckUsername(text)}/>
                        </View>
                    )}

                    {checkValidEmail ? (
                        <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto border border-red-500 rounded-full shadow my-2 flex-row items-center gap-2`}>
                            <FIcon name='mail' size={15} color='red'/>
                            <TextInput placeholder='Email' style={tailwind`text-xs flex-1 text-red-500`} value={email} onChangeText={text => handelCheckEmail(text)}/>
                        </View>
                    ) : (
                        <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2`}>
                            <FIcon name='mail' size={15} color='gray'/>
                            <TextInput placeholder='Email' style={tailwind`text-xs flex-1`} value={email} onChangeText={text => handelCheckEmail(text)}/>
                        </View>
                    )}


                    {checkValidMobile ? (
                        <View style={tailwind`w-[90%] p-3 px-5 bg-white border border-red-500 mx-auto rounded-full shadow my-2 flex-row items-center gap-2`}>
                            <FIcon name='phone' size={15} color='red'/>
                            <TextInput placeholder='Mobile' style={tailwind`text-xs flex-1 text-red-500`} keyboardType='numeric' value={mobile} onChangeText={(text) => handelCheckMobile(text)}/>
                        </View>
                    ) : (
                        <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2`}>
                            <FIcon name='phone' size={15} color='gray'/>
                            <TextInput placeholder='Mobile' style={tailwind`text-xs flex-1`} keyboardType='numeric' value={mobile} onChangeText={(text) => handelCheckMobile(text)}/>
                        </View>
                    )}

                    {checkValidPassword ? (
                        <View style={tailwind`w-[90%] p-3 px-5 bg-white border border-red-500 mx-auto rounded-full shadow my-2 flex-row items-center gap-2`}>
                            <FIcon name='lock' size={15} color='red'/>
                            <TextInput placeholder='Password' style={tailwind`text-xs flex-1 text-red-500`} secureTextEntry={passwordSecure} value={password} onChangeText={(text) => handelCheckPassword(text)}/>
                            <TouchableOpacity onPress={seePassword}>
                                <FIcon name='eye' size={15} color='red'/>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2`}>
                            <FIcon name='lock' size={15} color='gray'/>
                            <TextInput placeholder='Password' style={tailwind`text-xs flex-1`} secureTextEntry={passwordSecure} value={password} onChangeText={(text) => handelCheckPassword(text)}/>
                            <TouchableOpacity onPress={seePassword}>
                                <FIcon name='eye' size={15} color='gray'/>
                            </TouchableOpacity>
                        </View>
                    )}


                    <TouchableOpacity style={tailwind`my-2`}>
                        <Text style={tailwind`text-right text-gray-500 text-xs mr-8`}>Forgot your password?</Text>
                    </TouchableOpacity>

                    {username == '' || email == '' || mobile == '' || password == '' || setCheckValidUsername == true || setCheckValidEmail == true || setCheckValidMobile == true || setCheckValidPassword == true ? 
                    (
                        <TouchableOpacity disabled style={tailwind`w-[90%] p-2 px-5 bg-[#F39300] mx-auto rounded-full shadow mt-3 py-4`}>
                            <Text style={tailwind`text-center text-white font-bold`}>Create Account</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={tailwind`w-[90%] p-2 px-5 bg-[#F39300] mx-auto rounded-full shadow mt-3 py-4`} onPress={() => register(username, email, mobile, password)}>
                            <Text style={tailwind`text-center text-white font-bold`}>Create Account</Text>
                        </TouchableOpacity>
                    )}


                    <View>

                        <View style={tailwind`flex-row items-center justify-center gap-1 mt-4`}>
                            <Text style={tailwind`text-center text-gray-500 text-xs`}>Aleady Have An Account</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={tailwind`text-xs text-[#F39300]`}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={tailwind`text-center text-gray-500 text-xs my-4`}>Or</Text>
                        <View style={tailwind`flex-row items-center justify-center gap-5`}>
                            <TouchableOpacity style={tailwind`bg-blue-500 p-3 rounded-full`}>
                                <FIcon name='facebook' size={18} color='white'/>
                            </TouchableOpacity>
                            <TouchableOpacity style={tailwind`bg-blue-400 p-3 rounded-full`}>
                                <FIcon name='twitter' size={18} color='white'/>
                            </TouchableOpacity>
                            <TouchableOpacity style={tailwind`bg-[#FA5758] p-3 rounded-full`}>
                                <FIcon name='instagram' size={18} color='white'/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>  
            </View>
        </View>
    </SafeAreaView>
  )
}