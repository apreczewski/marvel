import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`

  padding: 16px;
  width: 100%;

  border-bottom: 1px solid ${colors.charcoalGrey};
  color: ${colors.charcoalGreyTwo};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${colors.mediumPink};
      border-color: ${colors.mediumPink};
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
    color: ${colors.charcoalGreyTwo};

    &::placeholder {
      color: ${colors.charcoalGreyTwo};
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
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
