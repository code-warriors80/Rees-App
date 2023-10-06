import { View, Text , TouchableOpacity, ScrollView, Image, Modal} from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { tailwind_classes } from '../styles/styles'

// ICON
import FIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/Feather'

// TAILWIND
import tailwind from 'twrnc'

// NAVIGATION
import { useNavigation } from '@react-navigation/native';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItem, selectCartTotal } from '../slice/cartSlice'
import { AuthContext } from '../context/AuthContext'
import Checkout from '../components/Checkout'


export default function CartScreen() {
  const dispatch = useDispatch()
  const {userInfo} = useContext(AuthContext)
  const navigation = useNavigation()
  const cartItems = useSelector(selectCartItem)
  const cartTotal = useSelector(selectCartTotal)
  const [groupitems, setGroupItems] = useState({})
  const [model, setModel] = useState(false)

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

  let sumTotal = cartTotal + delivery

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
    <SafeAreaView style={tailwind`${tailwind_classes[1].safe_area}`}>
        {/* HEADER START */}
        <View style={tailwind`${tailwind_classes[2].header_vw}`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`${tailwind_classes[2].header_lft_btn}`}>
              <FIcon name='arrow-left' size={17} color='black'/>
            </TouchableOpacity>

            <Text style={tailwind`${tailwind_classes[2].header_txt}`}>My Cart</Text>
        </View>
        {/* HEADER END */}

        <ScrollView style={tailwind`${tailwind_classes[1].safe_area}`}>
            {Object.entries(groupitems).map(([key, items]) => {
            let dish = items[0]
            return(
              <View key={key} style={tailwind`px-4`}>
                <View style={tailwind`bg-white rounded-lg shadow flex-row items-center p-2 m-2`}>
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

                        <View style={tailwind`${tailwind_classes[5].flex_item}`}>
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
                </View>
            )})}
        </ScrollView>

      {/* 
          <View style={tailwind`bg-white py-3 px-2 flex-row items-center justify-between mb-4 rounded-lg shadow-sm mt-1`}>
              <View style={tailwind`flex-row items-center gap-3 ml-2`}>
                  <Image source={require('../assets/icons/cupon.png')} style={tailwind`w-5 h-5`}/>
                  <Text style={tailwind`font-bold text-xs`}>Promo Code</Text>
              </View>
              <TouchableOpacity style={tailwind`bg-[#FA5758] p-2 px-4 rounded-lg`}>
                  <Text style={tailwind`text-white text-xs`}>Apply</Text>
              </TouchableOpacity>
          </View> 
      */}

      {/* CART TOTAL START */}
      <View style={tailwind`${tailwind_classes[3].cart_tot_con}`}>
          <View style={tailwind`${tailwind_classes[3].cart_tot_vw}`}>
              <View style={tailwind`${tailwind_classes[3].tot_view}`}>
                  <Text style={tailwind`${tailwind_classes[3].tot_vw_txt1}`}>Subtotal</Text>
                  <Text style={tailwind`${tailwind_classes[3].tot_num_1}`}><Image source={require('../assets/icons/naira.png')} style={tailwind`${tailwind_classes[3].tot_img}`}/> {cartTotal.toLocaleString('en-US')}</Text>
              </View>

              <View style={tailwind`${tailwind_classes[3].tot_view}`}>
                  <Text style={tailwind`${tailwind_classes[3].tot_vw_txt1}`}>Delivery</Text>
                  <Text style={tailwind`${tailwind_classes[3].tot_num_1}`}><Image source={require('../assets/icons/naira.png')} style={tailwind`${tailwind_classes[3].tot_img}`}/> {delivery.toLocaleString('en-US')}</Text>
              </View>

              <View style={tailwind`${tailwind_classes[3].tot_view}`}>
                  <Text style={tailwind`${tailwind_classes[3].tot_vw_txt2}`}>Total</Text>
                  <Text style={tailwind`${tailwind_classes[3].tot_num_2}`}><Image source={require('../assets/icons/naira.png')} style={tailwind`${tailwind_classes[3].tot_img}`}/> {sumTotal.toLocaleString('en-US')}</Text>
              </View>
          </View>
          {/* CART TOTAL END */}

      <Modal visible={model} animationType='slide'>
          <Checkout setModel={setModel} delivery={delivery} sumTotal={sumTotal}/>
        </Modal>

        <TouchableOpacity style={tailwind`${tailwind_classes[3].tot_btn}`} onPress={() => setModel(true)}>
          <Text style={tailwind`${tailwind_classes[3].tot_btn_txt}`}>Confirm Order</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}