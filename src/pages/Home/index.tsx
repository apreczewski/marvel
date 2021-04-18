import React, { useCallback, useRef, useState } from 'react';
import { uuid } from 'uuidv4';
import { useHome } from '../../hooks/home';

import { useTranslation } from 'react-i18next';
import { formatValue } from '../../utils/format';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Modal from '../../components/Modal';

import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa'
import { ImUserPlus, ImUser } from 'react-icons/im'
import TagValue from '../../components/TagValue';

import {
  Wrapper, Container, Header, HeaderLeft, Profile, Background, AnchorListTags, ListTags,
  Division, BtnHide, Body, BtnAddUser, TotalValues,
  ListUsers
} from './styles';
import Input from '../../components/inputs/InputToValue';
import CardUser from '../../components/CardUser';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isExpandHeader, setIsExpandHeader] = useState(false);
  const { values, addValue, users, addUser, addValueAllUsers, removeValueFromValues } = useHome();
  const [auth,
    // setAuth
  ] = useState(false);

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
      <Profile>
        {!auth && <ImUser size={15} />}
        {auth && <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFKwwmfM08O4A/profile-displayphoto-shrink_200_200/0/1590517310562?e=1622678400&v=beta&t=gmp6bAnPSPkQmDSpmNMX1GkTTABTOKVlv56EIjoXFYA" alt="imageProfile"/>}
      </Profile>
      <Modal isOpen={true} ><h1>test</h1></Modal>
      <Container>
        <Header>
          <Form ref={formRef} onSubmit={handleAddNewValue}>
            <Input name="value" placeholder={t("add value")} />
          </Form>
          <HeaderLeft>
            <TotalValues><span>{formatValue({value: getValueTotal().toString()})}</span></TotalValues>
            <BtnAddUser onClick={handleAddNewUser}>
              <ImUserPlus size={15} />
            </BtnAddUser>
          </HeaderLeft>
        </Header>
        <AnchorListTags isExpandHeader={isExpandHeader}>
          {values &&
            <ListTags>
              {values.map((valueCurrent) => (
                <TagValue key={uuid()} valueCurrent={valueCurrent} handleRemove={() => removeValueFromValues(valueCurrent.id)} />
              ))}
            </ListTags>
          }
        </AnchorListTags>
        <Division>
          <BtnHide onClick={() => handleExpandHeader(!isExpandHeader)}>
            {!isExpandHeader && <FaAngleDoubleDown size={10} />}
            {isExpandHeader && <FaAngleDoubleUp size={10} />}
          </BtnHide>
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
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Home;
