import styled from 'styled-components';
import { scrollbarThin } from '../../styles/scrollbar';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

interface ExpandProps {
  loading?: boolean;
}

export const Left = styled.div<ExpandProps>`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const AnchorImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 400px;
    width: 300px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
  }

  span {
    width: 100%;
    font-size: 15px;
    text-align: center;
    background: rgba(79, 81, 84, 0.5);
    padding: 10px;
  }

  p {
    width: 100%;
    font-size: 12px;
    text-align: justify;
    padding: 0 10px 10px 10px;
    background: rgba(79, 81, 84, 0.5);
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
  }
`;

export const Right = styled.div<ExpandProps>`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const CardMain = styled.div`

`;

export const List = styled.div<ExpandProps>`
  width: 300px;
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

export const AnchorButtons = styled.div`
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const BtnCustom = styled.button`
  width: 100px;
  height: 35px;
  padding: 10px 15px;
  margin: 0 10px 10px 10px;
  font-size: 12px;
  border: none;
  border-radius: 25px;
  background: #7a7a7a;
  cursor: pointer;
`;

