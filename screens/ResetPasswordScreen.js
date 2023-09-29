import {
  Alert,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import FIcon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import tailwind from "twrnc";
import { useIsFocused, useNavigation } from "@react-navigation/native";

export default function ResetPasswordScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidOtp, setIsValidOtp] = useState(false);
  const [passwordSecure, setPasswordSecure] = useState(true);

  useEffect(() => {
    if (isFocused) {
      setIsValidEmail(true);
      setIsValidPassword(true);
      setIsValidOtp(true);
    }
  }, [isFocused]);

  const doesPasswordMatch = confirmPassword === password;

  const handelCheckEmail = (text) => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmail(text);
    if (text == "") {
      setIsValidEmail(false);
    } else {
      if (re.test(text)) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    }
  };

  const handelCheckPassword = (text) => {
    setPassword(text);
    if (text == "") {
      setIsValidPassword(false);
    } else {
      if (text.length < 8) {
        return setIsValidPassword(false);
      }

      // Check if the password contains at least one uppercase letter
      if (!/[A-Z]/.test(text)) {
        return setIsValidPassword(false);
      }

      // Check if the password contains at least one lowercase letter
      if (!/[a-z]/.test(text)) {
        return setIsValidPassword(false);
      }

      // Check if the password contains at least one number
      if (!/[0-9]/.test(text)) {
        return setIsValidPassword(false);
      }

      // Check if the password contains at least one special character
      if (!/[$@$!%*?&]/.test(text)) {
        return setIsValidPassword(false);
      }

      if (/\s/.test(text)) {
        return setIsValidPassword(false);
      }

      return setIsValidPassword(true);
    }
  };

  const handelCheckOtp = (text) => {
    let isNumeric = /^[0-9]+$/;

    setOtp(text);
    if (text == "" || text.length < 6) {
      setIsValidOtp(false);
    } else {
      if (isNumeric.test(text)) {
        setIsValidOtp(true);
      } else {
        setIsValidEmail(false);
      }
    }
  };

  const handelRegister = () => {
    if (
      isValidEmail === false ||
      isValidPassword === false ||
      isValidOtp === false
    ) {
      Alert.alert("Please fill all fields correctly");
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={tailwind`bg-white flex-1`}>
      <View style={tailwind`flex-row items-center justify-between p-5`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tailwind`bg-white p-2 rounded-full shadow-lg`}
        >
          <FIcon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>

        {/* <Text style={tailwind`text-[16px] font-bold mx-auto`}>Profile</Text> */}
      </View>

        <View style={tailwind`my-10`}>
          <Text style={tailwind`text-center font-bold text-2xl`}>
            Reset Password
          </Text>

          <View style={tailwind`w-full`}>
            <View style={tailwind`w-[90%] mt-7 mx-auto`}>
              <View
                style={tailwind.style(
                  `w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2`,
                  {
                    border: !isValidEmail,
                    "border-red-500": !isValidEmail,
                  }
                )}
              >
                <FIcon
                  name="mail"
                  size={15}
                  color={isValidEmail ? "gray" : "red"}
                />
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={isValidEmail ? "gray" : "red"}
                  style={
                    isValidEmail
                      ? tailwind`text-xs flex-1`
                      : tailwind`text-xs flex-1 text-red-500`
                  }
                  value={email}
                  onChangeText={(text) => handelCheckEmail(text)}
                />
              </View>

              <View
                style={tailwind.style(
                  `w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2`,
                  {
                    border: !isValidPassword,
                    "border-red-500": !isValidPassword,
                  }
                )}
              >
                <FIcon
                  name="lock"
                  size={15}
                  color={!isValidPassword ? "red" : "gray"}
                />
                <TextInput
                  placeholder="Current Password"
                  placeholderTextColor={isValidPassword ? "gray" : "red"}
                  style={
                    isValidPassword
                      ? tailwind`text-xs flex-1`
                      : tailwind`text-xs flex-1 text-red-500`
                  }
                  secureTextEntry={passwordSecure}
                  value={password}
                  onChangeText={(text) => handelCheckPassword(text)}
                />
                <TouchableOpacity onPress={seePassword}>
                  <FIcon
                    name="eye"
                    size={15}
                    color={isValidPassword ? "gray" : "red"}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={tailwind.style(
                  `w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2`,
                  {
                    border: !doesPasswordMatch,
                    "border-red-500": !doesPasswordMatch,
                  }
                )}
              >
                <FIcon
                  name="lock"
                  size={15}
                  color={doesPasswordMatch ? "gray" : "red"}
                />
                <TextInput
                  placeholder="New Password"
                  placeholderTextColor={doesPasswordMatch ? "gray" : "red"}
                  style={
                    !doesPasswordMatch
                      ? tailwind`text-xs flex-1 text-red-500`
                      : tailwind`text-xs flex-1`
                  }
                  secureTextEntry={passwordSecure}
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                />
                <TouchableOpacity onPress={seePassword}>
                  <FIcon
                    name="eye"
                    size={15}
                    color={doesPasswordMatch ? "gray" : "red"}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={tailwind.style(
                  `w-[90%] p-3 px-5 bg-white mx-auto rounded-full shadow my-2 flex-row items-center gap-2`,
                  {
                    border: !isValidOtp,
                    "border-red-500": !isValidOtp,
                  }
                )}
              >
                <FIcon
                  name="key"
                  size={15}
                  color={isValidOtp ? "gray" : "red"}
                />
                <TextInput
                  placeholder="OTP"
                  placeholderTextColor={isValidOtp ? "gray" : "red"}
                  maxLength={6}
                  style={
                    isValidOtp
                      ? tailwind`text-xs flex-1`
                      : tailwind`text-xs flex-1 text-red-500`
                  }
                  keyboardType="numeric"
                  value={otp}
                  onChangeText={(text) => handelCheckOtp(text)}
                />
              </View>

              <TouchableOpacity
                disabled={
                  email.length === 0 ||
                  password.length === 0 ||
                  otp.length === 0
                }
                style={tailwind`w-[90%] p-2 px-5 bg-[#F39300] mx-auto rounded-full shadow mt-3 py-4`}
                onPress={handelRegister}
              >
                <Text style={tailwind`text-center text-white font-bold`}>
                  Reset Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
