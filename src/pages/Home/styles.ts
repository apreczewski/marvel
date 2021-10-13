import styled from 'styled-components';
import { shade } from 'polished';
import { Form } from '@unform/web';
import { scrollbarThin } from '../../styles/scrollbar';


export const Wrapper = styled.div`

`;

export const Header = styled.div`
  width: 100%;
  height: 56px;
  background: #202020;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnSearch = styled.button`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: 0;
  right: 0;
  padding: 10px;
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 25px;
  color: #393939;
  background: transparent;

  transition: background 0.5s;
  cursor: pointer;

  &:hover {
    background: ${shade(0.10, '#e6e6e3')};

    > svg {
      color: #E7412B;
    }
  }

  :active {
    background: ${shade(0.15, '#e6e6e3')};

    > svg {
      color: #E7412B;
    }
  }
`;


export const FormSearch = styled(Form)`
  position: relative;
  width: 50%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;


export const Anchor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 51px;
  padding: 0 100px;
`;

export const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 51px;
  padding: 0 25px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
`;

export const AnchorSubscribe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Subscribe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 51px;
  padding: 0 15px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;

  img {
    height: 22px;
    margin-right: 10px;
  }

  div {
    width: 117px;
    text-transform: uppercase;
    text-align: center;

    p {
      font-size: 12px;
    }

    span {
      font-size: 10px;
      margin-top: 3px;

    }
  }
`;

export const Search = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 51px;
  padding: 0 15px;
  border-right: 1px solid #393939;
  cursor: pointer;

  svg {
    font-size: 20px;
    color: #FFFFFF;
  }
`;



export const AnchorInput = styled.div`
  position: relative;


  input {
    text-decoration: none;
    width: 100%;
    height: 40px;

    font-size: 12px;
    padding: 0 45px 0 20px;
    border-radius: 25px;
    border: 1px solid #F2F2F2;
  }

  button {
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 0;
    right: 0;
    padding: 10px;
    font-size: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 25px;
    color: #393939;
    background: transparent;

    transition: background 0.5s;
    cursor: pointer;

    &:hover {
      background: ${shade(0.10, '#e6e6e3')};

      > svg {
        color: #E7412B;
      }
    }

    :active {
      background: ${shade(0.15, '#e6e6e3')};

      > svg {
        color: #E7412B;
      }
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 40px;
  background: #202020;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #393939;

  a {
    width: 150px;
    height: 100%;
    padding: 0 18px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-bottom: 2px solid #202020;
    text-decoration: none;


    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    color: #999999;

    &:hover {
      color: #FFFFFF;
      border-bottom: 2px solid #E7412B;
    }

  }
`;


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10px;
  height: calc(100vh - 80px);
  width: 100%;

  overflow-y: auto;
  ${scrollbarThin}
`;

export const SecondSession = styled.div`
  width: 100%;
  height: fit-content;
  background: #FFFFFF;
  padding: 20px 0;

  h2 {
    width: 100%;
    color: #151515;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

export const TopCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;

`;


export const TrirdSession = styled.div`
  width: 100%;
  height: 650px;
  background: #F2F2F2;
`;

export const Left = styled.div``;

export const Right = styled.div``;

export const List = styled.div`


  width: 80%;
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

