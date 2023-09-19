import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import FIcon from 'react-native-vector-icons/Feather'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import tailwind from 'twrnc';
import { Image } from 'react-native';

export default function CheckoutScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tailwind`px-7 py-3 flex-1 bg-white`}>
        <View style={tailwind`flex-row items-center justify-between pt-3 pb-5`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`bg-gray-200 p-2 rounded-full shadow-lg`}>
              <FIcon name='arrow-left' size={20} color='black'/>
            </TouchableOpacity>

            <Text style={tailwind`text-[16px] font-bold mx-auto`}>Checkout</Text>
        </View>

        <ScrollView style={tailwind`flex-1`}>
            <View>
              <Text style={tailwind`font-bold mb-4`}>Shipping Address</Text>
              <TouchableOpacity style={tailwind`flex-row items-center justify-between w-full bg-[#F39300] rounded-lg p-3 shadow-lg`}>
                <View style={tailwind`flex-row items-center gap-3`}>
                  <Image source={require('../assets/1.jpg')} style={tailwind`w-15 h-15 rounded-lg`}/>
                  <View style={tailwind`w-[68%]`}>
                    <Text style={tailwind`text-white font-bold mb-1 text-sm`}>Home</Text>
                    <Text style={tailwind`text-gray-200 text-xs `}>lagos street Sabon Gari Zaria Kaduna State</Text>
                  </View>
                </View>
                  <FIcon name='chevron-right' size={15} color='white'/>
              </TouchableOpacity>
            </View>

            <View style={tailwind`flex-row items-center justify-between mt-8`}>
              <Text style={tailwind`font-bold`}>Payment Method</Text>
              <TouchableOpacity>
                <Text style={tailwind`text-[#F39300] text-xs`}>Add New</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>

        <View style={tailwind`bg-white shadow-sm rounded-lg`}>
          <View style={tailwind`flex-row items-center justify-between py-3 border-t-[1px] border-b-[1px] border-gray-200 px-5`}>
              <Text style={tailwind`font-semibold text-[12px]`}>Delivery</Text>
              <Text style={tailwind`font-semibold text-xs`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/>50</Text>
          </View>

          <View style={tailwind`flex-row items-center justify-between py-3 px-5`}>
              <Text style={tailwind`font-bold text-[16px]`}>Total</Text>
              <Text style={tailwind`font-bold text-[14px] text-[#F39300]`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/>100</Text>
          </View>
      </View>

        <TouchableOpacity style={tailwind`bg-[#F39300] py-4 rounded-lg mt-5`} onPress={() => navigation.navigate('Checkout')}>
          <Text style={tailwind`text-center text-[15px] text-white font-bold`}>Pay Now</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}