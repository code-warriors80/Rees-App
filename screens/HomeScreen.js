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
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function HomeScreen() {
      const {userInfo} = useContext(AuthContext)
      const dispatch = useDispatch();

      const foodCategories = useSelector(selectFood);

      useEffect(() => {
            dispatch(setFood());
      }, [dispatch]);
      
  return (
    <SafeAreaView style={tailwind`flex-1 bg-white`}>
            <View>
                  {/* HEADER START */}
                  <View style={tailwind`flex-row items-center justify-between p-4 py-3`}>

                        <View style={tailwind`flex-row items-center gap-2`}>
                              <Image source={require('../assets/icons/pin.png')} style={tailwind`w-7 h-7`}/>
                              <Text style={tailwind`font-bold text-black`}>{userInfo.user.email}</Text>
                        </View>

                        <View style={tailwind`flex-row items-center gap-4`}>
                              <TouchableOpacity style={tailwind`bg-gray-200 p-2 rounded-lg`}>
                                          <Image source={require('../assets/icons/bell.png')} style={tailwind`w-5 h-5`}/>
                              </TouchableOpacity>
                        </View>
                  </View>
                  {/* HEADER END */}

                  {/* SEARCH BAR START */}
                  <View style={tailwind`p-2 px-4 flex-row items-center justify-between`}>
                        <View style={tailwind`flex-1 border border-2 border-gray-200 flex-row items-center gap-3 p-2 rounded-lg`}>
                              <Image source={require('../assets/icons/search.png')} style={tailwind`w-5 h-5`}/>
                              <TextInput placeholder='Search Food & Snacks' style={tailwind`flex-1 text-xs text-gray-600`}/>
                              <Image source={require('../assets/icons/mic.png')} style={tailwind`w-5 h-5`}/>
                        </View>

                        <View style={tailwind`bg-gray-200 p-2 rounded-lg ml-3`}>
                              <Image source={require('../assets/icons/slider.png')} style={tailwind`w-7 h-7`}/>
                        </View>
                  </View>
                  {/* SEARCH BAR END */}

            </View>

            <ScrollView style={tailwind`flex-1`} 
                         contentContainerStyle={{
                              paddingBottom: 50
               }}>
                  {/* ADVERT START */}
                  <View style={tailwind`w-full  overflow-hidden`}>
                        <View style={tailwind`w-[90%] mx-auto rounded-lg overflow-hidden`}>
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
                  <View style={tailwind`p-5 flex-1`}>
                      <View style={tailwind`flex-row justify-between items-center`}>
                            <Text style={tailwind`font-bold`}>Food Items</Text>
                            <Text style={tailwind`text-[#F39300] font-light text-xs`}>View All</Text>
                      </View>

                        <Category />
                  </View>
                  {/* CATEGORY END */}


                  <View style={tailwind`flex-1`}>
                        {foodCategories.map((myclass, index) => (
                              <View key={index} style={tailwind`mb-5`}>                                    
                                    <View style={tailwind`w-[90%] mx-auto flex-row justify-between items-start mb-1`}>
                                          <View>
                                                <Text style={tailwind`font-bold text-[15px] mb-1`}>{myclass.title}</Text>
                                                <Text style={tailwind`font-light text-xs text-gray-600`}>{myclass.description}</Text>
                                          </View>
                                          <TouchableOpacity>
                                                <Text style={tailwind`text-[#F39300] font-light text-xs`}>View All</Text>
                                          </TouchableOpacity>
                                    </View>

                                    {/* FOODLIST DISPLAY */}
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tailwind`w-[90%] mx-auto mr-5`}>
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