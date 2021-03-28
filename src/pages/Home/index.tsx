import React, { useCallback, useRef, useState } from 'react';
import { uuid } from 'uuidv4';
import { useHome } from '../../hooks/home';

import { useTranslation } from 'react-i18next';
import { formatValue } from '../../utils/format';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';


import { FaAngleDoubleDown, FaAngleDoubleUp, FaPlus } from 'react-icons/fa'
import TagValue from '../../components/TagValue';

import {
  Wrapper, Container, Background, Header, ListTags, FirstItem,
  Division, BtnHide, Body, BtnAddUser, TotalValues,
  ListUsers
} from './styles';
import Input from '../../components/Input';
import CardUser from '../../components/CardUser';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isExpandHeader, setIsExpandHeader] = useState(false);
  const { values, addValue, users, addUser, addValueAllUsers, removeValueFromValues } = useHome();

  const { t } = useTranslation();

  const handleAddNewValue = useCallback(({ value }) => {
    const id = uuid();
    let dividedValue = '';

    if(!!users && !!value){
      dividedValue = (parseFloat(value)/users.length).toString();
      addValueAllUsers({ id, value: dividedValue });
    }

    const usersCurrent = users?.map(user => user.id);

    if (!!value) {
      addValue({ id, value, usersIds: usersCurrent, description: '', dividedValue });
      formRef.current?.clearField('value');
    }

  }, [addValue, addValueAllUsers, users]);

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

  const getValueTotal = useCallback(()=>{
    let sum = 0;
    values?.forEach(value => sum += parseFloat(value.value))
    return sum;
  },[values])

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
              {values.map((valueCurrent) => (
                <TagValue key={uuid()} valueCurrent={valueCurrent} handleRemove={() => removeValueFromValues(valueCurrent.id)} />
              ))}
            </ListTags>
          }
        </Header>
        <Division>
          <BtnHide onClick={() => handleExpandHeader(!isExpandHeader)}>
            {!isExpandHeader && <FaAngleDoubleDown size={10} />}
            {isExpandHeader && <FaAngleDoubleUp size={10} />}
          </BtnHide>
          <TotalValues>{formatValue({value: getValueTotal().toString()})}</TotalValues>
        </Division>
        <Body isExpandHeader={isExpandHeader}>
          {!!users &&
            <ListUsers isExpandHeader={isExpandHeader}>
              {users.map((user) => {
                return  <CardUser key={uuid()} {...user} />
              }
              )}
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
