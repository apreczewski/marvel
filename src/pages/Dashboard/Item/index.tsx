import React from 'react';

import { Wapper, Content } from './styles';

import IconDefault from '../../../assets/icons/img-e-1-lista.svg';

interface CompanyData {
  title: string;
  subTitle: string;
  city: string;
  country: string;
  handleDetails(): void;
}

const Company: React.FC<CompanyData> = ({
  title,
  subTitle,
  city,
  country,
  handleDetails,
}) => (
  <Wapper type="button" onClick={handleDetails}>
    <img src={IconDefault} alt="logo company" />
    <Content>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <h6>{`${city}-${country}`}</h6>
    </Content>
  </Wapper>
);

export default Company;
