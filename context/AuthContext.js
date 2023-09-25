import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../constant/config";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [autherror, setAuthError] = useState('')

    const register = (username, email, mobile, password) => {
        console.log(username, email, mobile, password);
    }

    // const YourOTPComponent = (mobile) => {
    //     const [otp, setOtp] = useState('');
      
    //     const handleSendOTP = async () => {
    //       try {
    //         // Call your server to send OTP
    //         const response = await axios.post('http://your-server-url/send-otp', {
    //           mobile,
    //         });
    //         Alert.alert('OTP Sent!', 'Check your phone for the OTP.');
    //       } catch (error) {
    //         console.error('Error sending OTP:', error);
    //       }
    //     };
    // }

    // const handleVerifyOTP = () => {
    //     // Implement OTP verification logic here
    //     // Compare otp with the user-entered OTP and take appropriate action
    // };

    const login = (email, password) => {
        setIsLoading(true)
        let emailval = 'muctarmohammed07@gmail.com'
        let passwordval = 'Incorrect1$'

        // axios.post(`${BASE_URL}`, {
        //     email, password
        // }).then(res => {
        //     console.log(res.data);
        // }).catch(e => {
        //     console.log(`login error ${e}`);
        // })

        if(email === emailval && password === passwordval)
        {
            setUserToken('ioiojlkad');
            setIsLoading(false)
            AsyncStorage.setItem('userToken', 'ioiojlkad')
        }
        else
        {
            return setAuthError('incorrect email or password');
        }

        setTimeout(() => {
            setAuthError('')
        }, 5000)
    }



    const logout = () => {
        setUserToken(null)
        setIsLoading(false)
        AsyncStorage.removeItem('userToken')
    }

    const isLoggedIn = async () => {
        try {
            let userToken = await AsyncStorage.getItem('userItem')
        }
        catch(e)
        {
            setIsLoading(true)
            console.log(`isLogged in error ${e}`);
            setUserToken(userToken)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return(
        <AuthContext.Provider value={{login, logout, register ,autherror, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}