import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React,{useContext, useState} from 'react'
import { tailwind_classes } from '../styles/styles';

// MAP
import MapView, {Marker} from 'react-native-maps';

// TAILWIND
import tailwind from 'twrnc';

// ICON
import FIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/AntDesign'

// REDUX
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// CONTEXT
import { AuthContext } from '../context/AuthContext';

export default function LocationScreen() {
  const [address, setAddress] = useState('')
  const [isValidAddress, setIsValidAddress] = useState(false)
  const navigation = useNavigation()
  const {userInfo, UpdateUserData} = useContext(AuthContext)

  const handelCheckAddress = (text) => {
    setAddress(text)
    if(text == '')
    {
      setIsValidAddress(false)
    }
    else
    {
            // Check if the password contains at least one special character
            if (!/[$@$!%*?&]/.test(text)) {
              return setIsValidAddress(false);
            }

            return setIsValidAddress(true)
      
    }
    console.log(text);
  }

  return (
    <SafeAreaView style={tailwind`${tailwind_classes[1].safe_area}`}>
        {/* HEADER START */}
        <View style={tailwind`${tailwind_classes[2].header_vw}`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind`${tailwind_classes[2].header_lft_btn}`}>
              <FIcon name='arrow-left' size={17} color='black'/>
            </TouchableOpacity>

            <Text style={tailwind`${tailwind_classes[2].header_txt}`}>My Location</Text>
        </View>
        {/* HEADER END */}
        <MapView
              style={tailwind`${tailwind_classes[1].safe_area}`}
              initialRegion={{
                  latitude: userInfo.user.latitude,
                  longitude: userInfo.user.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01
              }} mapType='standard'>
              
              <Marker
                  coordinate={{
                      latitude: userInfo.user.latitude,
                      longitude: userInfo.user.longitude,
                  }}
                  title={userInfo.user.address}
                  description='Your Location'
                  pinColor='orange'
              />
        </MapView>

      <View style={tailwind`p-5 px-6`}>
        <View >
          <View style={tailwind`flex-row items-center justify-between mb-5`}>
              <View style={tailwind`flex-row items-center gap-3`}>
                  <Image source={require('../assets/icons/pin.png')} style={tailwind`w-5 h-5`}/>
                  <View style={tailwind``}>
                      <Text style={tailwind`font-bold`}>{userInfo.user.location} Zaria</Text>
                      <TextInput style={tailwind`flex-1 text-xs text-gray-500 w-55 ${isValidAddress ? 'bg-red-200' : ''}`} 
                      placeholder={userInfo.user.address} 
                      value={address} onChangeText={(text) => handelCheckAddress(text)}/>
                  </View>
              </View>
              <TouchableOpacity disabled={address == '' || isValidAddress ? true : false} style={tailwind`bg-[#F39300] p-3 py-2 rounded-lg`} onPress={() => UpdateUserData(address)}>
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