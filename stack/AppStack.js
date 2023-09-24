import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// All Screen
import HomeScreen from '../screens/HomeScreen';
import FoodprofileScreen from '../screens/FoodprofileScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AboutScreen from '../screens/AboutScreen';
import LocationScreen from '../screens/LocationScreen';

export default function AppStack() {
  return (
               <NavigationContainer>
                              <Stack.Navigator screenOptions={{
                                             headerShown: false
                              }}>
                                             <Stack.Screen name="Welcome" component={WelcomeScreen} />
                                             <Stack.Screen name="Home" component={HomeScreen} options={{presentation: 'card'}}/>
                                             <Stack.Screen name="FoodProfile" component={FoodprofileScreen} options={{presentation: 'card'}} />
                                             <Stack.Screen name="Cart" component={CartScreen} options={{presentation: 'card'}}/>
                                             <Stack.Screen name="Checkout" component={CheckoutScreen} options={{presentation: 'modal'}}/>
                                             <Stack.Screen name="About" component={AboutScreen} options={{presentation: 'card'}}/>
                                             <Stack.Screen name="Location" component={LocationScreen} options={{presentation: 'modal'}}/>
                              </Stack.Navigator>
               </NavigationContainer>
  )
}