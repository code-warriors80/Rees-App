// import Navigation from './navigation';

import AppStack from './stack/AppStack';
import { AuthProvider } from './context/AuthContext';
import {ActivityIndicator, View} from 'react-native'
import React, { useContext } from 'react';
import tailwind from 'twrnc';
import AppNav from './navigation/AppNav';

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}