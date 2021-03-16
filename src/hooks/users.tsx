import React, { createContext, useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ValueProps } from './values'

export interface UserProps {
  id: string;
  name?: string,
  email?: string,
  values?: ValueProps[],
  sumTotal?: string,
}

export interface UsersProps {
  loading?: boolean,
  users?: UserProps[],
  addUser(user: UserProps): void,
  removeUser(id: string): void,
}

const UsersContext = createContext<UsersProps>({} as UsersProps)

export const UsersProvider: React.FC = ({ children }) => {
  const [loading,
    // setLoading
  ] = useState(false);
  const [users, setUsers] = useState<UserProps[]>([]);

  const addUser = (user: UserProps) => {
    setUsers([...users, user]);
  }

  const removeUser = useCallback((id: string) => {
    const newUsers = users.filter(user => user.id === id);
    setUsers(newUsers);
  }, [users])

  return (
    <UsersContext.Provider value={{ loading, users, addUser, removeUser }}>
      {children}
    </UsersContext.Provider>
  )
}

export const useUsers = (): UsersProps => {
  const context = useContext(UsersContext);
  const { t } = useTranslation();

  if (!context) {
    throw new Error(t('useUsers must be used within an usersProps'))
  }

  return context;
}
