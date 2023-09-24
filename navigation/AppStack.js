import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// All Screen
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

export default function AppStack() {
  return (
               <NavigationContainer>
                              <Stack.Navigator screenOptions={{
                                             headerShown: false
                              }}>
                                            <Stack.Screen name="Register" component={RegisterScreen} />
                                            <Stack.Screen name="Login" component={LoginScreen} />
                              </Stack.Navigator>
               </NavigationContainer>
  )
}