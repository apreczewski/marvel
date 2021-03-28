import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

import Tooltip from '../../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  height?: string,
  width?: string,
  position?: string
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border-radius: 50px;
  top: 5px;
  left: 5px;
  font-style: normal;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color:  #15a38a;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${colors.mediumPink};
      border-color: ${colors.greenyBlue};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${colors.mediumPink};
    `}

  :hover{
    box-shadow: 2px 2px 8px rgba(35, 211, 199, 0.2);
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    width: ${ p => !!p.width ? p.width : '130px'};
    height: ${ p => !!p.height ? p.height : '35px'};
    padding: 10px 15px;
    color: ${colors.charcoalGreyTwo};
    font-size: 12px;
    text-align: center;

    &::placeholder :active {
      color: red;
    }


  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #15a38a;
    color: #fff;

    &::before {
      border-color:  #15a38a transparent;
    }
  }
`;
