import React, { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { uuid } from 'uuidv4';
import { Content } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  defaultValue: string;
  typeToChange?: string;
  handleOnclick(): void;
  handleOnBlur(): void;
  setDataToBody(): void;
}

const InputData: React.FC<InputProps> = ({ name, defaultValue, type, typeToChange, handleOnclick, handleOnBlur, setDataToBody, ...rest }) => {
  const handleChangeType = useCallback((event) => {
    const inputCurrent = document.getElementById(`${event.target.id}`);
    inputCurrent?.setAttribute('type', typeToChange || type);
  }, [])

  const handleDataToBody = useCallback((event) => {
    // setDataToBody({ event.target.value})
  }, [])

  return (
    <Content className="inputbox-content" onClick={handleOnclick} >
      <input
        id={name}
        type={type || 'text'}
        defaultValue={defaultValue}
        onClick={(event) => {
          handleChangeType(event);
          // handleDataToBody(event)
        }}
        required
      />
      <label>{name}</label>
      <span />
    </Content >
  );
}

export default InputData;
