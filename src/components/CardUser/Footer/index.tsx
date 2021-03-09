import React, { useState, useCallback, useEffect } from 'react';

import { FaPlus } from 'react-icons/fa';
import { Wrapper, AddValue } from './styles';
import { formatCurrency } from '../../../utils/format';
import { sumArray } from '../../../utils/calc';

import { CardUserData } from '../index'

const Footer: React.FC<CardUserData> = ({ values, handleAddValue }) => {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState('');

  const handleOnChange = useCallback((event) => setValue(event.target.value), []);

  const handleSumValues = useCallback(() => {
    // setTotal(sumArray(values));
    console.log('test');
  }, [values])

  const handleSumbitValue = useCallback((event) => {
    console.log('event >> ', event.target.value)
    console.log('value >> ', value)
    event.preventDefault();
    // handleAddValue(value, user);
    setValue("");
  }, [])

  useEffect(() => {
    handleSumValues()
  }, [handleSumValues]);

  return (
    <Wrapper>
      <form onSubmit={handleSumbitValue}>
        <AddValue
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="add value"
        // name="addValue"
        />
      </form>
      {/* <span>{`R$ ${formatCurrency(total, 'BRL', 'pt-BR')}`}</span> */}
    </Wrapper>
  );
}

export default Footer;
