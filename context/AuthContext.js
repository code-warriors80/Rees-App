import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../constant/config";
import axios from "axios";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [autherror, setAuthError] = useState('')
    const [userInfo, setUserInfo] = useState(null);
    

    // This is your register script
    const register = async (username, email, mobile, password, navigation) => {
            axios.post(`${BASE_URL}/register`, {
                username,
                email,
                mobile,
                address: '',
                password,
            }).then(response => {
                //   console.log('Registration successful', response.data);
                  Alert.alert('Registration successful')
                  navigation.navigate('Login')
            }).catch((error) => {
                  // Handle error
                //   setAuthError(`Registration error ${error}`);
                //   setAuthError('Registration', 'Invalid credentials. Please try again.');
                  Alert.alert('Invalid credentials')
            });

            setTimeout(() => {
              setAuthError('')
            }, 5000)
    }


    // This is your login script
    const login = async (email, password) => {
        axios.post(`${BASE_URL}/login`, {
            email,
            password,
        })
          .then(response => {
            // Handle successful login
            // console.log('Login successful', response.data);
            let userInfo = response.data
            setUserInfo(userInfo)
            setUserToken(userInfo.token)
            console.log(userInfo);
            AsyncStorage.setItem('UserInfo: ', JSON.stringify(userInfo))
            AsyncStorage.setItem('UserToken: ', userInfo.token)
            // Navigate to the next screen or perform actions based on the response
        })
          .catch(error => {
            // Handle error
            // setAuthError(`Login error: ${error}`);
            // setAuthError('Login Failed', 'Invalid credentials. Please try again.');
            Alert.alert('Invalid credentials')
            
        });

            setTimeout(() => {
                    setAuthError('')
            }, 5000)
    }


    // This is your logout script
    const logout = () => {
        setUserToken(null)
        setIsLoading(false)
        AsyncStorage.removeItem('UserInfo')
        AsyncStorage.removeItem('UserToken')
    }

    const ChangePassword = (email, password, newPassword, navigation) => {
        axios.put(`${BASE_URL}/updatepassword`, {
            email,
            password,
            newPassword
        }).then(response => {
            //   console.log('Registration successful', response.data);
              Alert.alert('Password Reset successful')
              navigation.goBack()
        }).catch((error) => {
              // Handle error
            //   setAuthError(`Registration error ${error}`);
            //   setAuthError('Registration', 'Invalid credentials. Please try again.');
              Alert.alert('Invalid credentials')
        });
    }


    const isLoggedIn = async () => {
        try {
            setIsLoading(true)
            let userInfo = await AsyncStorage.getItem('UserInfo')
            let userToken = await AsyncStorage.getItem('UserToken')
            userInfo = JSON.stringify(userInfo)

            if(userInfo)
            {
                setUserInfo(userInfo)
                setUserToken(userToken)
            }
            setIsLoading(false)
        }
        catch(e)
        {
            console.log(`${e}`);
            
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return(
        <AuthContext.Provider value={{login, logout,  register, ChangePassword, userInfo, autherror, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )

}