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
  font-style: normal;

  display: flex;
  align-items: center;

  border-top: 1px solid #EEF2F5;
  border-bottom: 1px solid #EEF2F5;

  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: rgb(21,163,138, 0.95);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${colors.mediumPink};
      border-color: rgb(21,163,138, 0.3);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${colors.mediumPink};
    `}


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
