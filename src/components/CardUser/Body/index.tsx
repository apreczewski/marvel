import React from 'react';
import { uuid } from 'uuidv4';
import { useHome, UserProps, ValueProps } from '../../../hooks/home';
import TagValue from '../../TagValue';

import { Wrapper } from './styles';

const Body: React.FC<UserProps> = ({ id }) => {
  const { users } = useHome();

  const user = users?.find((user: UserProps)  => user.id === id);



  return (
    <Wrapper>
      {user?.values && user.values.map((valueCurrent: ValueProps) => {
          // console.log('valueCurrent >> ', valueCurrent);

          return <TagValue
            key={uuid()}
            valueCurrent={valueCurrent}
            width='105px'
            height='25px'
          />;
      })}
    </Wrapper>
  );
  }

export default Body;
