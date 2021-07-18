import React, { useState, createContext, useContext } from 'react';
import { PASSWORD } from '../utils/env';
import { clear, setItem } from '../utils/storage';
import { generateToken, getToken } from '../utils/token';

export interface ILoginForm {
  password: string;
}

export interface IAuthContext {
  signed: boolean;
  token: string | null;
  login(password: string): boolean;
  logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const tokenStorage = getToken();

  const [token, setToken] = useState<string | null>(tokenStorage);


  function login(password: string): boolean {
    if (PASSWORD !== password) {
      return false;
    }

    const token = generateToken();

    setToken(token)
    setItem('token', token);
    return true;
  }

  async function logout() {
    setToken(null);
    clear();
  }

  return (
    <AuthContext.Provider value={{ signed: !!token, token: token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}