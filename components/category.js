import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { categories } from '../constant'
import tailwind from 'twrnc'

export default function Category() {
  const [activeCategory,  setActiveCategory] = useState(null)
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tailwind`my-5`}>
      {categories.map((items, index) => {
              let isActive = items.id == activeCategory;
              let btnClass = isActive ? 'bg-gray-200 p-2 rounded-lg' : 'bg-white';
              let textClass = isActive ? 'font-bold text-gray-800' : 'font-semibold text-gray-500'
              return (
                <TouchableOpacity key={index} style={tailwind`p-2 px-3 mr-3 rounded-lg`} onPress={() => setActiveCategory(items.id)}>
                    <View style={tailwind`rounded-lg mb-2 p-2 ${btnClass}`}>
                        <Image source={items.image} style={tailwind`mx-auto w-9 h-9`}/>
                    </View>
                    <Text style={tailwind`text-gray-600 text-xs text-center font-light ${textClass}`}>{items.name}</Text>
                </TouchableOpacity>
              )
})}
    </ScrollView>
  )
}