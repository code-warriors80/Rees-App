import { View, Text , TouchableOpacity, ScrollView, Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FIcon from 'react-native-vector-icons/Feather'
import tailwind from 'twrnc'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItem,  selectCartTotal } from '../slice/cartSlice'


export default function CartScreen() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const cartItems = useSelector(selectCartItem)
  const cartTotal = useSelector(selectCartTotal)
  const [groupitems, setGroupItems] = useState({})

  const delivery = 300

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if(group[item.id]){
        group[item.id].push(item)
      }
      else
      {
        group[item.id] = [item]
      }
      return group
    }, {})
    setGroupItems(items)
  }, [cartItems])

  return (
    <SafeAreaView style={tailwind`px-5 py-3 flex-1 bg-white`}>
        <View style={tailwind`flex-row items-center justify-between pb-3`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`bg-gray-200 p-2 rounded-full shadow-sm`}>
              <FIcon name='arrow-left' size={20} color='black'/>
            </TouchableOpacity>

            <Text style={tailwind`text-[16px] font-bold mx-auto`}>My Cart</Text>
        </View>

        <ScrollView style={tailwind`flex-1`}>
        {Object.entries(groupitems).map(([key, items]) => {
          let dish = items[0]
          return(
              <View key={key} style={tailwind`bg-white rounded-lg shadow flex-row items-center p-2 m-2`}>
                  <Image source={dish.image} style={tailwind`w-16 h-16`}/>

                  <View style={tailwind`flex-1 mr-5 ml-3`}>
                      <View style={tailwind`flex-row items-start justify-between mb-1`}>
                          <View style={tailwind``}>
                            <Text style={tailwind`font-bold text-[14px] mb-1`}>{dish.name}</Text>
                            <Text style={tailwind`text-[10px] text-gray-400`}>{dish.category}</Text>
                          </View>
                          <Text style={tailwind`font-bold text-xs text-gray-700`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/> {
                            (dish.price * items.length).toLocaleString('en-US')
                          
                          }</Text>
                      </View>

                      <View style={tailwind`flex-row items-center justify-between`}>
                        <Text style={tailwind`text-xs`}><Text style={tailwind`text-xs text-[#F39300]`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/> </Text>{dish.price.toLocaleString('en-US')}</Text>
                          <View style={tailwind`flex-row items-center gap-2`}>
                            <TouchableOpacity style={tailwind`bg-gray-200 p-1 rounded-full shadow-sm`} onPress={() => dispatch(removeFromCart({id: dish.id}))}>
                              <Icon name='minus' size={12} color='black'/>
                            </TouchableOpacity>
                            <Text style={tailwind`font-bold text-xs`}>{items.length}</Text>
                            <TouchableOpacity style={tailwind`bg-gray-200 p-1 rounded-full shadow-sm`} onPress={() => dispatch(addToCart({...dish}))}>
                                <Icon name='plus' size={12} color='black'/>
                            </TouchableOpacity>
                          </View>
                      </View>
                  </View>
              </View>
          )})}
          </ScrollView>

      {/* <View style={tailwind`bg-white py-3 px-2 flex-row items-center justify-between mb-4 rounded-lg shadow-sm mt-1`}>
          <View style={tailwind`flex-row items-center gap-3 ml-2`}>
              <Image source={require('../assets/icons/cupon.png')} style={tailwind`w-5 h-5`}/>
              <Text style={tailwind`font-bold text-xs`}>Promo Code</Text>
          </View>
          <TouchableOpacity style={tailwind`bg-[#FA5758] p-2 px-4 rounded-lg`}>
              <Text style={tailwind`text-white text-xs`}>Apply</Text>
          </TouchableOpacity>
      </View> */}

      <View style={tailwind`bg-white shadow-sm rounded-lg`}>
          <View style={tailwind`flex-row items-center justify-between py-3 px-5`}>
              <Text style={tailwind`font-semibold text-[13px]`}>Subtotal</Text>
              <Text style={tailwind`font-semibold text-[12px]`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/> {cartTotal.toLocaleString('en-US')}</Text>
          </View>

          <View style={tailwind`flex-row items-center justify-between py-3 border-t-[1px] border-b-[1px] border-gray-200 px-5`}>
              <Text style={tailwind`font-semibold text-[13px]`}>Delivery</Text>
              <Text style={tailwind`font-semibold text-xs`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/> {delivery.toLocaleString('en-US')}</Text>
          </View>

          <View style={tailwind`flex-row items-center justify-between py-3 px-5`}>
              <Text style={tailwind`font-bold text-[16px]`}>Total</Text>
              <Text style={tailwind`font-bold text-[14px] text-[#F39300]`}><Image source={require('../assets/icons/naira.png')} style={tailwind`w-3 h-3`}/> {(cartTotal + delivery).toLocaleString('en-US')}</Text>
          </View>
      </View>

        <TouchableOpacity style={tailwind`bg-[#F39300] py-4 rounded-lg mt-5`} onPress={() => navigation.navigate('Checkout')}>
          <Text style={tailwind`text-center text-[15px] text-white font-bold`}>Confirm Order</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}