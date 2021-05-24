import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';

import { uuid } from 'uuidv4';

import { getListTypeById, getTypeById } from '../../services/endpoints'
import { IAsset } from '../Home';
import Card from '../../components/Card';

import { Wrapper, Left, Right, List, AnchorButtons, AnchorImg, BtnCustom } from './styles';

interface IUrl {
  id: string;
  type: string;
}

interface ITypes {
  [key: string]: string[];
}

export const types: ITypes = {
  characters: ['comics', 'events', 'series', 'stories'],
  comics: ['characters', 'creators', 'events', 'stories'],
  creators: ['comics', 'events', 'series', 'stories'],
  events: ['characters', 'comics', 'creators', 'series', 'stories'],
  series: ['characters', 'comics', 'creators', 'events', 'stories'],
  stories: ['characters', 'comics', 'creators', 'events', 'series'],
}

interface ISignal {
  cancel(text: string): void;
}

const Details: React.FC = () => {
  const [assetCurrent, setAssetCurrent] = useState<IAsset>();
  const [assets, /*setAssets*/] = useState<IAsset[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { id, type } = useParams<IUrl>();

  const signal = useRef<ISignal>();
  const signal0 = useRef<ISignal>();

  const handleLoadData = useCallback(async ({ nameStartsWith = null, limit = 50 }) => {
    const { call, source } = getTypeById(type, id);

    try {
      signal.current = source;
      setLoading(true);

      const {
        data: {
          data: { results },
        },
      } = await call({
        nameStartsWith,
        limit,
      });

      setAssetCurrent(results[0])
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id, type]);

  const handleLoadListTypeById = useCallback(async (typeCurrent, typeSearch, idCurrent) => {
    const { call, source } = getListTypeById(typeCurrent, typeSearch, idCurrent);

    try {
      signal0.current = source;
      setLoading(true);

      // const result = await call();
      await call();

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleLoadData({});
  }, [handleLoadData])

  useEffect(() => {
    return () => {
      signal.current && signal.current.cancel('Request Canceled');
      signal0.current && signal0.current.cancel('Request Canceled');
    };
  }, [])

  return (
    <Wrapper>
      {loading && <ReactLoading type="bubbles" delay={500} color="#ed4326" height={'10%'} width={'10%'} />}
      {!loading && (
        <>
          <Left loading={loading} >
            {assetCurrent && !loading && (
              <AnchorImg>
                <img src={`${assetCurrent.thumbnail.path}/portrait_uncanny.${assetCurrent.thumbnail.extension}`} alt={assetCurrent.name} />
                <span>{assetCurrent.name}</span>
                <p>{assetCurrent.description}</p>
              </AnchorImg>
            )}
          </Left>
          <Right>
            <AnchorButtons>
              {types[type].map((typeSearch) => (
                <BtnCustom key={uuid()} onClick={() => handleLoadListTypeById(type, typeSearch, id)}>
                  {typeSearch}
                </BtnCustom>
              ))}
            </AnchorButtons>
            {!assets.length && !loading &&
              <List>
                {assets.map((asset) => {
                  return <Card key={uuid()} type={type} {...asset} />
                })}
              </List>
            }
          </Right>
        </>
      )}
    </Wrapper>
  );
}

export default Details;
