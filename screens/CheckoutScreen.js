import { View, Text, TouchableOpacity ,Image,} from 'react-native'
import FIcon from 'react-native-vector-icons/Feather'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native';
import tailwind from 'twrnc';
// import RadioInput from "../components/RadioInput"

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

        <View style={tailwind`bg-white rounded-lg shadow flex-row items-center p-2 m-2`}>
            <Image source={require("../assets/logos/paypal.png")} style={tailwind`w-19 h-19`}/>

            <View style={tailwind`flex-1 mx-2`}>
                <View style={tailwind`flex-row items-start justify-between mb-1`}>
                    <View style={tailwind``}>
                      {/* <RadioInput/> */}
                      {/* <Text>Pay via paypal</Text> */}
                    </View>
                    
                </View>
            </View>
        </View>
        <View style={tailwind`bg-white rounded-lg shadow flex-row items-center p-2 m-2`}>
            <Image source={require("../assets/logos/mastercard.png")} style={tailwind`w-19 h-19`}/>

            <View style={tailwind`flex-1 mx-2`}>
                <View style={tailwind`flex-row items-start justify-between mb-1`}>
                    <View style={tailwind``}>
                      <Text>Pay with credit card</Text>
                    </View>
                    
                </View>
            </View>
        </View>
        <View style={tailwind`bg-white rounded-lg shadow flex-row items-center p-2 m-2`}>
            <Image source={require("../assets/logos/ussd.png")} style={tailwind`w-19 h-19`}/>

            <View style={tailwind`flex-1 mx-2`}>
                <View style={tailwind`flex-row items-start justify-between mb-1`}>
                    <View style={tailwind``}>
                    </View>
                    
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}