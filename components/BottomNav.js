import { View, Image, Text ,TouchableOpacity } from 'react-native'
import React from 'react'

// TAILWIND
import tailwind from 'twrnc'

// NAVIGATION
import { useNavigation } from '@react-navigation/native';

// REDUX
import { useSelector } from 'react-redux'
import { selectCartItem } from '../slice/cartSlice'

export default function BottomNav() {
     const navigation = useNavigation()
     const cartItem = useSelector(selectCartItem)
     if(!cartItem.length);
  return (
     // 

    <View style={tailwind`bg-white absolute w-full bottom-0 py-3 z-50 rounded-tl-20 rounded-tr-20 py-2 shadow-2xl`}>
          <View style={tailwind` flex-row w-[90%] items-center justify-around mx-auto rounded-full py-2`}>
               <TouchableOpacity style={tailwind`flex-row items-start`} onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../assets/icons/cart.png')} style={tailwind`w-8 h-8`}/>
                    <Text style={tailwind`relative text-xs`}>{cartItem.length}</Text>
               </TouchableOpacity>
               <TouchableOpacity style={tailwind`pb-1 border-b-2 border-[#F39300]`} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/icons/home.png')} style={tailwind`w-7 h-7`}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Image source={require('../assets/icons/user.png')} style={tailwind`w-7 h-7`}/>
               </TouchableOpacity>
          </View>
    </View>
  )
}