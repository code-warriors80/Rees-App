import { View, Text, Image } from 'react-native'
import React from 'react'

// TAILWIND
import tailwind from 'twrnc'

// NAVIGATION
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation()

  setTimeout(() => {
      navigation.navigate('Home')
  }, 5000)

  return (
    <View style={tailwind`flex-1 items-center justify-center bg-white`}>
                <Image source={require('../assets/logo1.png')} style={tailwind`w-90 h-90`}/>
                <Image source={require('../assets/1494.gif')} style={tailwind`w-10 h-10`}/>
    </View>
  )
}