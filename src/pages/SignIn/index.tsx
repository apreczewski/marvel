import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { useTranslation } from 'react-i18next';

import Input from '../../components/imputs/Input';
import Button from '../../components/buttons/Default';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { getValidationError } from '../../utils/getValidationError';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Background, Container, AnimationContainer, Content } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn, loadingSignIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const { t } = useTranslation();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      const { email, password } = data;

      const shema = Yup.object().shape({
        email: Yup.string().required(t('email requered')).email(t('please enter a valid email address')),
        password: Yup.string().required(t('password requered')),
      });

      await shema.validate(data, {
        abortEarly: false
      });

      await signIn({
        email,
        password,
      });

      history.push('/dashboard');
    } catch (error) {

      if (error instanceof Yup.ValidationError) {
        const errors = getValidationError(error);
        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: t('error on autentication'),
        description: t('there was an error signing in, check your credentials')
      })
    }
  }, [t, signIn, addToast, history]);

  return (
    <Container>
      <Content>
        {loadingSignIn && (<span>loading...</span>)}
        {!loadingSignIn && (
          <AnimationContainer>
            {/* <img src={logo} alt="logo" /> */}

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>{t('login in')}</h1>

              <Input name="email" icon={FiMail} type="text" placeholder={t('email')} />
              <Input name="password" icon={FiLock} type="password" placeholder={t('password')} />
              <Button type="submit">{t('enter')}</Button>

              <a href="forgot">{t('i forgot my password')}</a>
            </Form>
            <Link to="/signup">
              <FiLogIn />
              <span>{t('create an account')}</span>
            </Link>
            <Link to="/home">
              <FiLogIn />
              <span>{t('Go Home')}</span>
            </Link>
          </AnimationContainer>
        )}
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn;
