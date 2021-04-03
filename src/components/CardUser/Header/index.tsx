import React, { useCallback, useRef } from 'react';
import { useHome, UserProps } from '../../../hooks/home';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../../components/inputs/InputtoCard';

import { useTranslation } from 'react-i18next';
import { FaTimes } from 'react-icons/fa';
import { ImUserPlus } from 'react-icons/im';
import { Wrapper, Image, Content, Close } from './styles';
import { uuid } from 'uuidv4';

const Header: React.FC<UserProps> = (user) => {
  const formRef = useRef<FormHandles>(null);
  const { id } = user;
  const { addValueToUser, addValue, removeUser } = useHome();

  const { t } = useTranslation();

  const handleAddNewValue = useCallback(({value}) => {
    if (!!value) {
      const valueCurrent = { id: uuid(), value, usersIds: [id], description: '', dividedValue: '' } ;

      addValueToUser(id, valueCurrent);
      addValue(valueCurrent);
      formRef.current?.clearField('value');
    }
  }, [addValueToUser, addValue, id])

  return (
    <Wrapper>
      <Image>
        <ImUserPlus size={15} />
      </Image>
      <Content>
        <Form onSubmit={handleAddNewValue}>
          <Input name='value' placeholder={t("add value")} height="25px" width="100%" />
        </Form>
      </Content>
      <Close onClick={() => removeUser(id)}>
        <FaTimes size={10} />
      </Close>
    </Wrapper>
  );
}

export default Header;
