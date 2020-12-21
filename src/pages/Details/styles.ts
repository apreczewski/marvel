import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../styles/colors';

export const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 300;

  max-height: 100vh;
  max-width: 100vw;
  background: ${colors.charcoalGreyThree};

  overflow: auto;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: ${colors.whiteTwo};
  }

  &::-webkit-scrollbar {
    width: 9px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 9px;
    background-color: ${colors.charcoalGrey};
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 9.5rem;
  background-image: linear-gradient(
    ${colors.mediumPink},
    ${shade(0.3, `${colors.mediumPink}`)}
  );

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 2rem;

  > h2 {
    font-size: 2.5rem;
  }
`;

export const IconSearch = styled.button`
  text-decoration: none;
  border: none;
  background: none;
  right: 2.5rem;
  color: ${colors.whiteTwo};
  margin-right: 3rem;
  height: 9.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.div`
  width: 57.69rem;
  height: 100%;
  margin: 2.75rem 3.185rem 0 3.125rem;
  padding: 1.688rem 1.914rem;
  border-radius: 4.7px;
  background-color: ${colors.whiteTwo};

  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    background: lightgrey;
  }

  > p {
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    margin: 3rem 0.438rem 0 0.563rem;
    font-family: SourceSansPro;
    font-size: 1.725rem;
    color: ${colors.warmGrey};
  }
`;
