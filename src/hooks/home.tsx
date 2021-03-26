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
  removeValueFromUser(valueId: string, userId: string): void;
  removeValueFromValues(valueId: string): void,
  updateValue(valueId: string, userId: string): void,

  loadingUser?: boolean,
  users?: UserProps[],
  addUser(user: UserProps): void,
  removeUser(userId: string): void,
  addValueToUser(idUser: string, valueDivided: ValueProps): void,
  addValueAllUsers(valueDivided: ValueProps): void,
}

const HomeContext = createContext<HomeProps>({} as HomeProps)

export const HomeProvider: React.FC = ({ children }) => {
  const [loadingValores,
    // setLoadingValores
  ] = useState(true);
  const [loadingUser,
    // setLoadingUser
  ] = useState(true);
  const [values, setValues] = useState<ValueProps[]>([]);
  const [users, setUsers] = useState<UserProps[]>([]);

  const addUser = useCallback((user: UserProps) => {
    setUsers([...users, user]);
  }, [users]);

  const removeUser = useCallback((userId: string) => {
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }, [users])

  const updateValue = useCallback((valueId, userId, description?, dividedValue?) => {
    const newValues = values.map(value => {
      if(valueId === value.id && !!value?.usersIds){
        return {...value, description,
          dividedValue, usersIds: [...value.usersIds, userId]}
      }
      return value
    })

    setValues(newValues);
  }, [values])

  const addValueToUser = useCallback((userId, valueDivided) => {
    const newUsers = users.map(user => {
      if(user.id === userId && !!valueDivided){
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
  }, [users]);

  const addValue = useCallback((valueCurrent: ValueProps) => {
    if (!!valueCurrent && parseFloat(valueCurrent.value) > 0) {
      setValues([...values, valueCurrent]);
    }
  }, [values]);

  const removeValueFromUser = useCallback((valueId: string, userId: string) => {

    // console.log('valueId >> userId >> ', valueId, userId);

    const newUsers = users.map(user => {

      if(user.id === userId){
        const { values: valuesCurrent } = user;

        //remove the userId from list values
        let dividedValue = '';

        const newListValues = values.map(value => {

          if(value.id === valueId){
            const { usersIds } = value;

            const newUsersIds = usersIds?.filter(id => id !== userId);

            if(newUsersIds !== undefined){
              dividedValue = (parseFloat(value.value)/newUsersIds?.length).toString()
              return {
                ...value,
                dividedValue,
                usersIds: newUsersIds
              };
            }
          }

          return value;
        })

        console.log('newListValues >> ', newListValues)
        setValues(newListValues);

        //remove value of user
        const newValuesCurrent = valuesCurrent?.filter(value => value.id !== valueId)


        return {...user, values: newValuesCurrent};
      }


      //update values

      return user;
    })

    // console.log('newUsers >> ', newUsers);
    setUsers(newUsers);
  }, [users, values]);

  const removeValueFromValues = useCallback((valueId: string) => {
    if (!!valueId) {

      const newValues = values.filter(value => {
        if(value.id === valueId ){
          const { usersIds,  } = value;

          const newUsers = users.map(user => {
            if(usersIds?.includes(user.id)){
              const { values } = user;
              const newValues = values?.filter(value => value.id !== valueId)

              return {...user, values: newValues }
            }

            return user;
          })

          setUsers(newUsers);
          return undefined;
        }

        return value;
      }).filter(value => value !== undefined);

      setValues(newValues);
    }
  }, [values, users]);

  return (
    <HomeContext.Provider value={{
      loadingValores,
      values,
      addValue,
      removeValueFromUser,
      removeValueFromValues,
      updateValue,
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
