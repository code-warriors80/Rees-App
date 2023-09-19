import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

export default function LocationScreen() {
  return (
    <View>
      <Text>Location</Text>

      <View>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </View>
    </View>
  )
}