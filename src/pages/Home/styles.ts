import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  background: #1e1e1e;
  height: 16rem;
  width: 100%;
`;

export const Container = styled.div`
  height: 28rem;
  width: 60.1rem;
  border-radius: 9px;
  background: #f9fcfe;
  box-shadow: -16px -16px 82px rgba(255, 255, 255, 0.15),
    26px 26px 82px rgba(20, 43, 88, 0.1);

  @media (max-width: 1100px) {
    margin: 0 2rem;
  }
`;

interface ExpandProps {
  isExpandHeader: boolean;
}

export const Header = styled.div<ExpandProps>`
  height: ${p => (p.isExpandHeader ? '125px' : '60px')};
  background: #a1b0a8;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;

  transition: height 0.8s ease-out;
`;

export const AddValue = styled.input`
  grid-area: avalue;
  width: 130px;
  height: 35px;
  padding: 10px 15px;
  background: #ffffff;
  border: 1px solid #eef3f7;
  border-radius: 50px;
  position: absolute;
  top: 10px;
  left: 10px;

  font-style: normal;
  font-weight: bold;
  font-size: 11px;

  display: flex;
  align-items: center;
  text-align: center;
  color: #7a7a7a;
`;

export const FirstItem = styled.div`
  width: 130px;
  height: 35px;
  background: transparent;
  border-radius: 25px;
`;

export const ListTags = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, auto));
  grid-template-rows: repeat(auto-fill, minmax(35px, 35px));
  grid-gap: 5px;
  justify-content: flex-start;
  overflow: auto;
  padding: 5px 0 5px 5px;

  grid-template-areas: "avalue avalue";

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background: #7a7a7a;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7a7a7a;
  }
`;

export const BtnAddUser = styled.button`
  position: absolute;
  height: 70px;
  width: 70px;

  -webkit-appearance: none;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
    10px 10px 15px rgba(70, 70, 70, 0.12);
  transform: translate(-50%, -50%);
  outline: none;

  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 25px;
  right: 25px;

  border: 8px solid #ececec;
  box-sizing: border-box;
  border-radius: 50%;

  cursor: pointer;

  svg {
    color: #7a7a7a;
    font-size: 21px;
  }

  :active {
    box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
      10px 10px 15px rgba(70, 70, 70, 0.12),
      inset -10px -10px 15px rgba(255, 255, 255, 0.5),
      inset 10px 10px 15px rgba(70, 70, 70, 0.12);

    svg {
      color: #15a38a;
    }
  }

  span {
    font-weight: bold;
    font-size: 12px;
    color: rgba(0, 26, 255, 0.7);
  }

  @media (max-width: 1100px) {
    bottom: 5px;
    right: 5px;
  }
`;

export const BtnBase = styled.button`
  width: 15px;
  height: 15px;
  background: #ffffff;
  border: none;
  text-decoration: none;

  border-radius: 50px;
  font-size: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: #7a7a7a;

  svg {
    color: #7a7a7a;
  }

  :hover {
    cursor: pointer;
    background: rgba(230, 230, 227, 1);

    svg {
      color: #15a38a;
    }
  }

  :active {
    svg {
      color: #15a38a;
    }
  }
`;

export const Division = styled.div`
  width: 100%;
  height: 15px;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnHide = styled(BtnBase)`
  width: 50px;
`;

export const TotalValues = styled.div`
  color: #7a7a7a;
  font-weight: bold;
`;


export const Body = styled.div<ExpandProps>`
  position: relative;
  width: 100%;
  ${p => (p.isExpandHeader ? css`
    height: calc(100% - 125px);
  ` : css`
    height: calc(100% - 60px);
  `
  )}

  background: #ececec;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  padding: 0 0 5px 5px;
  display: flex;
  flex-direction: row;

  transition: height 0.8s ease-out;
`;

export const HideButtonFooter = styled(BtnBase)`
  position: absolute;
  height: 30px;
  bottom: 0;

  svg {
    font-size: 21px;
  }
`;

export const ListUsers = styled.div<ExpandProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(229px, auto));
  grid-template-rows: repeat(auto-fill, minmax(250px, auto));
  grid-gap: 9px;
  justify-content: flex-start;
  overflow: auto;
  padding: 5px 0;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background: #7a7a7a;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7a7a7a;
  }
`;
