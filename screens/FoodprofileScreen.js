import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FIcon from 'react-native-vector-icons/Feather'
import tailwind from 'twrnc'
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux'
import { setFood } from '../slice/foodSlice'
import { removeFromCart, selectCartItemById, addToCart } from '../slice/cartSlice'

export default function FoodprofileScreen() {
  const {params} = useRoute();
  const navigation = useNavigation()
  let item = params;
  const totalItems = useSelector(state => selectCartItemById(state, item.id))

  const dispatch = useDispatch()

  const handleIncrease = () => {
          dispatch(addToCart({...item}))
  }

  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}))
}
  
  useEffect(()=> {
    if(item && item.id)
    {
      dispatch(setFood({...item}))
    }
  }, [])

  return (
    <SafeAreaView style={tailwind`px-5 py-2 flex-1 bg-white`}>
        {/* HEADER START */}
        <View style={tailwind`flex-row items-center justify-between py-2`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`bg-gray-200 p-2 rounded-full shadow-sm`}>
              <FIcon name='arrow-left' size={20} color='black'/>
            </TouchableOpacity>
            
            <FIcon name='heart' size={20} color='black'/>
        </View>
        {/* HEADER END */}

        <ScrollView showsVerticalScrollIndicator={false} style={tailwind`flex-1`}>
          <View>
              <Text style={tailwind`text-center text-lg`}>{item.name}</Text>
              <Text style={tailwind`text-center text-lg font-bold mt-2`}><Text style={tailwind`text-sm text-[#FA5758]`}>$ </Text>{item.price}</Text>
              <View style={tailwind`flex-1 items-center justify-center`}>
                <Image source={item.image} style={tailwind`w-65 h-60`}/>
              </View>

              <View>
                  <View style={tailwind`flex-row items-center justify-center gap-3 my-3 shadow-lg`}>
                      <TouchableOpacity style={tailwind`bg-gray-200 p-2 rounded-full shadow-sm`} onPress={(handleDecrease)}>
                        <Icon name='minus' size={15} color='black'/>
                      </TouchableOpacity>

                      <Text style={tailwind`font-bold text-lg`}>{totalItems.length}</Text>

                      <TouchableOpacity style={tailwind`bg-gray-200 p-2 rounded-full shadow-sm`} onPress={handleIncrease}>
                          <Icon name='plus' size={15} color='black'/>
                      </TouchableOpacity>
                  </View>
                  <Text style={tailwind`font-light text-center text-gray-500`}>$ {item.price * totalItems.length}</Text>
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

              <View>
                <Text style={tailwind`font-bold text-lg mb-2`}>Ingredients</Text>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>2 cups converted rice (13 1/4 ounces; 375g), such as Uncle Ben's Original or golden sella basmati</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>3 1/2 cups (825ml) Nigerian-style stock, divided, plus more as needed</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>2 tablespoons (30ml) virgin coconut oil or vegetable oil</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>1 medium carrot (2 3/4 ounces; 75g), cut into 1/4-inch dice</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>1 small red or white onion (2 1/4 ounces; 60g), cut into 1/4-inch dice</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>1 1/2 ounces (45g) green beans, stem ends trimmed and cut into 1/4-inch-thick rounds</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>Kosher salt</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>2 scallions, ends trimmed, white and green parts separated, and each thinly sliced crosswise, divided</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>1/2 large red bell pepper (2 3/4 ounces; 75g), stemmed, seeded, and cut into 1/4-inch dice</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>1/2 medium green bell pepper (2 1/4 ounces; 60g), stemmed, seeded, cut into 1/4-inch dice, divided</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>1/4 cup (60g) drained canned whole kernel sweet corn</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>2 teaspoons Nigerian-style curry powder (see note)</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>1 teaspoon dried thyme</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>1/4 teaspoon freshly ground black pepper, plus more to taste</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>2 dried bay leaves</Text></View>
                <View style={tailwind`flex-row items-center gap-3 mb-5`}><FIcon name='arrow-right' size={10} color='#FA5758'/><Text style={tailwind`text-xs pl-2`}>1/2 cup (120ml) full-fat coconut milk</Text></View>
              </View>

          </View>
        </ScrollView>

        <TouchableOpacity style={tailwind`bg-[#FA5758] py-4 rounded-lg`} onPress={(handleIncrease)}>
                <Text style={tailwind`text-center text-[15px] text-white font-bold`}>Add To Basket</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}