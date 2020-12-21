import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Wapper,
  Header,
  IconSearch,
  IconClose,
  Default,
  Search,
  AnchorSearch,
  Body,
  List,
} from './styles';
import logoNav from '../../assets/images/logo-nav.png';
import icSearch from '../../assets/icons/ic-search.svg';
import icClose from '../../assets/icons/ic-close.svg';

import Item from './Item';

import api from '../../services/api';
import { useEndpoints } from '../../hooks/endpoints';

interface EnterpriseData {
  id: string;
  city: string;
  country: string;
  enterprise_type: {
    enterprise_type_name: string;
  };
  email_enterprise: string;
  enterprise_name: string;
  description: string;
  photo: string;
}

const Dashboard: React.FC = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const token = localStorage.getItem('@WebCompany:token');
  const client = localStorage.getItem('@WebCompany:client');
  const uid = localStorage.getItem('@WebCompany:uid');

  const { signOut } = useEndpoints();

  const inputRef = useRef(null);

  const [listEnterprises, setListEnterprises] = useState<
    EnterpriseData[] | undefined
  >([]);

  const history = useHistory();

  const handleDetails = useCallback(
    id => {
      history.push(`/details/${id}`);
    },
    [history],
  );

  const handleAnableSearch = useCallback(async status => {
    if (status) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, []);

  const loadEnterprises = useCallback(async () => {
    try {
      const response = await api.get('/enterprises', {
        headers: {
          'access-token': token,
          client,
          uid,
        },
      });

      const {
        data: { enterprises: list },
      } = response;

      setListEnterprises(list);
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
  }, [client, signOut, token, uid]);

  const getEnterprisesFilter = useCallback(async () => {
    try {
      const response = await api.get('/enterprises', {
        params: {
          name: searchText,
        },
        headers: {
          'access-token': token,
          client,
          uid,
        },
      });

      const {
        data: { enterprises: list },
      } = response;

      setListEnterprises(list);
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
  }, [searchText, client, signOut, token, uid]);

  useEffect(() => {
    loadEnterprises();
  }, [loadEnterprises]);

  return (
    <Wapper>
      <Header>
        {isSearch ? (
          <Search>
            <AnchorSearch>
              <IconClose onClick={() => handleAnableSearch(false)}>
                <img src={icClose} alt="logo home" />
              </IconClose>
              <input
                ref={inputRef}
                type="text"
                autoFocus //eslint-disable-line
                placeholder="Pesquisar"
                onChange={e => setSearchText(e.target.value)}
              />
            </AnchorSearch>
            <IconSearch className="test" onClick={getEnterprisesFilter}>
              <img src={icSearch} alt="icon search" />
            </IconSearch>
          </Search>
        ) : (
          <Default>
            <img src={logoNav} alt="logo home" />
            <IconSearch onClick={() => handleAnableSearch(true)}>
              <img src={icSearch} alt="icon search" />
            </IconSearch>
          </Default>
        )}
      </Header>
      <Body>
        {isSearch ? (
          <List>
            {listEnterprises &&
              listEnterprises.map(enterprise => {
                const {
                  id,
                  city,
                  country,
                  enterprise_type: { enterprise_type_name },
                  enterprise_name,
                } = enterprise;
                return (
                  <Item
                    key={id}
                    title={enterprise_name}
                    subTitle={enterprise_type_name}
                    city={city}
                    country={country}
                    handleDetails={() => handleDetails(id)}
                  />
                );
              })}
          </List>
        ) : (
          <span>Clique na busca para iniciar.</span>
        )}
      </Body>
    </Wapper>
  );
};

export default Dashboard;
