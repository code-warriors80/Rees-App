import { Alert } from "react-native";
import React, { createContext, useEffect, useState } from "react";

// SAFESTORAGE
import AsyncStorage from "@react-native-async-storage/async-storage";

// API LINK
import { BASE_URL } from "../constant/config";

// AXIOS
import axios from "axios";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [autherror, setAuthError] = useState('')
    const [userInfo, setUserInfo] = useState(null);
    

    // This is your register script
    const register = async (username, email, mobile, password, navigation) => {
            const response = axios.post(`${BASE_URL}users/register`, {
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
        const response = axios.post(`${BASE_URL}users/login`, {
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
        axios.put(`${BASE_URL}users/updatepassword`, {
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

    const UpdateUserData = (address) => {
        axios.put(`${BASE_URL}users/updateuser/${userInfo.user._id}`, {
            address
        }).then(response => {
            //   console.log('Registration successful', response.data);
              Alert.alert('User Data Reset successful')

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
            userInfo = JSON.parse(userInfo)

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

    const Order = async (sumTotal, cartItemsById, cartEmpty) => {
        try {
            const products = [];
        
            // Iterate through cartItemsById to create products array with quantities
            cartItemsById.forEach(itemId => {
              const existingProductIndex = products.findIndex(product => product.product === itemId);
        
              if (existingProductIndex !== -1) {
                // If the product exists, increment the quantity
                products[existingProductIndex].quantity += 1;
              } else {
                // If the product doesn't exist, add it to the products array
                products.push({
                  product: itemId,
                  quantity: 1
                });
              }
            });
        
            const response = await axios.post(`${BASE_URL}order/createorders`, {
              customer: userInfo.user._id,
              products: products,
              totalAmount: sumTotal,
              address: userInfo.user.address
            });
        
            if (response) {
              Alert.alert('Order Created');
              console.log(response.data);
              cartEmpty()
            } else {
              console.log('Error Creating Order');
            }
        
            console.log('Order created:');
          } catch (error) {
            console.error('Error creating order:', error);
          }
        };


    useEffect(() => {
        isLoggedIn()
    }, [])
    return(
        <AuthContext.Provider value={{login, logout,  register, ChangePassword, UpdateUserData, Order ,userInfo, autherror, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )

}