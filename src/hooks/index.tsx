import React from 'react';

import { ToastProvider } from './toast';
import { HomeProvider } from './home';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <HomeProvider>
      {children}
    </HomeProvider>
  </ToastProvider>
);

export default AppProvider;
