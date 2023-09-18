import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import FIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native';

export default function BottomNav() {
     const navigation = useNavigation()
  return (
    <View style={tailwind`bg-[#FA5758] absolute w-full flex-row items-center justify-around bottom-0 z-50 rounded-tl-20 rounded-tr-20 py-2`}>
               <TouchableOpacity style={tailwind`bg-gray-200 p-2 rounded-full`} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/icons/home.png')} style={tailwind`w-7 h-7`}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../assets/icons/cart.png')} style={tailwind`w-8 h-8`}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Image source={require('../assets/icons/user.png')} style={tailwind`w-7 h-7`}/>
               </TouchableOpacity>
    </View>
  )
}