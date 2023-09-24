import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// ICONS
import FIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/Feather'

// TAILWIND
import tailwind from 'twrnc'

// NAVIGATION
import { useNavigation, useRoute } from '@react-navigation/native';


// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, selectCartItemById, addToCart } from '../slice/cartSlice'

export default function FoodprofileScreen() {
  const {params} = useRoute();
  const navigation = useNavigation()

  const dispatch = useDispatch()

  let item = params;

  const totalItems = useSelector(state => selectCartItemById(state, item.id))


  const handleIncrease = () => {
          dispatch(addToCart({...item}))
  }

  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}))
  }

  return (
    <SafeAreaView style={tailwind`px-5 py-2 flex-1 bg-white`}>
        {/* HEADER START */}
        <View style={tailwind`flex-row items-center justify-between py-2`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`bg-white p-2 rounded-full shadow-lg`}>
              <FIcon name='arrow-left' size={20} color='black'/>
            </TouchableOpacity>
            
            <FIcon name='heart' size={20} color='black'/>
        </View>
        {/* HEADER END */}

        <ScrollView showsVerticalScrollIndicator={false} style={tailwind`flex-1`}>
          <View>
              <Text style={tailwind`text-center text-lg`}>{item.name}</Text>
              <Text style={tailwind`text-center text-sm font-bold my-2`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/> {item.price.toLocaleString('en-US')}</Text>
              <View style={tailwind`flex-1 items-center justify-center`}>
                <Image source={item.image} style={tailwind`w-50 h-50`}/>
              </View>

              <View>
                  <View style={tailwind`flex-row items-center justify-center gap-3 my-3 shadow-lg`}>
                      <TouchableOpacity style={tailwind`bg-gray-200 p-2 rounded-full shadow-sm`} onPress={(handleDecrease)}>
                        <Icon name='minus' size={13} color='black'/>
                      </TouchableOpacity>

                      <Text style={tailwind`font-bold text-xs`}>{totalItems.length}</Text>

                      <TouchableOpacity style={tailwind`bg-gray-200 p-2 rounded-full shadow-sm`} onPress={handleIncrease}>
                          <Icon name='plus' size={13} color='black'/>
                      </TouchableOpacity>
                  </View>
                  <Text style={tailwind`font-light text-center text-xs text-gray-500`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/> {(item.price * totalItems.length).toLocaleString('en-US')}</Text>
              </View>

              <View style={tailwind`flex-row items-center justify-between mt-7`}>
                  <View style={tailwind`flex-row items-center gap-1`}>
                    <Image source={require('../assets/icons/star.png')} style={tailwind`w-5 h-5`}/>
                    <Text style={tailwind`font-bold`}>{item.stars}</Text>
                  </View>

                  <View style={tailwind`flex-row items-center gap-1`}>
                    <Image source={require('../assets/icons/fire.png')} style={tailwind`w-5 h-5`}/>
                    <Text style={tailwind`font-bold`}>65 Calories</Text>
                  </View>

                  <View style={tailwind`flex-row items-center gap-1`}>
                    <Image source={require('../assets/icons/clock.png')} style={tailwind`w-5 h-5`}/>
                    <Text style={tailwind`font-bold`}>20-30 min</Text>
                  </View>
              </View>

              <View style={tailwind`my-5`}>
                <Text style={tailwind`font-bold text-lg mb-2`}>Details</Text>
                <Text style={tailwind`font-light text-gray-500 text-xs`}>{item.description}</Text>
                <Text style={tailwind`font-bold text-xs mt-2`}>({item.reviews} Reviews) <Text>{item.category}</Text></Text>
              </View>

          </View>
        </ScrollView>

        <TouchableOpacity style={tailwind`bg-[#F39300] py-4 rounded-lg`} onPress={(handleIncrease)}>
                <Text style={tailwind`text-center text-[15px] text-white font-bold`}>Add To Basket</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}