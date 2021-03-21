import React, { useState, useCallback, useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
// import { formatCurrency } from '../../../utils/format';
import Input from '../../../components/Input';

import { UserProps, useHome } from '../../../hooks/home'
import { Wrapper, AddAllValoes } from './styles';
import { uuid } from 'uuidv4';

const Footer: React.FC<UserProps> = ({ id }) => {
  const formRef = useRef<FormHandles>(null);
  const { addValueToUser, addValue } = useHome();

  const { t } = useTranslation();

  const handleSumValues = useCallback(() => {

  }, []);

  const handleSumbitValue = useCallback(({value}) => {
    if (!!value) {
      const valueCurrent = { id: uuid(), value };

      addValueToUser(id, valueCurrent);
      addValue(valueCurrent);
      formRef.current?.clearField('value');
    }
  }, [addValueToUser])

  useEffect(() => {
    handleSumValues()
  }, [handleSumValues]);

  return (
    <Wrapper>
      <Form onSubmit={handleSumbitValue}>
        <Input name='value' placeholder={t("add value")} />
      </Form>
      <AddAllValoes >
        Add All
      </AddAllValoes>
      {/* <span>{`R$ ${formatCurrency(total, 'BRL', 'pt-BR')}`}</span> */}
    </Wrapper>
  );
}

export default Footer;
