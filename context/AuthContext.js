import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../constant/config";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [autherror, setAuthError] = useState('')
    const [userInfo, setUserInfo] = useState(null);
    

    // This is your register script
    const register = async (username, email, mobile, password) => {
            try {
               await axios.post(`${BASE_URL}/register`, {
                username,
                email,
                mobile,
                address: 'samaru',
                password,
              });
            } catch (error) {
              console.error('Registration failed:', error.response ? error.response.data : error.message);
            }
    }


    // This is your login script
    const login = async (email, password) => {
        if(email == 'test@gmail.com' && password == 'Incorrect1$')
        {
            setUserToken('user3465vcf')
            AsyncStorage.setItem('UserToken: ', 'user3465vcf')
        }
            // await axios.post(`${BASE_URL}/login`, {
            //   email,
            //   password
            // }).then((res) => {
            //     let userInfo = res.data.token
            //     setUserInfo(userInfo)
            //     setUserToken(userInfo.data.token)

            //     AsyncStorage.setItem('UserInfo: ', JSON.stringify(userInfo))
            //     AsyncStorage.setItem('UserToken: ', userInfo.data.token)
            // }).catch((error) => {
            //     setAuthError('Login failed:', error.response ? error.response.data : error.message)
            // });

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
        <AuthContext.Provider value={{login, logout, register, userInfo, autherror, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )

}