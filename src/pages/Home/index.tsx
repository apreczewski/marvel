import React, { useCallback, useRef, useState } from 'react';
import { uuid } from 'uuidv4';
import { useValues } from '../../hooks/values';
import { useUsers } from '../../hooks/users';

import { useTranslation } from 'react-i18next';
// import { formatNumber } from '../../utils/format';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';


import { FaAngleDoubleDown, FaAngleDoubleUp, FaPlus } from 'react-icons/fa'
import TagValue from '../../components/TagValue';

import {
  Wrapper, Container, Background, Header, ListTags, FirstItem,
  Division, BtnHide, Body, BtnAddUser,
  ListUsers
} from './styles';
import Input from '../../components/Input';
import CardUser from '../../components/CardUser';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isExpandHeader, setIsExpandHeader] = useState(false);
  const { values, addValue } = useValues();
  const { users, addUser } = useUsers();

  const { t } = useTranslation();

  const handleAddNewValue = useCallback(({ value }) => {
    console.log('value >> ', value);

    if (!!value) {
      addValue({ id: uuid(), value });
      formRef.current?.clearField('value');
    }
  }, [addValue]);

  const handleAddNewUser = useCallback(() => {
    addUser({ id: uuid() });
  }, [addUser]);

  const handleExpandHeader = useCallback((status) => {
    if (status) {
      setIsExpandHeader(true);
      return;
    }
    setIsExpandHeader(false);
    return;
  }, [])

  return (
    <Wrapper>
      <Background />
      <Container>
        <Header isExpandHeader={isExpandHeader}>
          <Form ref={formRef} onSubmit={handleAddNewValue}>
            <Input name="value" placeholder={t("add value")} />
          </Form>
          {values &&
            <ListTags>
              <FirstItem />
              {values.reverse().map((itemValue) => (
                <TagValue key={uuid()} {...itemValue} />
              ))}
            </ListTags>
          }
        </Header>
        <Division>
          <BtnHide onClick={() => handleExpandHeader(!isExpandHeader)}>
            {!isExpandHeader && <FaAngleDoubleDown size={10} />}
            {isExpandHeader && <FaAngleDoubleUp size={10} />}
            {/* <TotalValues>{`R$ ${formatCurrency(sumValues.toString(), 'BRL', 'pt-BR')}`}</TotalValues> */}
          </BtnHide>
        </Division>
        <Body isExpandHeader={isExpandHeader}>
          {users &&
            <ListUsers isExpandHeader={isExpandHeader}>
              {users.reverse().map((user) => (
                <CardUser key={uuid()} {...user} />
              ))}
            </ListUsers>
          }
          <BtnAddUser onClick={handleAddNewUser}>
            <FaPlus size={15} />
          </BtnAddUser>
        </Body>
        {/* <AnchorHider>
      <HideButtonFooter onClick={()=>handleExpandHeader(!isExpandHeader)}>
        {isExpandHeader ? (
          <FontAwesomeIcon icon={faAngleDoubleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDoubleDown} />
            )}
      </HideButtonFooter>
    </AnchorHider> */}
      </Container>
    </Wrapper>
  );
};

export default Home;
