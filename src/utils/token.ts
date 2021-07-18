import { PASSWORD } from './env';
import { getItem } from './storage';

export const generateToken = (): string => {
  return PASSWORD ? PASSWORD : "";
}

export const getToken = (): string | null => {
  const tokenStorage = getItem('token');

  if (PASSWORD !== tokenStorage) {
    return null;
  }

  return tokenStorage && tokenStorage !== 'undefined' ? tokenStorage : null;
}