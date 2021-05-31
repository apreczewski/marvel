import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { scrollbarThin } from '../../styles/scrollbar';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  height: 45rem;
  width: 65.1rem;

  @media (max-width: 1400px) {
    width: 50rem;
  }

  @media (max-width: 1100px) {
    width: 34rem;
  }

  @media (max-width: 500px) {
    width: 26rem;
  }

  @media (max-width: 400px) {
    width: 22rem;
  }

  @media (max-height: 900px) {
    height: 43rem;
  }

  @media (max-height: 800px) {
    height: 38rem;
  }

  @media (max-height: 700px) {
    height: 32rem;
  }

`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-bottom: 3px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #202020;


`;

export const AnchorInput = styled.div`
  position: relative;
  width: 100%;

  input {
    text-decoration: none;
    border: none;

    color: #393939;
    font-size: 12px;
    width: 100%;
    height: 40px;
    padding: 0 45px 0 20px;
    border: 1px solid #F2F2F2;
  }

`;

export const HeaderLeft = styled.div`
  display: flex;
  width: auto;
  margin-right: 10px;
`;

export const BtnSearch = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  width: auto;
  height: 100%;
  padding: 9px;

  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: transparent;

  cursor: pointer;
  transition: background 0.5s;

  > svg {
    color: transparent;
  }

  &:hover {
    background: ${shade(0.10, '#e6e6e3')};

    > svg {
      color: #15a38a;
    }
  }

  :active {
    background: ${shade(0.15, '#e6e6e3')};

    > svg {
      color: #15a38a;
    }
  }

  @media (max-width: 500px) {
    width: 100px;
  }

`;

interface ExpandProps {
  loading?: boolean;
}

export const Body = styled.div<ExpandProps>`
  position: relative;
  width: 100%;
  height: calc(100% - 100px);
  background: #F9FCFE;
  padding: 0 0 5px 5px;
  display: flex;
  flex-direction: row;

  ${p => p.loading && css`
    justify-content: center;
    align-items: center;
  `};

  transition: height 0.8s ease-out;
`;

export const NoAssets = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    color: #FDF936;
  }

  span {
    color: #7a7a7a;
    font-size: 20px;
  }
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  grid-template-rows: repeat(auto-fill, minmax(257px, fit-content));
  grid-gap: 9px;
  justify-content: flex-start;
  overflow: auto;
  padding: 5px 0;

  ${scrollbarThin};

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;
