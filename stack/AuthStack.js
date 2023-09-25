import "react-native-gesture-handler";

import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// All Screen

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reset-Password" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
