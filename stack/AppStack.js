import "react-native-gesture-handler";

import AboutScreen from "../screens/AboutScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import FoodprofileScreen from "../screens/FoodprofileScreen";
import HomeScreen from "../screens/HomeScreen";
import LocationScreen from "../screens/LocationScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// All Screen









export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ presentation: "card" }}
        />
        <Stack.Screen
          name="FoodProfile"
          component={FoodprofileScreen}
          options={{ presentation: "card" }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ presentation: "card" }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ presentation: "card" }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ presentation: "card" }}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
