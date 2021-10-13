import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getList } from '../services/endpoints';

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


export interface IUrl {
  type: string;
  url: string
}

export interface IAsset {
  id: string;
  img: string;
  name: string;
  num: string;
  type: string[];
}

export interface ILoadData {
  nameStartsWith?: string,
  limit?: number,
  type: string;
}


export interface HomeProps {
  loading?: boolean,
  assets: IAsset[],
  loadingValores?: boolean,
  handleLoadData(): void,
  handleCancelSignal(): void,
}

interface ISignal {
  cancel(text: string): void;
}

const HomeContext = createContext<HomeProps>({} as HomeProps)

export const HomeProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState<IAsset[]>([]);

  const signal = useRef<ISignal>();

  const handleLoadData = useCallback(async () => {
    const { call, source } = getList();

    try {
      signal.current = source;
      setLoading(true);

      const { data: { pokemon: assets } } = await call() || [];

      setAssets(assets);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);



  const handleCancelSignal = () => {
    signal.current && signal.current.cancel('Request Canceled');
  }

  return (
    <HomeContext.Provider value={{
      loading,
      assets,
      handleLoadData,
      handleCancelSignal,
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
