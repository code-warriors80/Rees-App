import { View, Text, TouchableOpacity } from 'react-native'
import FIcon from 'react-native-vector-icons/Feather'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native';
import tailwind from 'twrnc';

export default function CheckoutScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tailwind`px-5 py-3 flex-1 bg-white`}>
        <View style={tailwind`flex-row items-center justify-between pb-3`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`bg-gray-200 p-2 rounded-full shadow-lg`}>
              <FIcon name='arrow-left' size={20} color='black'/>
            </TouchableOpacity>

            <Text style={tailwind`text-[16px] font-bold mx-auto`}>Checkout</Text>
        </View>
    </SafeAreaView>
  )
}