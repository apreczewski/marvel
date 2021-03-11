import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
type ButtonPros = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonPros> = ({ children, ...rest }) => {
  return <Container>
    <button type='button' {...rest}>{children}</button>
  </Container>
};

export default Button;
