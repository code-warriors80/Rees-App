import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// All Screen
import HomeScreen from './screens/HomeScreen';
import FoodprofileScreen from './screens/FoodprofileScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LocationScreen from './screens/LocationScreen';

export default function Navigation() {
  return (
               <NavigationContainer>
                              <Stack.Navigator screenOptions={{
                                             headerShown: false
                              }}>
                                             <Stack.Screen name="Welcome" component={WelcomeScreen} />
                                             <Stack.Screen name="Home" component={HomeScreen} />
                                             <Stack.Screen name="FoodProfile" component={FoodprofileScreen} />
                                             <Stack.Screen name="Cart" component={CartScreen} />
                                             <Stack.Screen name="Checkout" component={CheckoutScreen} />
                                             <Stack.Screen name="Location" component={LocationScreen} />
                                             <Stack.Screen name="Profile" component={ProfileScreen} />
                              </Stack.Navigator>
               </NavigationContainer>
  )
}