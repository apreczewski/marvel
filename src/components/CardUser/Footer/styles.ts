import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../../styles/colors';

export const Wrapper = styled.div`
  position: relative;
  height: 40px;
  width: 100%;

  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  background: ${colors.secundary};

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: white;
    font-size: 12px;

    width: auto;
    max-width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

`;


export const Copy = styled.button`
  position: absolute;
  right: 10px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background: none;
  border: none;
  text-decoration: none;

  cursor: pointer;

  svg {
    font-size: 16px;
    color: white;
  }

  :hover {
    background: ${shade(0.01, '#5D7685')};
  }
`;
