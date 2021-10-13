import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../../styles/colors';
import { ButtonProps } from './index'

export const Container = styled.button<ButtonProps>`
  background: ${p => p.background ? p.background : `#64615B`};
  height: ${p => p.height ? `${p.height}px` : `56px`};
  border-radius: 3.9px;
  border: 0;
  padding: 0 16px;
  color:  ${p => p.color ? p.color : `#FFFFFF`};;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${p => p.background ? shade(0.2, `${p.background}`) : shade(0.2, '#64615B')} ;
  }
`;
