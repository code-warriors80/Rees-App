import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, {useState, useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'twrnc'
import FIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'

export default function LoginScreen() {
  // context value is passed on the login button
  const { login, autherror } = useContext(AuthContext);
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
    <SafeAreaView style={tailwind`flex-1`}>
        <View style={tailwind`p-10`}>
          <Image source={require('../assets/logo.png')} style={tailwind`w-70 h-50 mx-auto`}/>
        </View>
      <View style={tailwind`flex-1 bg-white rounded-t-[50px] shadow-2xl py-10`}>
        <View style={tailwind`w-full bg-white rounded-t-[50px]`}>
          <View style={tailwind`w-[90%] mx-auto`}>

              <View
                style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2 ${checkValidEmail ? 'border border-red-500' : ''}`}
              >
                <FIcon name="user" size={15} color={checkValidEmail ? "red" : "gray"} />
                <TextInput
                  placeholder="email"
                  style={tailwind`text-xs flex-1 ${checkValidEmail ? 'text-red-500' : 'text-gray-500'}`}
                  value={email}
                  onChangeText={(text) => handelCheckEmail(text)}
                />
              </View>

              <View style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2 ${checkValidPassword ? 'border border-red-500' : ''}`}>
                <FIcon name="lock" size={15} color={checkValidPassword ? "red" : "gray"} />
                <TextInput placeholder="Password" style={tailwind`text-xs flex-1  ${checkValidPassword ? 'text-red-500' : 'text-gray-500'}`}
                  value={password}
                  onChangeText={(text) => handelCheckPassword(text)}
                  secureTextEntry={passwordSecure}
                />

                <TouchableOpacity onPress={seePassword}>
                  <FIcon name="eye" size={15} color={checkValidPassword ? "red" : "gray"}/>
                </TouchableOpacity>
              </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Reset-Password")}
              style={tailwind`my-2`}
            >
              <Text style={tailwind`text-right text-gray-500 text-xs mr-8`}>
                Forgot your password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={email == '' || password == '' || setCheckValidEmail == true ||  setCheckValidPassword == true ? true : false} style={tailwind`w-[90%] p-2 px-5 bg-[#F39300] mx-auto rounded-full shadow mt-2 py-4`}
                        onPress={() => login(email, password)}>
                            <Text style={tailwind`text-center text-white font-bold`}>Login</Text>
            </TouchableOpacity>

                    <View>
                        <View style={tailwind`flex-row items-center justify-center gap-1 mt-4`}>
                            <Text style={tailwind`text-center text-gray-500 text-xs`}>New To Our App</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={tailwind`text-xs text-[#F39300]`}>Register</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>  
            </View>
          </View>
    </SafeAreaView>
  );
}
