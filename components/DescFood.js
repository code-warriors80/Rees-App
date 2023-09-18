import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { useNavigation } from '@react-navigation/native';

export default function DescFood({food}) {
      const navigation = useNavigation()
  return (

                            <View style={tailwind`w-[150px] bg-white  p-3 rounded-lg shadow my-5 mx-2`}>
                                    <View style={tailwind`flex items-center justify-center`}>
                                          <Image source={food.image} style={tailwind`w-20 h-20`} sharedTransitionTag="tag"/>
                                    </View>
                                    
                                    <View style={tailwind`flex-row items-center justify-center gap-1`}>
                                          <Image source={require('../assets/icons/star.png')} style={tailwind`w-3 h-3`}/>
                                          <Image source={require('../assets/icons/star.png')} style={tailwind`w-3 h-3`}/>
                                          <Image source={require('../assets/icons/star.png')} style={tailwind`w-3 h-3`}/>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate('FoodProfile', {...food})}>
                                          <Text style={tailwind`font-bold text-center text-[14px]`}>{food.name}</Text>
                                    </TouchableOpacity>
                                    <Text style={tailwind`font-light text-[11px] text-gray-400 text-center`}>{food.category}</Text>
                                    <View style={tailwind`flex-row justify-between items-center mt-1`}>
                                          <Text style={tailwind`font-extrabold`}>${food.price}</Text>
                                          <TouchableOpacity style={tailwind`rounded-full bg-gray-200 p-2`}>
                                                <Image source={require('../assets/icons/basket.png')} style={tailwind`w-5 h-5`}/>
                                          </TouchableOpacity>
                                    </View>
                            </View>

  )
}