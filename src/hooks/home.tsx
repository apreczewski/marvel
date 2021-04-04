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


  const removeValueFromValues = useCallback((valueId: string) => {
    if (!!valueId) {

      const newValues = values.filter(value => {
        if(value.id === valueId ){
          const { usersIds } = value;

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

  const listUserRemoveUserIdValueId = useCallback((valueId, userId) => {
    const newUsers = users.map(user => {

      //remove value from user list values
      if(user.id === userId){
        const { values: valuesCurrent } = user;

        const newValuesCurrent = valuesCurrent?.filter(value => value.id !== valueId);

        return {...user, values: newValuesCurrent};
      }

      return user;
    })

    return newUsers;
  }, [users])


  const listValueRemoveUserIdValueId = useCallback((valueId, userId) => {
    const newValues = values.map(value => {
      if(value.id === valueId){
        const { usersIds } = value;

        const newUsersIds = usersIds?.filter(id => id !== userId);

        if(newUsersIds !== undefined){
          let dividedValue = (parseFloat(value.value)/newUsersIds?.length).toString();

          return {
            ...value,
            dividedValue,
            usersIds: newUsersIds
          };
        }
      }

      return value;
    }).filter(value => value !== undefined);

    return newValues;
  }, [values]);


  const listUserlistValueRecalculate = useCallback((listUsers, valueId, valueRelaculated) => {
    const newListUserNewListValue = listUsers.map((user: UserProps)  => {
      const newValues = user.values?.map(value => {
        if(valueId === value.id && valueRelaculated?.dividedValue !== undefined){
          return {...value, value: valueRelaculated?.dividedValue}
        }

        return value;
      });

      return {...user, values: newValues}
    })

    return newListUserNewListValue;
  },[])

  const removeValueFromUser = useCallback((valueId, userId) => {

    const newUsers = listUserRemoveUserIdValueId(valueId, userId);
    setUsers(newUsers);

    const valueFinded = values.find(value => value.id === valueId);

    if(valueFinded?.usersIds?.length === 1){
      removeValueFromValues(valueId)
      return;
    }

    const newValues = listValueRemoveUserIdValueId(valueId, userId)
    setValues(newValues);

    // recalc value and set new value on users
    const valueRelaculated = newValues.find(value => value.id === valueId)

    const newListUserNewListValueRecalculate = listUserlistValueRecalculate(newUsers, valueId, valueRelaculated);

    setUsers(newListUserNewListValueRecalculate);

    return newListUserNewListValueRecalculate;

  }, [values, removeValueFromValues, listUserRemoveUserIdValueId, listValueRemoveUserIdValueId, listUserlistValueRecalculate]);


  const updateValuesOfListFromUser = useCallback((userCurrent, listValuesCurrent) => {
    const newListValueToUser = userCurrent?.values?.map((value: ValueProps) => {

      const valueFiltered = listValuesCurrent?.find((newValue: ValueProps) => newValue.id === value.id);

      if(valueFiltered !== undefined){
        return {...value, value: valueFiltered.dividedValue};
      }

      return value;
    });

    return newListValueToUser;
  }, []);

  const removeUser = useCallback((userId: string) => {
    let newListValues: ValueProps[] = values
    const userDelete = users.find(user => user.id === userId);

    //check if the last user to value
    userDelete?.values?.forEach(value => {
      const valueFinded = newListValues.find(valueFind => valueFind.id === value.id);

      if(valueFinded?.usersIds?.length === 1){
        newListValues = newListValues.filter(valueFilter => valueFilter.id !== value.id);
      }
    })

    //remove user of list values
    newListValues = newListValues.map(value => {
      const hasUser = value.usersIds?.find(user => user === userId);

      if(hasUser){
        const newUsersIds = value.usersIds?.filter(user => user !== userId);

        if(newUsersIds !== undefined){
          let dividedValue = (parseFloat(value.value)/newUsersIds?.length).toString();

          return {
            ...value,
            dividedValue,
            usersIds: newUsersIds
          };
        }

        return {...value, usersIds: newUsersIds}
      }

      return value;
    })
    setValues(newListValues);

    //remove user of list values
    const usersFiltered = users.filter(user => user.id !== userId);

     //add new values to users
    const newUsers = usersFiltered.map(user => {

      if(user !== undefined && user.values !== undefined){
        const newListValueToUser = updateValuesOfListFromUser(user, newListValues)

        return {...user, values: newListValueToUser };
      }
      return user;
    }).filter(item => item !== undefined);
    setUsers(newUsers);

  }, [users, values, updateValuesOfListFromUser])

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
