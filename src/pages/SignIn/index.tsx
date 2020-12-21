import React, { useCallback, useRef, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationsErrors from '../../utils/getValidationErrors';
import { useEndpoints } from '../../hooks/endpoints';
import { useToast } from '../../hooks/toast';
import logoHome from '../../assets/images/logo-home.png';

import {
  Container,
  Content,
  AnimationContainer,
  Header,
  Loading,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();
  const { signIn } = useEndpoints();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório!')
            .email('Digite um e-mail válido!'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ ...data });
        setLoading(false);
        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação!',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });

        setLoading(false);
      }
    },
    [history, signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoHome} alt="logo home" />
          <Header>
            <h2>BEM-VINDO AO EMPRESAS</h2>
            <p>
              Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc
              accumsan.
            </p>
          </Header>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
            />
            <Button type="submit">Entrar</Button>
          </Form>
        </AnimationContainer>
        {loading && (
          <Loading>
            <AiOutlineLoading3Quarters className="outlineLoading" size={120} />
          </Loading>
        )}
      </Content>
    </Container>
  );
};

export default SignIn;
