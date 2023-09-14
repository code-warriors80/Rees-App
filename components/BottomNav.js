import { View, Text } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import FIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/AntDesign'

export default function BottomNav() {
  return (
    <View style={tailwind`bg-[#FA5758] absolute w-full flex-row items-center justify-around bottom-0 z-50 rounded-tl-20 rounded-tr-20 py-4`}>
      <FIcon name='home' size={20} color='white'/>
      <FIcon name='heart' size={20} color='gray'/>
      <FIcon name='shopping-bag' size={20} color='gray'/>
      <FIcon name='user' size={20} color='gray'/>
    </View>
  )
}