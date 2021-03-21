import React from 'react';
import { UserProps } from '../../hooks/home';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import { Wrapper } from './styles';

const CardUser: React.FC<UserProps> = (user) => {


  return (
    <Wrapper>
      <Header {...user} />
      <Body {...user} />
      <Footer {...user} />
    </Wrapper>
  );
}

export default CardUser;
