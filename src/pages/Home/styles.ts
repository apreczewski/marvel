import styled from 'styled-components';
import { shade } from 'polished';
import { scrollbarThin } from '../../styles/scrollbar';


export const Wrapper = styled.div`

`;

export const Header = styled.div`
  width: 100%;
  height: fit-content;
  background: #202020;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 33%;


    @media (max-width: 845px) {
      width: 70%;
    }

    @media (max-width: 500px) {
      width: 66%;
    }
  }
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
  height: calc(100vh - 80px);
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

export const Card = styled.a`
  text-decoration: none;
  border-style : none;
  width: 140px;
  height: fit-content;
  background: #E7412B;

  img {
    width: 100%;
    height: 140px;
    margin: none;
  }

  div {
    height: 190px;
    background: #151515;
    padding: 20px;
    text-decoration: none;


    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    &:hover {
      background: #E7412B;
    }

    h4 {
      color: #FFFFFF;
    }

    h5 {
      color: #999999;
    }
  }

  & + a {
    margin-left: 10px;
  }


`;

export const TrirdSession = styled.div`
  width: 100%;
  height: 650px;
  background: #F2F2F2;
`;

export const Left = styled.div``;

export const Right = styled.div``;


