import React from 'react';

import { BiErrorAlt } from 'react-icons/bi'

import { Wrapper, LinkGoBack } from './styles';

const Error404: React.FC = () => {
  return (
    <Wrapper>
      <BiErrorAlt size={250} />
      <LinkGoBack to="/">Go back to home</LinkGoBack>
    </Wrapper>
  );
}

export default Error404;
