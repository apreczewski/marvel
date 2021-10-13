import React from 'react';

import { HomeProvider } from './home';

const AppProvider: React.FC = ({ children }) => (
  <HomeProvider>
    {children}
  </HomeProvider>
);

export default AppProvider;
