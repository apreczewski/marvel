import React, { useState, useCallback, useContext, createContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  client: string;
  uid: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface EndpointsContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const EndpointsContext = createContext<EndpointsContextData>(
  {} as EndpointsContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@WebCompany:token');
    const client = localStorage.getItem('@WebCompany:client');
    const uid = localStorage.getItem('@WebCompany:uid');
    const user = localStorage.getItem('@WebCompany:user');

    if (token && client && uid && user) {
      api.defaults.headers = {
        'access-token': token,
        client,
        uid,
      };

      return { token, client, uid, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  // const [listEnterprises, setListEnterprises] = useState<EnterpriseData[]>([]);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/auth/sign_in', { email, password });

    const { 'access-token': token, client, uid } = response.headers;
    localStorage.setItem('@WebCompany:token', token);
    localStorage.setItem('@WebCompany:client', client);
    localStorage.setItem('@WebCompany:uid', uid);

    const { investor: user } = response.data;
    localStorage.setItem('@WebCompany:user', JSON.stringify(user));

    api.defaults.headers = {
      'access-token': token,
      client,
      uid,
    };

    setData({ token, client, uid, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@WebCompany:token');
    localStorage.removeItem('@WebCompany:client');
    localStorage.removeItem('@WebCompany:uid');
    localStorage.removeItem('@WebCompany:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@WebCompany:user', JSON.stringify(user));

      setData({
        token: data.token,
        client: data.client,
        uid: data.uid,
        user,
      });
    },
    [setData, data.token, data.client, data.uid],
  );

  return (
    <EndpointsContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </EndpointsContext.Provider>
  );
};

export function useEndpoints(): EndpointsContextData {
  const context = useContext(EndpointsContext);

  if (!context)
    throw new Error('useEndpoints must be used within an AuthProvider');

  return context;
}
