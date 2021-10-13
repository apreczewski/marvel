import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  background?: string;
  height?: number;
};

export const ButtonDefault: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);
