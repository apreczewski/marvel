import React, { useCallback, useEffect, useRef, useState } from 'react';
import { uuid } from 'uuidv4';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { ImSearch, } from 'react-icons/im'
import { RiAlertFill, } from 'react-icons/ri'
import ReactLoading from 'react-loading';

import {
  Wrapper, Container, Header, HeaderLeft,
  Body, Logo, List, AnchorInput, BtnSearch,
  NoAssets
} from './styles';

import Input from '../../components/inputs/InputToValue';
import Card from '../../components/Card';
import DropdownSelector from '../../components/DropdownSelector';

import { getListToType } from '../../services/endpoints'

export interface IUrl {
  type: string;
  url: string
}

export interface IAsset {
  id: string;
  urls: IUrl[];
  resourceURI: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  },
  description: string;
  type?: string;
}

interface ISignal {
  cancel(text: string): void;
}

const Home: React.FC = () => {
  const types = ['characters', 'comics', 'creators', 'events', 'series', 'stories']
  const formRef = useRef<FormHandles>(null);
  const [typeCurrent, setTypeCurrent] = useState(types[0]);
  const [assets, setAssets] = useState<IAsset[]>([]);
  const [loading, setLoading] = useState(true);

  const signal = useRef<ISignal>();

  const handleLoadData = useCallback(async ({ nameStartsWith = null, limit = 100, type }) => {
    const { call, source } = getListToType(type);

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

      const filterResults = results.map((result: IAsset) => {
        if (result.thumbnail.path.search('image_not_available') > 0) {
          return undefined
        }

        return result;
      }).filter((item: object) => item !== undefined)

      setAssets(filterResults);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const handleSearchName = useCallback((type) => {
    const text = formRef?.current?.getData();
    handleLoadData({ nameStartsWith: text?.textToSearch, type })
  }, [handleLoadData]);

  const handleChangeTypeCurrent = (text: string) => {
    handleLoadData({ type: text });
    setTypeCurrent(text);
  }

  useEffect(() => {
    handleLoadData({ type: typeCurrent });
  }, [handleLoadData, typeCurrent])

  useEffect(() => {
    return () => {
      signal.current && signal.current.cancel('Request Canceled');
    };
  }, [])

  return (
    <Wrapper>
      <Container>
        <Logo>
          <svg width="130" height="52" xmlns="http://www.w3.org/2000/svg"><rect fill="#EC1D24" width="100%" height="100%"></rect><path fill="#FEFEFE" d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"></path><path fill="#EC1D24" d="M0 0h30v52H0z"></path><path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg>
        </Logo>
        <Header>
          <HeaderLeft>
            <DropdownSelector
              types={types}
              typeCurrent={typeCurrent}
              handleSetTypeCurrent={handleChangeTypeCurrent}
            />
          </HeaderLeft>
          <Form ref={formRef} onSubmit={() => handleSearchName(typeCurrent)}>
            <AnchorInput>
              <Input name="textToSearch" />
              <BtnSearch type="submit" >
                <ImSearch size={20} />
              </BtnSearch>
            </AnchorInput>
          </Form>
        </Header>
        <Body loading={loading} >
          {loading && <ReactLoading type="bubbles" delay={500} color="#ed4326" height={'10%'} width={'10%'} />}
          {!assets.length && !loading && (
            <NoAssets>
              <RiAlertFill size={100} />
              <span>No Data</span>
            </NoAssets>
          )}
          {!!assets.length && !loading &&
            <List >
              {assets.map((asset) => {
                return <Card key={uuid()} type={typeCurrent} {...asset} />
              })}
            </List>
          }
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Home;



