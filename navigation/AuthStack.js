import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// All Screen
import HomeScreen from './screens/HomeScreen';
import FoodprofileScreen from './screens/FoodprofileScreen';
import CartScreen from './screens/CartScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LocationScreen from './screens/LocationScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default function AuthStack() {
  return (
               <NavigationContainer>
                              <Stack.Navigator screenOptions={{
                                             headerShown: false
                              }}>
                                             <Stack.Screen name="Welcome" component={WelcomeScreen} />
                                             <Stack.Screen name="Home" component={HomeScreen} options={{presentation: 'card'}}/>
                                             <Stack.Screen name="FoodProfile" component={FoodprofileScreen} options={{presentation: 'card'}} />
                                             <Stack.Screen name="Cart" component={CartScreen} options={{presentation: 'card'}}/>
                                             <Stack.Screen name="profile" component={ProfileScreen} options={{presentation: 'card'}}/>
                                             <Stack.Screen name="Location" component={LocationScreen} options={{presentation: 'modal'}}/>
                                             <Stack.Screen name="Password-Reset" component={ResetPasswordScreen} options={{presentation: 'modal'}}/>
                              </Stack.Navigator>
               </NavigationContainer>
  )
}