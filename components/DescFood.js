import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

// TAILWIND
import tailwind from 'twrnc'

// NAVIGATION
import { useNavigation } from '@react-navigation/native';

// REDUX
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/cartSlice';

export default function DescFood({food}) {
      const navigation = useNavigation()
      const dispatch = useDispatch()

      const handleIncrease = () => {
            if({id: food.id})
            {
                  dispatch(addToCart({...food}))
            }
            else
            {
                  console.log('items exist');
            }
            
      }
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
                                    
                                    <TouchableOpacity onPress={() => navigation.navigate('FoodProfile', {...food})} style={tailwind`flex-1 items-center`}>
                                          <Text style={tailwind`font-bold text-center text-[14px]`} numberOfLines={1} ellipsizeMode="tail">{food.name}</Text>
                                    </TouchableOpacity>
                                    <Text style={tailwind`font-light text-[11px] text-gray-400 text-center`}>{food.category}</Text>
                                    <View style={tailwind`flex-row justify-between items-center mt-1`}>
                                          <Text style={tailwind`font-bold`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/> {food.price.toLocaleString('en-US')}</Text>
                                          <TouchableOpacity onPress={handleIncrease} style={tailwind`rounded-full bg-gray-200 p-2`}>
                                                <Image source={require('../assets/icons/cart.png')} style={tailwind`w-5 h-5`}/>
                                          </TouchableOpacity>
                                    </View>
                            </View>

  )
}