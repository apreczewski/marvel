import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';

import AppProvider from './hooks';
import GlobalStyle from './styles/global';
import history from './services/history';

const App: React.FC = () => (
  <Router history={history}>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
