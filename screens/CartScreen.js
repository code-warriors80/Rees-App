import { View, Text , TouchableOpacity, ScrollView, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FIcon from 'react-native-vector-icons/Feather'
import tailwind from 'twrnc'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tailwind`px-5 py-3 flex-1 bg-white`}>
        <View style={tailwind`flex-row items-center justify-between pb-3`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`bg-gray-200 p-2 rounded-full shadow-sm`}>
              <FIcon name='arrow-left' size={20} color='black'/>
            </TouchableOpacity>

            <Text style={tailwind`text-[16px] font-bold mx-auto`}>My Basket</Text>
        </View>

      <ScrollView style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>

          <View style={tailwind`bg-white rounded-lg shadow-sm flex-row items-center p-2 m-2`}>
              <Image source={require('../assets/food/burger.png')} style={tailwind`w-19 h-19`}/>

              <View style={tailwind`flex-1 mx-2`}>
                  <View style={tailwind`flex-row items-start justify-between mb-1`}>
                      <View style={tailwind``}>
                        <Text style={tailwind`font-bold`}>Melting Cheese</Text>
                        <Text style={tailwind`text-xs text-gray-400`}>Pizza bar</Text>
                      </View>
                      <Text style={tailwind`font-bold text-xs text-gray-700`}>$25.00</Text>
                  </View>

                  <View style={tailwind`flex-row items-center justify-between`}>
                    <Text style={tailwind`text-xs`}><Text style={tailwind`text-xs text-[#FA5758]`}>$ </Text>8.44</Text>
                      <View style={tailwind`flex-row items-center gap-3`}>
                        <TouchableOpacity style={tailwind`bg-gray-200 p-1 rounded-full shadow-sm`}>
                          <Icon name='minus' size={12} color='black'/>
                        </TouchableOpacity>
                        <Text style={tailwind`font-bold text-sm`}>2</Text>
                        <TouchableOpacity style={tailwind`bg-gray-200 p-1 rounded-full shadow-sm`}>
                            <Icon name='plus' size={12} color='black'/>
                        </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </View>
            

            <View style={tailwind`bg-white rounded-lg shadow-sm flex-row items-center p-2 m-2`}>
                  <Image source={require('../assets/food/burger.png')} style={tailwind`w-19 h-19`}/>
                  <View style={tailwind`flex-1 mx-2`}>
                        <View style={tailwind`flex-row items-start justify-between mb-1`}>
                              <View style={tailwind``}>
                                <Text style={tailwind`font-bold`}>Melting Cheese</Text>
                                <Text style={tailwind`text-xs text-gray-400`}>Pizza bar</Text>
                              </View>
                              <Text style={tailwind`font-bold text-xs text-gray-700`}>$25.00</Text>
                        </View>

                        <View style={tailwind`flex-row items-center justify-between`}>
                            <Text style={tailwind`text-xs`}><Text style={tailwind`text-xs text-[#FA5758]`}>$ </Text>8.44</Text>
                            <View style={tailwind`flex-row items-center gap-3`}>
                              <TouchableOpacity style={tailwind`bg-gray-200 p-1 rounded-full shadow-sm`}>
                                <Icon name='minus' size={12} color='black'/>
                              </TouchableOpacity>
                              <Text style={tailwind`font-bold text-sm`}>2</Text>
                              <TouchableOpacity style={tailwind`bg-gray-200 p-1 rounded-full shadow-sm`}>
                                  <Icon name='plus' size={12} color='black'/>
                              </TouchableOpacity>
                            </View>
                        </View>
                  </View>
            </View>
      </ScrollView>

      <View style={tailwind`bg-white py-3 px-2 flex-row items-center justify-between mb-4 rounded-lg shadow-sm mt-1`}>
          <View style={tailwind`flex-row items-center gap-3 ml-2`}>
              <Image source={require('../assets/icons/cupon.png')} style={tailwind`w-5 h-5`}/>
              <Text style={tailwind`font-bold text-xs`}>Promo Code</Text>
          </View>
          <TouchableOpacity style={tailwind`bg-[#FA5758] p-2 px-4 rounded-lg`}>
              <Text style={tailwind`text-white text-xs`}>Apply</Text>
          </TouchableOpacity>
      </View>

      <View style={tailwind`bg-white shadow-sm rounded-lg`}>
          <View style={tailwind`flex-row items-center justify-between py-3 px-5`}>
              <Text style={tailwind`font-semibold text-[13px]`}>Subtotal</Text>
              <Text style={tailwind`font-semibold text-[12px]`}>$84.50</Text>
          </View>

          <View style={tailwind`flex-row items-center justify-between py-3 border-t-[1px] border-b-[1px] border-gray-200 px-5`}>
              <Text style={tailwind`font-semibold text-[13px]`}>Delivery</Text>
              <Text style={tailwind`font-semibold text-xs`}>Free</Text>
          </View>

          <View style={tailwind`flex-row items-center justify-between py-3 px-5`}>
              <Text style={tailwind`font-bold text-[16px]`}>Total</Text>
              <Text style={tailwind`font-bold text-[14px] text-[#FA5758]`}>$84.50</Text>
          </View>
      </View>

        <TouchableOpacity style={tailwind`bg-[#FA5758] py-4 rounded-lg mt-5`} onPress={() => navigation.navigate('Checkout')}>
          <Text style={tailwind`text-center text-[15px] text-white font-bold`}>Confirm Order</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}