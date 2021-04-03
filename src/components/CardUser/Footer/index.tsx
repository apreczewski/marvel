import React, { useCallback } from 'react';

import { FaRegCopy } from 'react-icons/fa';
import { formatValue } from '../../../utils/format';
import { UserProps  } from '../../../hooks/home'

import { Wrapper, Copy } from './styles';

const Footer: React.FC<UserProps> = ({ values }) => {

  const getValueTotal = useCallback(()=>{
    let sum = 0;
    values?.forEach(value => sum += parseFloat(value.value))
    return sum;
  },[values])

  return (
    <Wrapper>
      <div title={formatValue({value: getValueTotal().toString()})}>{formatValue({value: getValueTotal().toString()})}</div>
      <Copy>
        <FaRegCopy size={15} />
      </Copy>
    </Wrapper>
  );
}

export default Footer;
