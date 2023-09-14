import { View, Text, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation()

  setTimeout(() => {
      navigation.navigate('Home')
  }, 5000)

  return (
    <View style={tailwind`flex-1 items-center justify-center bg-white`}>
                <Image source={require('../assets/5526265.jpg')} style={tailwind`w-70 h-70`}/>
    </View>
  )
}