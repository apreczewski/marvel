import styled, { css } from 'styled-components';
import Tooltip from '../../Tooltip';

interface containerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<containerProps>`
  background: #232129;
  border-radius: 9px;
  padding: 16px;
  width: 100%;

  border: 1px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  ${props => props.isFilled && css`
    color: #D31145;
  `}

  ${props => props.isErrored && css`
    border: 1px solid #F7CF00;
  `}

  ${props => props.isFocused && css`
    border: 1px solid #D31145;
    color: #D31145;
  `}

  & + div {
    margin-top: 8px;
  }

  > input {
    flex: 1;
    border: 0;
    color: #F4EDE8;
    background: transparent;

    &::placeholder {
      color: #666360;
      background: #232129;
    }
  }

  > svg {
    margin-right: 9px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  > svg {
    margin: 0;
  }
`
