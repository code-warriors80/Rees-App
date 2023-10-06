import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'twrnc'

// Components
import BottomNav from '../components/BottomNav'
import Category from '../components/category'
import DescFood from '../components/DescFood'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setFood, selectFood } from '../slice/foodSlice';

// CONTEXT
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { tailwind_classes } from '../styles/styles'

export default function HomeScreen() {
      const {userInfo} = useContext(AuthContext)
      const dispatch = useDispatch();

      const foodCategories = useSelector(selectFood);

      useEffect(() => {
            dispatch(setFood());
      }, [dispatch]);
      
  return (
    <SafeAreaView style={tailwind`${tailwind_classes[1].safe_area}`}>
            <View>
                  {/* HEADER START */}
                  <View style={tailwind`${tailwind_classes[2].header_vw}`}>
                        <View style={tailwind`flex-row items-center gap-4`}>
                              <TouchableOpacity style={tailwind`${tailwind_classes[2].header_lft_btn}`}>
                                          <Image source={require('../assets/icons/menu.png')} style={tailwind`${tailwind_classes[2].header_lft_img}`}/>
                              </TouchableOpacity>
                        </View>

                        <View style={tailwind`${tailwind_classes[2].header_pro}`}>
                        <Text style={tailwind`font-bold text-black`}>{userInfo.user.username}</Text>
                              <Image source={require('../assets/user/male.jpg')} style={tailwind`w-10 h-10 rounded-full`}/>
                        </View>
                  </View>
                  {/* HEADER END */}

                  {/* SEARCH BAR START */}
                  <View style={tailwind`p-2 px-4 flex-row items-center justify-between bg-white`}>
                        <View style={tailwind`flex-1 border border-2 border-gray-200 flex-row items-center gap-3 p-2 rounded-lg`}>
                              <Image source={require('../assets/icons/search.png')} style={tailwind`w-5 h-5`}/>
                              <TextInput placeholder='Search Food & Snacks' style={tailwind`flex-1 text-xs text-gray-600`}/>
                              <Image source={require('../assets/icons/mic.png')} style={tailwind`w-5 h-5`}/>
                        </View>

                        <View style={tailwind`bg-gray-200 p-2 rounded-lg ml-3`}>
                              <Image source={require('../assets/icons/bell.png')} style={tailwind`w-7 h-7`}/>
                        </View>
                  </View>
                  {/* SEARCH BAR END */}

            </View>

            <ScrollView style={tailwind`flex-1`} 
                         contentContainerStyle={{
                              paddingBottom: 50
               }}>
                  {/* ADVERT START */}
                  <View style={tailwind`w-full overflow-hidden`}>
                        <View style={tailwind`${tailwind_classes[2].page} rounded-lg overflow-hidden`}>
                              <Image source={require('../assets/h5-bg-countdown1.jpg')} style={tailwind` absolute w-full h-full`}/>
                              <View style={tailwind`my-auto py-4 px-7`}>
                                    <Text style={tailwind`text-white font-bold text-xs`}>Get Special Discount</Text>
                                    <Text style={tailwind`text-[#F39300] text-xl font-extrabold`}>Up to 30%</Text>
                                    <TouchableOpacity style={tailwind`w-28 rounded-lg mt-2 py-3 flex items-center justify-center bg-[#F39300]`}>
                                          <Text style={tailwind`text-white font-bold`}>Explore Now</Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </View>
                  {/* ADVERT END */}

                  {/* CATEGORY START */}
                  <View style={tailwind`p-5 ${tailwind_classes[1].safe_area}`}>
                      <View style={tailwind`${tailwind_classes[4].items_txt_vw}`}>
                            <Text style={tailwind`${tailwind_classes[4].item_txt}`}>Food Items</Text>
                            <Text style={tailwind`${tailwind_classes[4].items_vw_txt}`}>View All</Text>
                      </View>

                        <Category />
                  </View>
                  {/* CATEGORY END */}


                  <View style={tailwind`${tailwind_classes[1].safe_area}`}>
                        {foodCategories.map((myclass, index) => (
                              <View key={index} style={tailwind``}>                                    
                                    <View style={tailwind`${tailwind_classes[2].page} flex-row justify-between items-start mb-1`}>
                                          <View>
                                                <Text style={tailwind`${tailwind_classes[4].item_txt}`}>{myclass.title}</Text>
                                                <Text style={tailwind`${tailwind_classes[1].p_font}`}>{myclass.description}</Text>
                                          </View>
                                          <TouchableOpacity>
                                                <Text style={tailwind`${tailwind_classes[4].items_vw_txt}`}>View All</Text>
                                          </TouchableOpacity>
                                    </View>

                                    {/* FOODLIST DISPLAY */}
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tailwind`${tailwind_classes[2].page}`}>
                                          {myclass.food.map((foods, index) => (
                                                <DescFood food={foods} key={index}/>
                                                
                                          ))}
                                    </ScrollView>
                                    {/* FOODLIST DISPLAY */}
                              </View>
                        ))}

                  </View>
            </ScrollView>
            <BottomNav />
    </SafeAreaView>
  )
}