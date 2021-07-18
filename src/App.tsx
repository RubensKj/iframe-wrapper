import React from 'react';
import AppProvider from './contexts';
import Routes from './routes';
import Global from './styles/global';

function App() {
  require('dotenv').config();

  return (
    <AppProvider>
      <Routes />
      <Global />
    </AppProvider>
  );
}

export default App;
