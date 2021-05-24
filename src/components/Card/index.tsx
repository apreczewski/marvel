import React from 'react';

import { Wrapper, LinkDetails } from './styles';

import { IAsset } from '../../pages/Home/index'

const Card: React.FC<IAsset> = (asset) => {
  const { /*id, type, */ thumbnail, name, description } = asset;

  return (
    <Wrapper>
      <img src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} alt={name} />

      {/* <LinkDetails to={`/details/${type}/${id}`}> */}
      <LinkDetails to="#">
        <span>{name}</span>
        <p>{description}</p>
      </LinkDetails>
    </Wrapper >
  );
}

export default Card;
