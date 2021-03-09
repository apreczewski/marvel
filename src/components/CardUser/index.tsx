import React from 'react';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import { Wrapper } from './styles';

export interface CardUserData {
  id?: string,
  name?: string,
  email?: string,
  values: string[],

  handleAddValue?: () => {},
  handleRemoveUser(id: string): void,
  handleRemoveValueFromUser?: () => {},
}

const CardUser: React.FC<CardUserData> = ({ ...rest }) => {

  return (
    <Wrapper>
      <Header {...rest} />
      <Body {...rest} />
      <Footer {...rest} />
    </Wrapper>
  );
}

export default CardUser;
