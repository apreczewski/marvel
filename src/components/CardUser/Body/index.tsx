import React from 'react';
import { uuid } from 'uuidv4';
import { useHome, UserProps, ValueProps } from '../../../hooks/home';
import TagValue from '../../TagValue';

import { Wrapper, TagList } from './styles';

const Body: React.FC<UserProps> = ({ id }) => {
  const { users, removeValueFromUser } = useHome();
  const user = users?.find((user: UserProps)  => user.id === id);

  return (
    <Wrapper>
      <TagList>
        {user?.values && user.values.map((valueCurrent: ValueProps) => {
          return (
            <TagValue
              key={uuid()}
              valueCurrent={valueCurrent}
              width='115px'
              height='27px'
              padding='5px'
              handleRemove={() => removeValueFromUser(valueCurrent.id, user.id)}
            />
          );
        })}
      </TagList>
    </Wrapper>
  );
  }

export default Body;
