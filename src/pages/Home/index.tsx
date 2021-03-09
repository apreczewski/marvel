import React, { useCallback, useRef, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { formatNumber } from '../../utils/format';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';


import { FaAngleDoubleDown, FaAngleDoubleUp, FaPlus } from 'react-icons/fa'
import TagValue from '../../components/TagValue';

import {
  Wrapper, Container, Background, Header, ListTags, FirstItem,
  HideButtonHeader, AnchorHider, Body, BtnAddUser,
  ListUsers
} from './styles';
import Input from '../../components/Input';
import CardUser from '../../components/CardUser';

interface UserData {
  id: string,
  description: string,
  values: string[],
  sumTotal: string,
  valueMedium: string,
}

interface ValueData {
  id: string,
  value: string,
  description?: string,
  users?: string[],
  valueMedium?: string,
}


const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [isExpandHeader, setIsExpandHeader] = useState(false);
  const [arrayOfUsers, setArrayOfUsers] = useState<UserData[]>([]);
  const [arrayOfValues, setArrayOfValues] = useState<ValueData[]>([]);

  const handleAddNewValue = useCallback(({ addValue }) => {
    console.log('formRef >> ', formRef.current);

    // formRef.current?.clearField(fieldName = '');


    const newValue: ValueData = {
      id: uuid(),
      value: addValue,
    }
    setArrayOfValues([newValue, ...arrayOfValues])

    formRef.current?.clearField('addValue');
  }, [arrayOfValues]);

  const handleRemoveValue = useCallback((idValue) => {
    const newValues = arrayOfValues.filter(value => value.id !== idValue);
    setArrayOfValues(newValues);
  }, [arrayOfValues]);

  const handleAddNewUser = useCallback(({ addUser }) => {
    const newUser: UserData = {
      id: uuid(),
      description: '',
      values: [],
      sumTotal: '',
      valueMedium: '',
    }
    setArrayOfUsers([...arrayOfUsers, newUser])
  }, [arrayOfUsers]);

  const handleRemoveUser = useCallback((idUser) => {
    const newUsers = arrayOfUsers.filter(user => user.id !== idUser);
    setArrayOfUsers(newUsers);
  }, [arrayOfUsers]);

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
            <Input name="addValue" placeholder="Add value" />
          </Form>
          {arrayOfValues &&
            <ListTags>
              <FirstItem />
              {arrayOfValues.reverse().map((itemValue) => (
                <TagValue key={uuid()} handleRemoveValue={handleRemoveValue} {...itemValue} />
              ))}
            </ListTags>
          }
          <AnchorHider>
            <HideButtonHeader onClick={() => handleExpandHeader(!isExpandHeader)}>
              {!isExpandHeader && <FaAngleDoubleDown size={10} />}
              {isExpandHeader && <FaAngleDoubleUp size={10} />}
              {/* <TotalValues>{`R$ ${formatCurrency(sumValues.toString(), 'BRL', 'pt-BR')}`}</TotalValues> */}
            </HideButtonHeader>
          </AnchorHider>
        </Header>
        <Body isExpandHeader={isExpandHeader}>
          {arrayOfUsers &&
            <ListUsers isExpandHeader={isExpandHeader}>
              {arrayOfUsers.reverse().map((user) => (
                <CardUser key={uuid()} {...user} handleRemoveUser={handleRemoveUser} />
              ))}
            </ListUsers>
          }
          {/* <ButtonAddUser onClick={handleAddUser}> */}
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
