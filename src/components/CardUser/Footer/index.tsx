import React, { useState, useCallback, useEffect } from 'react';

import { Wrapper, AddValue } from './styles';
// import { formatCurrency } from '../../../utils/format';
// import { sumArray } from '../../../utils/calc';

import { UserProps } from '../../../hooks/users'

const Footer: React.FC<UserProps> = ({ values }) => {
  const [value, setValue] = useState("");


  const handleOnChange = useCallback((event) => setValue(event.target.value), []);

  const handleSumValues = useCallback(() => {
    // setTotal(sumArray(values));
    // console.log('test');
  }, [])

  const handleSumbitValue = useCallback((event) => {
    // console.log('event >> ', event.target.value)
    // console.log('value >> ', value)
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
