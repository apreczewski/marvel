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

import { useHome } from '../../hooks/home';

import Input from '../../components/inputs/InputToValue';
import Card from '../../components/Card';
import DropdownSelector from '../../components/DropdownSelector';

const Search: React.FC = () => {
  const types = ['characters', 'comics', 'creators', 'events', 'series', 'stories']
  const formRef = useRef<FormHandles>(null);
  const [typeCurrent, setTypeCurrent] = useState(types[0]);

  const { assets, loading, handleLoadData, handleCancelSignal } = useHome();

  const handleSearchName = useCallback((type) => {
    const text = formRef?.current?.getData();

    if (!text) {
      console.log('error');
      return;
    }

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
      handleCancelSignal();
    };
  }, [])

  return (
    <Wrapper>
      <Container>
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
              <Input name="textToSearch" placeholder="Search" />
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

export default Search;



