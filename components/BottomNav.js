import { View, Image, Text ,TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import FIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { selectCartItem } from '../slice/cartSlice'

export default function BottomNav() {
     const navigation = useNavigation()
     const cartItem = useSelector(selectCartItem)
     if(!cartItem.length);
  return (
    <View style={tailwind`bg-[#F39300] absolute w-full flex-row items-center justify-around bottom-0 z-50 rounded-tl-20 rounded-tr-20 py-2`}>
               <TouchableOpacity style={tailwind`bg-gray-200 p-2 rounded-full`} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/icons/home.png')} style={tailwind`w-7 h-7`}/>
               </TouchableOpacity>
               <TouchableOpacity style={tailwind`flex-row items-start`} onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../assets/icons/cart.png')} style={tailwind`w-8 h-8`}/>
                    <Text style={tailwind`relative text-xs`}>{cartItem.length}</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Image source={require('../assets/icons/user.png')} style={tailwind`w-7 h-7`}/>
               </TouchableOpacity>
    </View>
  )
}