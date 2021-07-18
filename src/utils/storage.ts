import SecureLS from "secure-ls";
import { SECRET_KEY } from "./env";

export const secureLs = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: SECRET_KEY
});

export const getItem = (key: string): string | null => {
  return secureLs.get(key);
}

export const setItem = (key: string, data: string): void => {
  secureLs.set(key, data);
}

export const clear = (): void => {
  secureLs.clear();
}