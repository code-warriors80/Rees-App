import { View, Text, TouchableOpacity, TextInput, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'twrnc'
import FIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/Feather'

export default function HomeScreen() {
  return (
    <SafeAreaView style={tailwind`flex-1`}>
          <View>
                <View style={tailwind`flex-row items-center justify-between p-4 py-3`}>

                    <View style={tailwind`flex-row items-center gap-2`}>
                          <FIcon name='map-pin' size={20} color='#FA5758'/>
                          <Text style={tailwind`font-bold text-[#FA5758]`}>Gulshan, Dhaka</Text>
                    </View>

                    <View style={tailwind`flex-row items-center gap-4`}>
                            <TouchableOpacity style={tailwind`bg-gray-200 p-2 rounded-lg`}>
                                <FIcon name='bell' size={20} color='#FA5758'/>
                            </TouchableOpacity>

                            <TouchableOpacity style={tailwind`bg-gray-200 p-2 rounded-lg`}>
                                    <FIcon name='grid' size={20} color='#FA5758'/>
                            </TouchableOpacity>
                    </View>
                </View>


                <View style={tailwind`p-2 px-4 flex-row items-center justify-between`}>
                      <View style={tailwind`flex-1 border border-2 border-gray-200 flex-row items-center gap-3 p-2 rounded-lg`}>
                              <FIcon name='search' size={20} color='gray'/>
                              <TextInput placeholder='Search Food & Snacks' style={tailwind`flex-1 text-xs text-green-700`}/>
                              <FIcon name='mic' size={20} color='gray'/>
                      </View>

                      <View style={tailwind`bg-[#FA5758] p-3 rounded-lg ml-3`}>
                          <FIcon name='sliders' size={20} color='white'/>
                      </View>

                </View>
          </View>

          <ScrollView style={tailwind`flex-1`}>
            {/* ADVERT */}
                <View style={tailwind`w-full  overflow-hidden`}>
                    <View style={tailwind`w-[90%] mx-auto rounded-lg overflow-hidden`}>
                        <Image source={require('../assets/h5-bg-countdown1.jpg')} style={tailwind` absolute w-full h-full`}/>
                        <View style={tailwind`my-auto py-4 px-7`}>
                                  <Text style={tailwind`text-white font-bold text-xs`}>Get Special Discount</Text>
                                  <Text style={tailwind`text-[#FA5758] text-xl font-extrabold`}>Up to 30%</Text>
                                  <TouchableOpacity style={tailwind`w-28 rounded-lg mt-2 py-3 flex items-center justify-center bg-[#FA5758]`}>
                                        <Text style={tailwind`text-white font-bold`}>Explore Now</Text>
                                  </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={tailwind`p-5 flex-1`}>
                      <View style={tailwind`flex-row justify-between items-center`}>
                            <Text style={tailwind`font-bold`}>Food Items</Text>
                            <Text style={tailwind`text-[#FA5758] font-bold`}>View All</Text>
                      </View>

                      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tailwind`my-5`}>
                              <TouchableOpacity style={tailwind`bg-[#FA5758] p-2 px-3 mr-3 rounded-lg`}>
                                    <View style={tailwind`rounded-lg mb-2`}>
                                                <Image source={require('../assets/icons/rice.png')} style={tailwind`mx-auto w-9 h-9`}/>
                                    </View>
                                    <Text style={tailwind`text-white text-xs text-center font-bold`}>Fast Food</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={tailwind`p-2 px-3 mr-3 rounded-lg`}>
                                    <View style={tailwind` rounded-lg mb-3`}>
                                          <Image source={require('../assets/icons/ice-cream.png')} style={tailwind`mx-auto w-9 h-9`}/>
                                    </View>
                                    <Text style={tailwind`text-black text-xs text-center font-bold`}>ice-cream</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={tailwind`p-2 px-3 mr-3 rounded-lg`}>
                                    <View style={tailwind`rounded-lg mb-3`}>
                                                <Image source={require('../assets/icons/hamburger.png')} style={tailwind`mx-auto w-9 h-9`}/>
                                    </View>
                                    <Text style={tailwind`text-black text-xs text-center font-bold`}>Snacks</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={tailwind`p-2 px-3 mr-3 rounded-lg`}>
                                    <View style={tailwind` rounded-lg mb-3`}>
                                          <Image source={require('../assets/icons/raspberry.png')} style={tailwind`mx-auto w-9 h-9`}/>
                                    </View>
                                    <Text style={tailwind`text-black text-xs text-center font-bold`}>Fruits</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={tailwind`p-2 px-3 mr-3 rounded-lg`}>
                                    <View style={tailwind` rounded-lg mb-3`}>
                                          <Image source={require('../assets/icons/pizza.png')} style={tailwind`mx-auto w-9 h-9`}/>
                                    </View>
                                    <Text style={tailwind`text-black text-xs text-center font-bold`}>Bakery</Text>
                              </TouchableOpacity>
                      </ScrollView>
                </View>
          </ScrollView>
    </SafeAreaView>
  )
}