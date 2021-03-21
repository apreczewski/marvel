import React, { createContext, useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface ValueProps {
  id: string,
  value: string,
  description?: string,
  usersIds?: string[],
  dividedValue?: string,
}

export interface UserProps {
  id: string;
  name?: string,
  email?: string,
  values?: ValueProps[],
  sumTotal?: string,
}

export interface HomeProps {
  loadingValores?: boolean,
  values?: ValueProps[],
  addValue(valueCurrent: ValueProps): void,
  removeValue(id: string): void,

  loadingUser?: boolean,
  users?: UserProps[],
  addUser(user: UserProps): void,
  removeUser(id: string): void,
  addValueToUser(idUser: string, valueDivided: ValueProps): void,
  addValueAllUsers(valueDivided: ValueProps): void,
}

const HomeContext = createContext<HomeProps>({} as HomeProps)

export const HomeProvider: React.FC = ({ children }) => {
  const [loadingValores, setLoadingValores] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);
  const [values, setValues] = useState<ValueProps[]>([]);
  const [users, setUsers] = useState<UserProps[]>([]);

  const addUser = useCallback((user: UserProps) => {
    setUsers([...users, user]);
  }, [users, values]);

  const removeUser = useCallback((id: string) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }, [users])

  const addValueToUser = useCallback((idUser, valueDivided) => {
    const newUsers = users.map(user => {
      if(user.id === idUser && !!valueDivided){
        if(!!user?.values){
          return {...user, values: [...user.values, valueDivided ]};
        }
        return {...user, values: [ valueDivided ]};
      }
      return user;
    });

    setUsers(newUsers);
  }, [users]);

  const addValueAllUsers = useCallback((valueDivided) => {
      const newUsers = users.map(user => {
        if(!!valueDivided){
          if(!!user?.values){
            return {...user, values: [...user.values, valueDivided ]};
          }
          return {...user, values: [ valueDivided ]};
        }
        return user;
      });

      setUsers(newUsers);
  }, [users, addValueToUser]);

  const addValue = useCallback((valueCurrent: ValueProps) => {
    if (!!valueCurrent && parseFloat(valueCurrent.value) > 0) {
      setValues([...values, valueCurrent]);
    }
  }, [values, addValueAllUsers, users]);

  const removeValue = useCallback((id: string) => {
    if (!!id) {
      const newValues = values.filter(value => value.id !== id);
      setValues(newValues);
    }
  }, [values]);

  return (
    <HomeContext.Provider value={{
      loadingValores,
      values,
      addValue,
      removeValue,
      loadingUser,
      users,
      addUser,
      removeUser,
      addValueToUser,
      addValueAllUsers
    }}>
      {children}
    </HomeContext.Provider>
  )
}

export const useHome = (): HomeProps => {
  const context = useContext(HomeContext);
  const { t } = useTranslation();

  if (!context) {
    throw new Error(t('useHome must be used within an homeProps'))
  }

  return context;
}
