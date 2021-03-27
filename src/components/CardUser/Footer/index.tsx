import React, { useCallback, useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
// import { formatCurrency } from '../../../utils/format';


import { UserProps, useHome } from '../../../hooks/home'
import { Wrapper } from './styles';
import { uuid } from 'uuidv4';

const Footer: React.FC<UserProps> = ({ values }) => {


  const getValueTotal = useCallback(()=>{
    let sum = 0;
    values?.forEach(value => sum += parseFloat(value.value))
    return sum;
  },[values])



  return (
    <Wrapper>
      {/* <Form onSubmit={handleAddNewValue}>
        <Input name='value' placeholder={t("add value")} height="25px" width="100%" />
      </Form> */}
      {/* <AddAllValoes >
        {t('All')}
      </AddAllValoes> */}
      {/* <span>{`R$ ${formatCurrency(total, 'BRL', 'pt-BR')}`}</span> */}
      <span>{`R$ ${getValueTotal()}`}</span>
    </Wrapper>
  );
}

export default Footer;
