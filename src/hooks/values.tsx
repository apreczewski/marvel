import React, { createContext, useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface ValueProps {
  id: string,
  value: string,
  description?: string,
  usersIds?: string[],
  dividedValue?: string,
}

export interface ValuesProps {
  loading?: boolean,
  values?: ValueProps[],
  addValue(value: ValueProps): void,
  removeValue(id: string): void,
}

const ValuesContext = createContext<ValuesProps>({} as ValuesProps)

export const UsersProvider: React.FC = ({ children }) => {
  const [loading,
    // setLoading
  ] = useState(false);
  const [values, setValues] = useState<ValueProps[]>([]);

  const addValue = useCallback((value: ValueProps) => {
    if (!!value) {
      setValues([...values, value])
    }
  }, [values]);

  const removeValue = useCallback((id: string) => {
    if (!!id) {
      const newValues = values.filter(value => value.id !== id);
      setValues(newValues);
    }
  }, [values]);

  return (
    <ValuesContext.Provider value={{ loading, values, addValue, removeValue }}>
      {children}
    </ValuesContext.Provider>
  )
}

export const useValues = (): ValuesProps => {
  const context = useContext(ValuesContext);
  const { t } = useTranslation();

  if (!context) {
    throw new Error(t('useValues must be used within an valuesProps'))
  }

  return context;
}
