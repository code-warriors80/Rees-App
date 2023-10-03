import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// ICON
import FIcon from 'react-native-vector-icons/Feather'

// NAVIGATION
import { useNavigation } from '@react-navigation/native';

// TAILWIND
import tailwind from 'twrnc';
import {useContext} from 'react'

// REDUX
import { useSelector } from 'react-redux';
import { selectCartItem, selectCartTotal } from '../slice/cartSlice';
import { AuthContext } from '../context/AuthContext';

export default function CheckoutScreen() {
  const {userInfo} = useContext(AuthContext)
  const navigation = useNavigation()
  const cartItems = useSelector(selectCartItem)
  const cartTotal = useSelector(selectCartTotal)

  let delivery = 0

  switch(userInfo.user.location)
  {
    case 'Samaru':
      delivery = 400
      break;
    case 'Sabon Gari':
      delivery = 100
      break;
    case 'Kongo':
      delivery = 250
      break;
    case 'PZ':
      delivery = 150
      break;
    default:
      delivery
  }
  return (
    <SafeAreaView style={tailwind`px-7 py-3 flex-1 bg-white`}>
        {/* HEADER START */}
        <View style={tailwind`flex-row items-center justify-between pt-3 pb-5`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`bg-white p-2 rounded-full shadow-lg`}>
              <FIcon name='arrow-left' size={20} color='black'/>
            </TouchableOpacity>

            <Text style={tailwind`text-[16px] font-bold mx-auto`}>Checkout</Text>
        </View>
        {/* HEADER END */}

        <ScrollView style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>
              {/* ORDER ADDRESS */}
              <View style={tailwind`m-1`}>
                    <Text style={tailwind`font-bold mb-4`}>Deivery Address</Text>
                    <TouchableOpacity style={tailwind`flex-row items-center justify-between w-full bg-[#F39300] rounded-lg p-3 shadow-lg`} onPress={() => navigation.navigate('Location')}>
                        <View style={tailwind`flex-row items-center gap-3`}>
                              <Image source={require('../assets/3d-view-map.jpg')} style={tailwind`w-15 h-15 rounded-lg`}/>
                              <View style={tailwind`w-[68%]`}>
                                  <Text style={tailwind`text-white font-bold mb-1 text-sm`}>Home</Text>
                                  <Text style={tailwind`text-gray-200 text-xs `}>{userInfo.user.address}</Text>
                              </View>
                        </View>
                        <FIcon name='chevron-right' size={15} color='white'/>
                    </TouchableOpacity>
              </View>
              {/* ORDER ADDRESS */}

              {/* PAYMENT METHODS */}
              <View>
                  <View style={tailwind`flex-row items-center justify-between mt-8`}>
                      <Text style={tailwind`font-bold`}>Payment Method</Text>
                      <TouchableOpacity>
                        <Text style={tailwind`text-[#F39300] text-xs`}>Add New</Text>
                      </TouchableOpacity>
                  </View>

                  <View>
                      <TouchableOpacity style={tailwind`bg-white rounded-lg shadow mx-1 my-2 p-4`}>
                        <View style={tailwind`flex-row items-center gap-3`}>
                            <Image source={require("../assets/logos/master.png")} style={tailwind`w-10 h-10`}/>
                            <View style={tailwind``}>
                              <Text style={tailwind`text-sm font-bold`}>Pay with credit card</Text>
                            </View>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={tailwind`bg-white rounded-lg shadow mx-1 my-2 p-4`}>
                        <View style={tailwind`flex-row items-center gap-3`}>
                            <Image source={require("../assets/logos/ussd.png")} style={tailwind`w-10 h-10`}/>
                            <View style={tailwind``}>
                              <Text style={tailwind`text-sm font-bold`}>Pay via USSD code</Text>
                            </View>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={tailwind`bg-white rounded-lg shadow mx-1 my-2 p-4`}>
                        <View style={tailwind`flex-row items-center gap-3`}>
                          <Image source={require("../assets/logos/bank.png")} style={tailwind`w-9 h-9`}/>
                            <View style={tailwind``}>
                              <Text style={tailwind`text-sm font-bold`}>Local Bank-transfer</Text>
                            </View>
                        </View>
                      </TouchableOpacity>
                  </View>
              </View>
              {/* PAYMENT METHODS */}
        </ScrollView>

        {/* ORDER TOTAL START */}
        <View style={tailwind`bg-white shadow-sm rounded-lg`}>
            <View style={tailwind`flex-row items-center justify-between py-3 border-t-[1px] border-b-[1px] border-gray-200 px-5`}>
                <Text style={tailwind`font-semibold text-[12px]`}>Delivery</Text>
                <Text style={tailwind`font-semibold text-xs`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/>{delivery.toLocaleString('en-US')}</Text>
            </View>

            <View style={tailwind`flex-row items-center justify-between py-3 px-5`}>
                <Text style={tailwind`font-bold text-[16px]`}>Total</Text>
                <Text style={tailwind`font-bold text-[14px] text-[#F39300]`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/>{(delivery + cartTotal).toLocaleString('en-US')}</Text>
            </View>
        </View>
        {/* ORDER TOTAL START */}

        <TouchableOpacity style={tailwind`bg-[#F39300] py-4 rounded-lg mt-5`} onPress={() => navigation.navigate()}>
          <Text style={tailwind`text-center text-[15px] text-white font-bold`}>Pay Now</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}