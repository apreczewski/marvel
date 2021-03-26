import React, { useCallback, useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
// import { formatCurrency } from '../../../utils/format';


import { UserProps, useHome } from '../../../hooks/home'
import { Wrapper, AddAllValoes } from './styles';
import { uuid } from 'uuidv4';

const Footer: React.FC<UserProps> = ({ id }) => {
  const formRef = useRef<FormHandles>(null);
  const { addValueToUser, addValue } = useHome();

  const { t } = useTranslation();

  const handleSumValues = useCallback(() => {

  }, []);

  const handleAddNewValue = useCallback(({value}) => {
    if (!!value) {
      const valueCurrent = { id: uuid(), value, usersIds: [id], description: '', dividedValue: '' } ;

      addValueToUser(id, valueCurrent);
      addValue(valueCurrent);
      formRef.current?.clearField('value');
    }
  }, [addValueToUser, addValue, id])

  useEffect(() => {
    handleSumValues()
  }, [handleSumValues]);

  return (
    <Wrapper>
      <Form onSubmit={handleAddNewValue}>
        <Input name='value' placeholder={t("add value")} height="25px" width="100%" />
      </Form>
      <AddAllValoes >
        {t('All')}
      </AddAllValoes>
      {/* <span>{`R$ ${formatCurrency(total, 'BRL', 'pt-BR')}`}</span> */}
    </Wrapper>
  );
}

export default Footer;
