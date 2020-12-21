import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Wapper, Header, Content, IconSearch } from './styles';

import IconDefault from '../../assets/icons/img-e-1-lista.svg';

import api from '../../services/api';
import { useEndpoints } from '../../hooks/endpoints';

interface EnterpriseCredentials {
  id: string;
  description: string;
  enterprise_name: string;
}

const Details: React.FC = () => {
  const token = localStorage.getItem('@WebCompany:token');
  const client = localStorage.getItem('@WebCompany:client');
  const uid = localStorage.getItem('@WebCompany:uid');

  const [enterprise, setEnterprise] = useState<EnterpriseCredentials>({
    id: '',
    enterprise_name: '',
    description: '',
  });
  const history = useHistory();
  const { id } = useParams<EnterpriseCredentials>();

  const { signOut } = useEndpoints();

  const handleGoback = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

  const loadDetails = useCallback(async () => {
    try {
      const response = await api.get(`/enterprises/${id}`, {
        headers: {
          'access-token': token,
          client,
          uid,
        },
      });

      const {
        data: {
          enterprise: { enterprise_name, description },
        },
      } = response;

      setEnterprise({ id, enterprise_name, description });
    } catch (error) {
      const {
        response: { data },
      } = error;
      if (
        data?.errors[0] === 'You need to sign in or sign up before continuing.'
      ) {
        signOut();
      } else {
        console.log(error.response.data);
      }
    }
  }, [client, id, signOut, token, uid]);

  useEffect(() => {
    loadDetails();
  }, [loadDetails]);

  return (
    <Wapper>
      <Header>
        <IconSearch onClick={handleGoback}>
          <BsArrowLeftShort size={60} />
        </IconSearch>
        <h2>{enterprise.enterprise_name}</h2>
      </Header>
      <Content>
        <img src={IconDefault} alt="logo default" />
        <p>{enterprise.description}</p>
      </Content>
    </Wapper>
  );
};

export default Details;
