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

            {/* <Text style={tailwind`text-[16px] font-bold mx-auto`}>Checkout</Text> */}
          </View>

          <View>
            <Text style={tailwind`text-[16px] font-bold mx-auto p-4`}>Select Payment option</Text>
          </View>

          <TouchableOpacity>
             <View style={tailwind`bg-white rounded-lg shadow flex-row items-center p-4 m-3`}>
                <Image source={require("../assets/logos/master.png")} style={tailwind`w-16 h-16`}/>
                  <View style={tailwind`flex-1  ml-15`}>
                    <Text style={tailwind`text-[4]`}>Pay with credit card</Text>
                  </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={tailwind`bg-white rounded-lg shadow flex-row items-center p-3 m-3`}>
                <Image source={require("../assets/logos/ussd.png")} style={tailwind`w-16 h-16`}/>
                  <View style={tailwind`flex-1  ml-15`}>
                    <Text style={tailwind`text-[4]`}>Pay via USSD code</Text>
                  </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={tailwind`bg-white rounded-lg shadow flex-row items-center p-3 m-3`}>
                <Image source={require("../assets/logos/bank.png")} style={tailwind`w-16 h-16`}/>
                  <View style={tailwind`flex-1  ml-15`}>
                    <Text style={tailwind`text-[4]`}>Local Bank-transfer</Text>
                  </View>
              </View>
            </TouchableOpacity>
    </SafeAreaView>
  )
}