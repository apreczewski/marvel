import React from 'react';
import { AuthProvider } from './endpoints';
import { ToastProvider } from './toast';
import { HomeProvider } from './home';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
    <HomeProvider>
      {children}
    </HomeProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
