import React from 'react';

import { Wrapper, AnchorButtons, AnchorImg, AnchorDetails } from './styles';

import { IAsset } from '../../../hooks/home'
import { ButtonDefault } from '../../buttons/ButtonDefault'

export const CardDefault: React.FC<IAsset> = ({ img, name, num, type }) => {

  return (
    <Wrapper>
      <AnchorImg>
        <img src={img} alt={name} />
        <h6>{`#${num}`}</h6>
      </AnchorImg>
      <AnchorDetails>
        <h1>{name}</h1>
        <AnchorButtons>
          {type[0] && (
            <ButtonDefault
              height={25}
              background={type[0] === 'Fire' ? "#f67c29" : "#9bcc50"}>
              {type[0]}
            </ButtonDefault>)}
          {type[1] && (
            <ButtonDefault
              height={25}
              background={type[1] === 'Fire' ? "#f67c29" : "#B97FC9"}>
              {type[1]}
            </ButtonDefault>)}
        </AnchorButtons>
      </AnchorDetails>
    </Wrapper >
  );
}
