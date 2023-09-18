import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FIcon from 'react-native-vector-icons/Feather'
import tailwind from 'twrnc'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps'

export default function AboutScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tailwind`flex-1 bg-white p-5`}>

        <View style={tailwind`flex-row items-center justify-between pb-3`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`bg-gray-200 p-2 rounded-full shadow-sm`}>
              <FIcon name='arrow-left' size={20} color='black'/>
            </TouchableOpacity>

            <Text style={tailwind`text-[16px] font-bold mx-auto`}>About Our Kitchen</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Image source={require('../assets/5526265.jpg')} style={tailwind`w-50 h-50 mx-auto`}/>
              <Text style={tailwind`text-center text-lg font-bold`}>Ree's Kitchen</Text>
              <Text style={tailwind`text-center text-xs font-light text-gray-600`}>@Ree's_Kitchen</Text>
            </View>

            {/* <View style={tailwind`my-7`}>
                  <Text style={tailwind`text-[16px] font-bold mb-5`}>Chefs</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={tailwind`mr-5`}>
                        <Image source={require('../assets/1.jpg')} style={tailwind`w-12 h-12 rounded-full mx-auto`}/>
                        <Text style={tailwind`text-[10px] text-center mt-2`}>Samuel Tobi</Text>
                    </View>

                    <View style={tailwind`mr-5`}>
                        <Image source={require('../assets/2.jpg')} style={tailwind`w-12 h-12 rounded-full mx-auto`}/>
                        <Text style={tailwind`text-[10px] text-center mt-2`}>Rejoice Mike</Text>
                    </View>

                    <View style={tailwind`mr-5`}>
                        <Image source={require('../assets/3.jpg')} style={tailwind`w-12 h-12 rounded-full mx-auto`}/>
                        <Text style={tailwind`text-[10px] text-center mt-2`}>Sandra Sam</Text>
                    </View>

                    <View style={tailwind`mr-5`}>
                        <Image source={require('../assets/2.jpg')} style={tailwind`w-12 h-12 rounded-full mx-auto`}/>
                        <Text style={tailwind`text-[10px] text-center mt-2`}>Tomi Silas</Text>
                    </View>
                  </ScrollView>
            </View> */}

      <View style={tailwind`bg-white rounded-lg mt-4`}>

          <View style={tailwind`flex-row items-center justify-between py-3`}>
            <View style={tailwind`flex-row items-center gap-2`}>
                <View style={tailwind`bg-blue-500 p-2 rounded-full`}>
                    <FIcon name='facebook' size={15} color='white'/>
                </View>
                <Text style={tailwind`font-bold text-[13px]`}>Facebook</Text>
            </View>
            <Text style={tailwind`font-semibold text-[12px] text-gray-600`}>Ree's Kitchen</Text>
          </View>

          <View style={tailwind`flex-row items-center justify-between py-3 border-t-[1px] border-b-[1px] border-gray-200`}>
              <View style={tailwind`flex-row items-center gap-2`}>
                  <View style={tailwind`bg-[#FA5758] p-2 rounded-full`}>
                      <FIcon name='instagram' size={15} color='white'/>
                  </View>
                  <Text style={tailwind`font-bold text-[13px]`}>Instagram</Text>
              </View>
              <Text style={tailwind`font-semibold text-[12px] text-gray-600`}>Ree's Kitchen</Text>
          </View>

          <View style={tailwind`flex-row items-center justify-between py-3`}>
              <View style={tailwind`flex-row items-center gap-2`}>
                  <View style={tailwind`bg-green-500 p-2 rounded-full`}>
                      <FIcon name='phone' size={15} color='white'/>
                  </View>
                  <Text style={tailwind`font-bold text-[13px]`}>Contact</Text>
              </View>
              <Text style={tailwind`font-semibold text-[12px] text-gray-600`}>08116934763</Text>
          </View>
      </View>

            <View style={tailwind`mt-5`}>
              <Text style={tailwind`text-[16px] font-bold`}>About</Text>
              <Text style={tailwind`text-xs text-gray-600 mt-3`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, ipsum nostrum doloribus 
                iure neque voluptates numquam nesciunt aperiam impedit quas et repudiandae voluptas error at 
                saepe exercitationem, repellat ipsam. Sunt.
              </Text>
              <View style={tailwind`flex-row items-center gap-2 my-2`}>
                <Image source={require('../assets/icons/pin.png')} style={tailwind`w-5 h-5`}/>
                <Text style={tailwind`text-[#FA5758] text-xs`}>Sabon Gari Zaria Kaduna State</Text>
              </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}