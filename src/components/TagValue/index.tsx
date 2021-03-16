import React from 'react';

import { FaCog, FaTimes } from 'react-icons/fa';
// import { formatCurrency } from '../../utils/format';

import { useValues, ValueProps } from '../../hooks/values';

import { Wrapper, Info, AnchorValue, Description, Value, Close } from './styles';

const TagValue: React.FC<ValueProps> = ({ id, value, description }) => {
  const { removeValue } = useValues();

  return (
    <Wrapper>
      <Info>
        <FaCog size={12} />
      </Info>
      <AnchorValue>
        <Description>{description}</Description>
        {/* <Value>{`R$ ${formatCurrency({value, currencyValue: 'BRL', code: 'pt-BR'})}`}</Value> */}
        <Value>{`R$ ${value}`}</Value>
      </AnchorValue>
      <Close onClick={() => removeValue(id)}>
        <FaTimes size={12} />
      </Close>
    </Wrapper>
  );
};

export default TagValue;
