import React from 'react';

import { Wrapper } from './styles';

import { CardUserData } from '../index'


const Body: React.FC<CardUserData> = ({ values, handleRemoveValueFromUser }) => {

  return (
    <Wrapper>
      {values && values.map(() => {
        return <h1>test</h1>
      })}
    </Wrapper>
  );
}

export default Body;
