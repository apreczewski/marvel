import React, { useCallback, useEffect, useRef } from 'react';
import { uuid } from 'uuidv4';
import { FormHandles } from '@unform/core';
import { useHome, UserProps, ValueProps } from '../../../hooks/home';
import TagValue from '../../TagValue';
import { Form } from '@unform/web';
import Input from '../../../components/inputs/InputtoCard';

import { Wrapper } from './styles';
import { useTranslation } from 'react-i18next';

const Body: React.FC<UserProps> = ({ id }) => {
  const formRef = useRef<FormHandles>(null);
  const { users, removeValueFromUser, addValueToUser, addValue } = useHome();
  const user = users?.find((user: UserProps)  => user.id === id);

  const { t } = useTranslation();



  const handleAddNewValue = useCallback(({value}) => {
    if (!!value) {
      const valueCurrent = { id: uuid(), value, usersIds: [id], description: '', dividedValue: '' } ;

      addValueToUser(id, valueCurrent);
      addValue(valueCurrent);
      formRef.current?.clearField('value');
    }
  }, [addValueToUser, addValue, id])



  return (
    <Wrapper>
      {user?.values && user.values.map((valueCurrent: ValueProps) => {
          // console.log('valueCurrent >> ', valueCurrent);

          return <TagValue
            key={uuid()}
            valueCurrent={valueCurrent}
            width='105px'
            height='25px'
            handleRemove={() => removeValueFromUser(valueCurrent.id, user.id)}
          />;
      })}
       <Form onSubmit={handleAddNewValue}>
        <Input name='value' placeholder={t("add value")} height="25px" width="100%" />
      </Form>
    </Wrapper>
  );
  }

export default Body;
