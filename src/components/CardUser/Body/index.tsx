import React from 'react';
import { UserProps } from '../../../hooks/users'
import { Wrapper } from './styles';

const Body: React.FC<UserProps> = ({ values }) => {

  return (
    <Wrapper>
      {values && values.map(() => {
        return <h1>test</h1>
      })}
    </Wrapper>
  );
}

export default Body;
