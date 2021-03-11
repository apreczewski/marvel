import { shade } from 'polished';
import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Container = styled.div`
  > button {
    background: ${colors.default};
    width: 100%;
    height: 56px;
    border-radius: 9px;
    border: 0;
    color: #F4EDE8;
    padding: 0 16px;
    font-weight: 500;
    margin-top: 16px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, `${colors.default}`)};
    }

    @media (max-width: 1400px) {
      margin-top: 8px;
    }
  }


`;
