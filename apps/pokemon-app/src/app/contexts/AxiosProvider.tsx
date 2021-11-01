import axios, { AxiosInstance } from 'axios';
import { createContext, useContext, useMemo } from 'react';

export interface AxiosProviderProps {
  children: React.ReactElement;
}

export const AxiosContext = createContext<AxiosInstance | undefined>(undefined);

export const useAxios = () => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error('axios hook cannot be used outside of provider.');
  }
  return context;
};

const AxiosProvider = ({ children }: AxiosProviderProps) => {
  const value = useMemo(() => {
    const instance = axios.create({
      baseURL: '',
    });

    // interceptors

    return instance;
  }, []);

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};
