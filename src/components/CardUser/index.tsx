import React from 'react';
import { UserProps } from '../../hooks/users';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import { Wrapper } from './styles';

const CardUser: React.FC<UserProps> = ({ ...rest }) => {

  return (
    <Wrapper>
      <Header {...rest} />
      <Body {...rest} />
      <Footer {...rest} />
    </Wrapper>
  );
}

export default CardUser;
