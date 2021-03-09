import React from 'react';
import { FaCog, FaTimes } from 'react-icons/fa';
import { formatCurrency } from '../../utils/format';

import { Wrapper, Info, AnchorValue, Description, Value, Close } from './styles';

interface TagValueData {
  id: string,
  value?: string,
  description?: string,
  handleRemoveValue(id: string): void,
}

const TagValue: React.FC<TagValueData> = ({ id, value, description, handleRemoveValue }) => {

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
      <Close onClick={() => handleRemoveValue(id)}>
        <FaTimes size={12} />
      </Close>
    </Wrapper>
  );
};

export default TagValue;
