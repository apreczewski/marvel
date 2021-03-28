import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { useTranslation } from 'react-i18next';

import Input from '../../components/inputs/InputValue';
import Button from '../../components/buttons/Default';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { getValidationError } from '../../utils/getValidationError';

import { AnimationContainer, Background, Container, Content } from './styles';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { t } = useTranslation();

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const shema = Yup.object().shape({
        name: Yup.string().required(t('name required')),
        email: Yup.string().required(t('email required')).email(t('please enter a valid email address')),
        password: Yup.string().min(6, t('at least 6 digits')),
      });

      await shema.validate(data, {
        abortEarly: false
      });
    } catch (error) {
      console.log(error)
      const errors = getValidationError(error);
      formRef.current?.setErrors(errors);
    }
  }, [t]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>

          {/* <img src={logo} alt="logo" /> */}

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>{t('make your registration')}</h1>

            <Input name="name" icon={FiUser} type="text" placeholder={t('name')} />
            <Input name="email" icon={FiMail} type="text" placeholder={t('email')} />
            <Input name="password" icon={FiLock} type="password" placeholder={t('password')} />
            <Button type="submit">{t('create')}</Button>

          </Form>
          <Link to="/">
            <FiArrowLeft />
            {t('go back')}
          </Link>
        </AnimationContainer>
      </Content>

    </Container>
  );
}

export default SignUp;
