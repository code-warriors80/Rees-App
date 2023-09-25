import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { AuthContext } from "../context/AuthContext";
import FIcon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";

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
    <SafeAreaView style={tailwind`bg-white flex-1`}>
      <View style={tailwind`my-25`}>
        <Text style={tailwind`text-center font-bold text-3xl`}>Hello</Text>
        <Text style={tailwind`text-center text-gray-500 text-sm my-5`}>
          Sign in to your account
        </Text>

        <View style={tailwind`w-full`}>
          <View style={tailwind`w-[90%] mx-auto`}>
            {checkValidEmail ? (
              <View
                style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto border border-red-500 rounded-full shadow my-2 flex-row items-center gap-2`}
              >
                <FIcon name="user" size={15} color="red" />
                <TextInput
                  placeholder="email"
                  style={tailwind`text-xs flex-1 text-red-500`}
                  value={email}
                  onChangeText={(text) => handelCheckEmail(text)}
                />
              </View>
            ) : (
              <View
                style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2`}
              >
                <FIcon name="user" size={15} color="gray" />
                <TextInput
                  placeholder="email"
                  style={tailwind`text-xs flex-1 text-gray-500`}
                  value={email}
                  onChangeText={(text) => handelCheckEmail(text)}
                />
              </View>
            )}

            {checkValidPassword ? (
              <View
                style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto border border-red-500 rounded-full shadow my-2 flex-row items-center gap-2`}
              >
                <FIcon name="lock" size={15} color="red" />
                <TextInput
                  placeholder="Password"
                  style={tailwind`text-xs flex-1 text-red-500`}
                  value={password}
                  onChangeText={(text) => handelCheckPassword(text)}
                  secureTextEntry={passwordSecure}
                />

                <TouchableOpacity onPress={seePassword}>
                  <FIcon name="eye" size={15} color="red" />
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={tailwind`w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2`}
              >
                <FIcon name="lock" size={15} color="gray" />
                <TextInput
                  placeholder="Password"
                  style={tailwind`text-xs flex-1`}
                  value={password}
                  onChangeText={(text) => handelCheckPassword(text)}
                  secureTextEntry={passwordSecure}
                />

                <TouchableOpacity onPress={seePassword}>
                  <FIcon name="eye" size={15} color="gray" />
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate("Reset-Password")}
              style={tailwind`my-2`}
            >
              <Text style={tailwind`text-right text-gray-500 text-xs mr-8`}>
                Forgot your password?
              </Text>
            </TouchableOpacity>

            {email == "" ||
            password == "" ||
            checkValidEmail == true ||
            checkValidPassword == true ? (
              <TouchableOpacity
                disabled
                style={tailwind`w-[90%] p-2 px-5 bg-[#F39300] mx-auto rounded-full shadow mt-3 py-4`}
                onPress={() => login(email, password)}
              >
                <Text style={tailwind`text-center text-white font-bold`}>
                  Login
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={tailwind`w-[90%] p-2 px-5 bg-[#F39300] mx-auto rounded-full shadow mt-3 py-4`}
                onPress={() => login(email, password)}
              >
                <Text style={tailwind`text-center text-white font-bold`}>
                  Login
                </Text>
              </TouchableOpacity>
            )}
            <Text style={tailwind`text-center text-xs mt-2 text-red-500`}>
              {autherror}
            </Text>

            <View>
              <View
                style={tailwind`flex-row items-center justify-center gap-1 mt-4`}
              >
                <Text style={tailwind`text-center text-gray-500 text-xs`}>
                  New To Our App
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={tailwind`text-xs text-[#F39300]`}>Register</Text>
                </TouchableOpacity>
              </View>

              <Text style={tailwind`text-center text-gray-500 text-xs my-4`}>
                Or
              </Text>
              <View
                style={tailwind`flex-row items-center justify-center gap-5`}
              >
                <TouchableOpacity
                  style={tailwind`bg-blue-500 p-3 rounded-full`}
                >
                  <FIcon name="facebook" size={18} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={tailwind`bg-blue-400 p-3 rounded-full`}
                >
                  <FIcon name="twitter" size={18} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={tailwind`bg-[#FA5758] p-3 rounded-full`}
                >
                  <FIcon name="instagram" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
