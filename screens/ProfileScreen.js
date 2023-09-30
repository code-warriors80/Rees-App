import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import FIcon from "react-native-vector-icons/Feather";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { profile } from "../constant";
import tailwind from "twrnc";
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

// ICON

// TAILWIND

// NAVIGATION

// DATA

const ListItem = ({ title, text, children }) => {
  return (
    <View style={tailwind`pb-3`}>
      <Text style={tailwind`text-sm font-medium text-gray-400`}>{title}</Text>
      {text && (
        <Text style={tailwind`text-base font-semibold mt-1`}>{text}</Text>
      )}
      {children}
    </View>
  );
};

const ListLinkItem = ({ title, icon, link }) => {
  return (
    <TouchableOpacity
      style={tailwind`flex flex-row items-center justify-between py-2`} onPress={link}>
      <Text style={tailwind`text-base font-semibold`}>{title}</Text>

      <FIcon name={icon || "chevrons-right"} size={20} color="black" />
    </TouchableOpacity>
  );
};

export default function ProfileScreen() {
  const {userInfo, logout} = useContext(AuthContext)
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tailwind`flex-1 bg-white p-5`}>
      {/* HEADER START */}
      <View style={tailwind`flex-row items-center justify-between pb-3`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tailwind`bg-white p-2 rounded-full shadow-lg`}
        >
          <FIcon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>

        {/* <Text style={tailwind`text-[16px] font-bold mx-auto`}>Profile</Text> */}
      </View>
      {/* HEADER END */}

      {/* ABOUT START */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={profile.image} style={tailwind`w-40 h-40 mx-auto rounded-full`} />
          <Text style={tailwind`text-center text-lg font-bold`}>
            Account Details
          </Text>

          {/* <Text style={tailwind`text-center text-xs font-light text-gray-600`}>
            {profile.email}
          </Text> */}
        </View>

        <View
          style={tailwind`bg-white rounded-lg mt-8 pb-4 border-b border-zinc-200`}
        >
          <ListItem title="Username" text={userInfo.user.username} />
          <ListItem title="Email" text={userInfo.user.email} />
          <ListItem title="Phone" text={userInfo.user.mobile} />
          <ListItem title="Location">
            <View style={tailwind`flex-row items-center gap-2 my-2`}>
              <Image
                source={require("../assets/icons/pin.png")}
                style={tailwind`w-5 h-5`}
              />
              <Text style={tailwind`text-[#F39300] text-xs`}>
                {userInfo.user.address}
              </Text>
            </View>
          </ListItem>
        </View>

        <View style={tailwind`bg-white rounded-lg mt-5 pb-4`}>
          <ListLinkItem title="Payments" />
          <ListLinkItem title="Settings" />
          <ListLinkItem title="Password & security" link={() => navigation.navigate('Password-Reset')}/>
          <ListLinkItem title="Sign out" icon="log-out" link={() => logout()}/>
        </View>
      </ScrollView>

      {/* ABOUT END */}
    </SafeAreaView>
  );
}