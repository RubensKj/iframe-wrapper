import React from 'react';

// Providers
import { AuthProvider } from './AuthProvider';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

export default AppProvider;