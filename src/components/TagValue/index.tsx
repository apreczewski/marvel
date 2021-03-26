import React from 'react';

import { FaCog, FaTimes } from 'react-icons/fa';
// import { formatCurrency } from '../../utils/format';

import { ValueProps } from '../../hooks/home';

import { Wrapper, Info, AnchorValue, Description, Value, Close } from './styles';

interface TagProps {
  valueCurrent: ValueProps,
  width?: string,
  height?: string,
  handleRemove(): void
}

const TagValue: React.FC<TagProps> = ({ valueCurrent, width, height, handleRemove  }) => {
  const { value, description } = valueCurrent;

  return (
    <Wrapper width={width} height={height}>
      <Info>
        <FaCog size={12} />
      </Info>
      <AnchorValue>
        <Description>{description}</Description>
        {/* <Value>{`R$ ${formatCurrency({value, currencyValue: 'BRL', code: 'pt-BR'})}`}</Value> */}
        <Value>{`R$ ${value}`}</Value>
      </AnchorValue>
      <Close onClick={handleRemove}>
        <FaTimes size={12} />
      </Close>
    </Wrapper>
  );
};

export default TagValue;
