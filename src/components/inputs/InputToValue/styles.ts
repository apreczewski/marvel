import styled from 'styled-components';

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
  width: 100%;
  font-style: normal;
  display: flex;
  align-items: center;
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
