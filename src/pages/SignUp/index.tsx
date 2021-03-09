import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import logo from '../../assets/images/logo.png'
import Input from '../../components/imputs/Input';
import Button from '../../components/buttons/Default';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { getValidationError } from '../../utils/getValidationError';

import { AnimationContainer, Background, Container, Content } from './styles';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const shema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mial válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await shema.validate(data, {
        abortEarly: false
      });
    } catch (error) {
      console.log(error)
      const errors = getValidationError(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>

          <img src={logo} alt="logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input name="email" icon={FiMail} type="text" placeholder="Email" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Button type="submit">Cadastrar</Button>

          </Form>
          <Link to="/">
            <FiArrowLeft />
          Voltar para logon
        </Link>
        </AnimationContainer>
      </Content>

    </Container>
  );
}

export default SignUp;
