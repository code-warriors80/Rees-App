import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../constant/config";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [autherror, setAuthError] = useState('')
    
    let emailval = 'muctarmohammed07@gmail.com'
    let passwordval = 'Incorrect1'

    const login = (email, password) => {

        // axios.post(`${BASE_URL}`, {
        //     email, password
        // }).then(res => {
        //     console.log(res.data);
        // }).catch(e => {
        //     console.log(`login error ${e}`);
        // })

        if(email == emailval && password == passwordval)
        {
            setUserToken('ioiojlkad');
            setIsLoading(false)
            AsyncStorage.setItem('userToken', 'ioiojlkad')
        }
        else
        {
            return setAuthError('incorrect email or password');
        }
    }

    setTimeout(() => {
        setAuthError('')
    }, 5000)

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
        <AuthContext.Provider value={{login, logout, autherror, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}