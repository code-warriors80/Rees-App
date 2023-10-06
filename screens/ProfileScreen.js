import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { tailwind_classes } from '../styles/styles'

// DATA
import { profile } from "../constant";

// ICON
import FIcon from "react-native-vector-icons/Feather";

// TAILWIND
import tailwind from "twrnc";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

// CONTEXT
import { AuthContext } from '../context/AuthContext'

const ListItem = ({ title, text, children }) => {
  return (
    <View style={tailwind`pb-3 ${tailwind_classes[5].flex_item}`}>
      <Text style={tailwind`text-sm font-bold`}>{title}</Text>
      {text && (
        <Text style={tailwind`text-xs font-light text-gray-400`}>{text}</Text>
      )}
      {children}
    </View>
  );
};

const ListLinkItem = ({ title, icon, link }) => {
  return (
    <TouchableOpacity
      style={tailwind`${tailwind_classes[5].flex_item} py-2`} onPress={link}>
      <Text style={tailwind`text-sm font-bold`}>{title}</Text>

      <FIcon name={icon || "chevrons-right"} size={20} color="black" />
    </TouchableOpacity>
  );
};

export default function ProfileScreen() {
  const {userInfo, logout} = useContext(AuthContext)
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tailwind`${tailwind_classes[1].safe_area}`}>
      {/* HEADER START */}
      <View style={tailwind`${tailwind_classes[2].header_vw}`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tailwind`${tailwind_classes[2].header_lft_btn}`}
        >
          <FIcon name="arrow-left" size={17} color="black" />
        </TouchableOpacity>
      </View>
      {/* HEADER END */}

      {/* ABOUT START */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={profile.image} style={tailwind`w-40 h-40 mx-auto rounded-full`} />
          <Text style={tailwind`text-center text-lg font-bold my-5`}>
            Account Details
          </Text>

          {/* <Text style={tailwind`text-center text-xs font-light text-gray-600`}>
            {profile.email}
          </Text> */}
        </View>

        <View
          style={tailwind`p-5 ${tailwind_classes[5].page_vw, tailwind_classes[5].bord}`}
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

        <View style={tailwind`${tailwind_classes[5].page_vw}`}>
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
