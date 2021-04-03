import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../../styles/colors';

export const Wrapper = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  background: ${colors.secundary};
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Image = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  cursor: pointer;

  svg {
    font-size: 16px;
    color: white;
  }

  :hover {
    background: ${shade(0.01, '#638293')};
  }
`;

export const Content = styled.div`
  width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;


  form {
    div {
        height: 30px;
        border-radius: 25px;
        /* background: red; */


    }
  }



`;

export const Name = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const AddUser = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 25px;

  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  border: none;
  text-decoration: none;

  :hover {
    background: ${shade(0.01, '#5D7685')};
  }
`;

export const Close = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  right: 0;
  cursor: pointer;



  :hover {
    background: ${shade(0.01, '#5D7685')};

    svg {
      color: #9B1205;
    }
  }
`;
