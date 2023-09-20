import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps';
import tailwind from 'twrnc';
import FIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

export default function LocationScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tailwind`flex-1 bg-white`}>
            <MapView
              style={tailwind`flex-1`}
              initialRegion={{
                latitude: 11.123145,
                longitude: 7.732165,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              }} mapType='standard'>
                            <Marker coordinate={{
                                             latitude: 11.123145,
                                             longitude: 7.732165,
                              }}
                              title="Ree's kitchen"
                              description='kitchen'
                              pinColor='orange'/>
            </MapView>
        <View style={tailwind`absolute flex-row items-center justify-between top-6 gap-5 py-4 px-5 `}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`bg-white p-2 rounded-full shadow-lg`}>
              <FIcon name='arrow-left' size={20} color='black'/>
            </TouchableOpacity>

            <View style={tailwind`flex-1 bg-white p-2 px-3 rounded-lg shadow`}>
                <TextInput placeholder='Search....'/>
            </View>
        </View>

      <View style={tailwind`p-5 px-6`}>
        <View >
          <View style={tailwind`flex-row items-center justify-between mb-5`}>
            <View style={tailwind`flex-row items-center gap-3`}>
              <Image source={require('../assets/icons/pin.png')} style={tailwind`w-5 h-5`}/>
              <View >
                <Text style={tailwind`font-bold`}>Samaru Zaria</Text>
                <Text style={tailwind`text-xs text-gray-500`}>Your Drlivery place</Text>
              </View>
            </View>
            <TouchableOpacity style={tailwind`bg-[#F39300] p-3 py-2 rounded-lg`}>
              <Text style={tailwind`text-white font-bold`}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={tailwind`flex-row items-center gap-3`}>
            <Image source={require('../assets/icons/clock.png')} style={tailwind`w-5 h-5`}/>
            <View >
              <Text style={tailwind`font-bold`}>20-30 Minutes</Text>
              <Text style={tailwind`text-xs text-gray-500`}>Arrival time</Text>
            </View>
          </View>
        </View>

        <View style={tailwind`bg-[#F39300] rounded-lg p-3 mt-4 flex-row items-center justify-between`}>
          <View style={tailwind`flex-row items-center gap-3`}>
              <Image source={require('../assets/3d-view-map.jpg')} style={tailwind`w-12 h-12 rounded-lg`}/>
              <View>
                <Text style={tailwind`font-bold text-white`}>John Smith</Text>
                <Text style={tailwind`text-xs text-gray-100`}>Food courier</Text>
              </View>
          </View>
          <View style={tailwind`flex-row items-center  gap-3`}>
            <TouchableOpacity style={tailwind`bg-white p-2 rounded-lg`}>
                  <Icon name='message1' size={20} color='#F39300'/>
            </TouchableOpacity>
            <TouchableOpacity style={tailwind`bg-white p-2 rounded-lg`}>
                  <FIcon name='phone-call' size={20} color='#F39300'/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}