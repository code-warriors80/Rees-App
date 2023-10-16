import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import { Linking } from 'react-native';



// ICON
import FIcon from 'react-native-vector-icons/Feather'

// NAVIGATION
import { useNavigation } from '@react-navigation/native';

// TAILWIND
import tailwind from 'twrnc';
import {useContext} from 'react'

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemIds, emptyCart, selectCartItem } from '../slice/cartSlice';
import { AuthContext } from '../context/AuthContext';
import { tailwind_classes } from '../styles/styles'

export default function CheckoutScreen({setModel, delivery, sumTotal}) {
  const {userInfo, Order} = useContext(AuthContext)
  const navigation = useNavigation()
  const cartItems = useSelector(selectCartItem)
  const cartItemsById = useSelector(selectCartItemIds)

  const dispatch = useDispatch()
  const generateRandomTxRef = () => {
    const timestamp = new Date().getTime().toString(36);
    const randomChars = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomChars}`;
  };
  
  const randomTxRef = generateRandomTxRef();

  const initiatePayment = async () => {
    if (cartItems.length < 1) {
      console.log('Cart is empty. Add an item.');
      return;  // Added return to exit the function if cart is empty
    }
  
    try {
      const redirectScheme = 'myapp://payment-callback';
      const expoRedirect = 'exp://exp.host/--/';

      const redirectURL = `${redirectScheme}?redirect=${encodeURIComponent(expoRedirect)}`;
  
      const payload = {
        tx_ref: randomTxRef,
        amount: sumTotal,
        currency: 'NGN',
        redirect_url: redirectURL,
        meta: {
          consumer_id: 23,
          consumer_mac: '92a3-912ba-1192a'
        },
        customer: {
          email: userInfo.user.email,
          phonenumber: userInfo.user.mobile,
          name: userInfo.user.username
        },
        customizations: {
          title: 'Pied Piper Payments',
          logo: 'http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png'
        }
      };
  
      const response = await axios.post(
        'https://api.flutterwave.com/v3/payments',
        payload,
        {
          headers: {
            Authorization: `Bearer FLWSECK_TEST-3af7fff02ac7d2d5f6f34606303ae77e-X`
          }
        }
      );
  
      console.log('Payment initiated:', response.data);
  
      const checkoutUrl = response.data.data.link;
      if (checkoutUrl) {
        Linking.openURL(checkoutUrl);
      } else {
        console.error('Unable to open Flutterwave checkout URL.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error.response ? error.response.data : error.message);
    }
  };
  

  // () => Order(sumTotal, cartItemsById, cartEmpty)

  const cartEmpty = () => {
    dispatch(emptyCart())
  }

  return (
    <SafeAreaView style={tailwind`${tailwind_classes[1].safe_area}`}>
        {/* HEADER START */}
        <View style={tailwind`${tailwind_classes[2].header_vw}`}>
            <TouchableOpacity onPress={() => setModel(false)} style={tailwind`${tailwind_classes[2].header_lft_btn}`}>
              <FIcon name='arrow-left' size={17} color='black'/>
            </TouchableOpacity>

            <Text style={tailwind`${tailwind_classes[2].header_txt}`}>Checkout</Text>
        </View>
        {/* HEADER END */}

        <ScrollView style={tailwind`${tailwind_classes[1].safe_area}`} showsVerticalScrollIndicator={false}>
              {/* ORDER ADDRESS */}
              <View style={tailwind`${tailwind_classes[4].chckout_vs}`}>
                    <Text style={tailwind`${tailwind_classes[4].chckout_txt}`}>Deivery Address</Text>
                    <TouchableOpacity style={tailwind`${tailwind_classes[4].item_vw} ${tailwind_classes[4].item_tch} ${tailwind_classes[1].bg_col}`} onPress={() => navigation.navigate('Location')}>
                        <View style={tailwind`flex-row items-center gap-3`}>
                              <Image source={require('../assets/3d-view-map.jpg')} style={tailwind`w-15 h-15 rounded-lg`}/>
                              <View style={tailwind`w-[68%]`}>
                                  <Text style={tailwind`text-white font-bold mb-1 text-sm`}>Home</Text>
                                  <Text style={tailwind`text-gray-200 text-xs `}>{userInfo.user.address}</Text>
                              </View>
                        </View>
                        <FIcon name='chevron-right' size={15} color='white'/>
                    </TouchableOpacity>
              {/* ORDER ADDRESS */}

              {/* PAYMENT METHODS */}
                  <View style={tailwind`${tailwind_classes[4].items_txt_vw}`}>
                      <Text style={tailwind`${tailwind_classes[4].chckout_txt}`}>Payment Method</Text>
                      <TouchableOpacity>
                        <Text style={tailwind`${tailwind_classes[4].items_vw_txt}`}>Add New</Text>
                      </TouchableOpacity>
                  </View>

                  <View>
                      <TouchableOpacity style={tailwind`${tailwind_classes[4].item_tch}`}>
                        <View style={tailwind`${tailwind_classes[4].item_vw}`}>
                            <Image source={require("../assets/logos/master.png")} style={tailwind`w-10 h-10`}/>
                            <View>
                              <Text style={tailwind`${tailwind_classes[4].item_txt}`}>Pay with credit card</Text>
                            </View>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={tailwind`${tailwind_classes[4].item_tch}`}>
                        <View style={tailwind`${tailwind_classes[4].item_vw}`}>
                            <Image source={require("../assets/logos/ussd.png")} style={tailwind`w-10 h-10`}/>
                            <View>
                              <Text style={tailwind`${tailwind_classes[4].item_txt}`}>Pay via USSD code</Text>
                            </View>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={tailwind`${tailwind_classes[4].item_tch}`}>
                        <View style={tailwind`${tailwind_classes[4].item_vw}`}>
                          <Image source={require("../assets/logos/bank.png")} style={tailwind`w-9 h-9`}/>
                            <View>
                              <Text style={tailwind`${tailwind_classes[4].item_txt}`}>Local Bank-transfer</Text>
                            </View>
                        </View>
                      </TouchableOpacity>
                  </View>
              </View>
              {/* PAYMENT METHODS */}
        </ScrollView>

        {/* ORDER TOTAL START */}
        <View style={tailwind`${tailwind_classes[3].cart_tot_con}`}>
            <View style={tailwind`${tailwind_classes[3].cart_tot_vw}`}>
                <View style={tailwind`${tailwind_classes[3].tot_view}`}>
                    <Text style={tailwind`${tailwind_classes[3].tot_vw_txt1}`}>Delivery</Text>
                    <Text style={tailwind`${tailwind_classes[3].tot_num_1}`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/>{delivery.toLocaleString('en-US')}</Text>
                </View>

                <View style={tailwind`${tailwind_classes[3].tot_view}`}>
                    <Text style={tailwind`${tailwind_classes[3].tot_vw_txt2}`}>Total</Text>
                    <Text style={tailwind`${tailwind_classes[3].tot_num_2}`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/>{sumTotal.toLocaleString('en-US')}</Text>
                </View>
            </View>
            {/* ORDER TOTAL START */}

            <TouchableOpacity style={tailwind`${tailwind_classes[3].tot_btn}`} onPress={initiatePayment}>
              <Text style={tailwind`${tailwind_classes[3].tot_btn_txt}`}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}