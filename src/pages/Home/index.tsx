import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { ImSearch } from 'react-icons/im';
import ReactLoading from 'react-loading';

import {
  Wrapper,
  Header,
  Body,
  BtnSearch,
  FormSearch,
  NoAssets,
  List,
} from './styles';

import { IAsset, useHome } from '../../hooks/home';
import { Inputdefault } from '../../components/inputs/InputDefault';
import { CardDefault } from '../../components/cards/CardDefault';
import { formatString } from '../../utils/format'
import { RiAlertFill } from 'react-icons/ri';


const Home: React.FC = () => {
  const { assets, loading, handleLoadData } = useHome();
  const [assetsCurrent, setAssetsCurrent] = useState<IAsset[]>([])

  const formRef = useRef<FormHandles>(null);

  const handleSearchTerm = useCallback((assetsCurrentSearch: IAsset[]) => {
    const term = formatString(formRef?.current?.getData()?.textToSearch).toLocaleLowerCase();

    if (!term) {
      console.log('error');
      return;
    }

    const newList = assetsCurrentSearch.filter((asset: IAsset) => {
      const name = formatString(asset.name.toLocaleLowerCase());
      const num = formatString(asset.num.toLocaleLowerCase());

      console.log(name.search(term))

      if (name === term || name.search(term) > -1) {
        return asset;
      }

      if (num === term || num.search(term) > -1) {
        return asset;
      }
    });

    setAssetsCurrent(newList)
    formRef?.current?.clearField('textToSearch');
  }, [])

  useEffect(() => {
    handleLoadData();
  }, [])

  useEffect(() => {
    setAssetsCurrent(assets);
  }, [assets])

  return (
    <Wrapper>
      <Header>
        <span>Pokédex</span>
      </Header>
      <Body>
        <FormSearch ref={formRef} onSubmit={() => handleSearchTerm(assets)}>
          <Inputdefault name="textToSearch" placeholder="Search" />
          <BtnSearch type="submit" >
            <ImSearch size={20} />
          </BtnSearch>
        </FormSearch>
        {loading && <ReactLoading type="bubbles" delay={500} color="#ed4326" height={'10%'} width={'10%'} />}
        {!assetsCurrent.length && !loading && (
          <NoAssets>
            <RiAlertFill size={100} />
            <span>No Data</span>
          </NoAssets>
        )}
        {!!assetsCurrent.length && !loading &&
          <List >
            {assetsCurrent.map((asset) => {
              return <CardDefault key={asset.id} {...asset} />
            })}
          </List>
        }
      </Body>
    </Wrapper>
  );
}

export default Home;
