import React, { createContext, useCallback, useContext, useState } from 'react';
// import { session } from '../services/endpoints/session'
import { uuid } from 'uuidv4';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthProps {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(): void;
  loadingSignIn: boolean;
}

const HomeContext = createContext<AuthProps>({} as AuthProps)

export const HomeProvider: React.FC = ({ children }) => {
  const [loadingSignIn, setLoadingSignIn] = useState(false);

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@calcexpert:token')
    const user = localStorage.getItem('@calcexpert:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  });

  const signIn = useCallback(async ({ email, password }) => {
    // const { apiCall } = session();


    try {
      setLoadingSignIn(true);
      // const response = await apiCall({
      //   email,
      //   password
      // })

      // const { token } = response.data;
      const token = uuid();

      localStorage.setItem('@calcexpert:token', token);

      // handleAccountDetails(token);
      setLoadingSignIn(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const signUp = useCallback(() => {
    localStorage.removeItem('@calcexpert:token');
    localStorage.removeItem('@calcexpert:user');

    setData({} as AuthState)
  }, []);


  return (
    <HomeContext.Provider value={{ user: data.user, signIn, signUp, loadingSignIn }}>
      {children}
    </HomeContext.Provider>
  )
}

export const useAuth = (): AuthProps => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProps')
  }

  return context;
}
