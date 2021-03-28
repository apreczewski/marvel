import React, { useCallback } from 'react';

import { formatValue } from '../../../utils/format';
import { UserProps,  } from '../../../hooks/home'

import { Wrapper } from './styles';


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

      <span>{formatValue({value: getValueTotal().toString()})}</span>
    </Wrapper>
  );
}

export default Footer;
