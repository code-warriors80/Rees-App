import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import AuthStack from '../stack/AuthStack';
import { Provider } from 'react-redux'
import { store } from '../store';
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react';
import tailwind from 'twrnc';
import AppStack from '../stack/AppStack';

export default function AppNav() {
    const {isLoading, userToken} = useContext(AuthContext)

    if(isLoading)
    {
        return (
            <View style={tailwind`flex-1 items-center justify-center`}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }
  return (
    <Provider store={store}>
        {userToken !== null ? <AppStack /> : <AuthStack />}
    </Provider>
  )
}