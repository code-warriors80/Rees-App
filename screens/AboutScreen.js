import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// ICON
import FIcon from 'react-native-vector-icons/Feather'

// TAILWIND
import tailwind from 'twrnc'

// NAVIGATION
import { useNavigation } from '@react-navigation/native';

// DATA
import { about } from '../constant'

export default function AboutScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tailwind`flex-1 bg-white p-5`}>
        {/* HEADER START */}
        <View style={tailwind`flex-row items-center justify-between pb-3`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`bg-white p-2 rounded-full shadow-lg`}>
              <FIcon name='arrow-left' size={20} color='black'/>
            </TouchableOpacity>

            <Text style={tailwind`text-[16px] font-bold mx-auto`}>About Our Kitchen</Text>
        </View>
        {/* HEADER END */}

        {/* ABOUT START */}
        {about.map((abt, index) => {
            return(
              <ScrollView key={index} showsVerticalScrollIndicator={false}>
                  <View>
                      <Image source={abt.image} style={tailwind`w-50 h-50 mx-auto`}/>
                      <Text style={tailwind`text-center text-lg font-bold`}>{abt.name}</Text>
                      <Text style={tailwind`text-center text-xs font-light text-gray-600`}>{abt.email}</Text>
                  </View>

                  <View style={tailwind`my-7`}>
                      <Text style={tailwind`text-[16px] font-bold mb-5`}>Chefs</Text>

                      <ScrollView key={index} horizontal showsHorizontalScrollIndicator={false}>
                          {abt.chefs.map((chef, index) => (
                              <View key={index} style={tailwind`mr-5`}>
                                  <Image source={chef.image} style={tailwind`w-12 h-12 rounded-full mx-auto`}/>
                                  <Text style={tailwind`text-[10px] text-center mt-2`}>{chef.name}</Text>
                              </View>
                          ))}
                      </ScrollView>
                  </View>

                  <View style={tailwind`bg-white rounded-lg mt-4`}>
                      {abt.socials.map((social, index)=> (
                        <View key={index} style={tailwind`flex-row items-center justify-between py-3 border-b-[1px] border-gray-200`}>
                            <View style={tailwind` flex-row items-center gap-2`}>
                                <View style={tailwind`${social.bgcolor} p-2 rounded-full`}>
                                    {social.name}
                                </View>
                                <Text style={tailwind`font-bold text-[13px]`}>{social.title}</Text>
                            </View>
                            <Text style={tailwind`font-semibold text-[12px] text-gray-600`}>{social.value}</Text>
                        </View>
                      ))}
                  </View>

                  <View style={tailwind`mt-5`}>
                      <Text style={tailwind`text-[16px] font-bold`}>About</Text>
                      <Text style={tailwind`text-xs text-gray-600 mt-3`}>{abt.description}</Text>
                      <View style={tailwind`flex-row items-center gap-2 my-2`}>
                        <Image source={require('../assets/icons/pin.png')} style={tailwind`w-5 h-5`}/>
                        <Text style={tailwind`text-[#F39300] text-xs`}>{abt.address}</Text>
                      </View>
                  </View>
              </ScrollView>
            )
        })}
        {/* ABOUT END */}
    </SafeAreaView>
  )
}