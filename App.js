// import Navigation from './navigation';

import { AuthProvider } from './context/AuthContext';
import React from 'react';
import AppNav from './navigation/AppNav';

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}