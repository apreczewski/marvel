import styled from 'styled-components';

interface WrapperProps {
  height?: string,
  width?: string,
  background?: string,
}

export const Wrapper = styled.div<WrapperProps>`
  width: 130px;
  height: 35px;
  background: #EDFAA3;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;


export const Info = styled.div`

`;

export const AnchorValue = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.span`
  font-size: 9px;
  top: 0;
  left: 49%;
  right: 49%;
`;

export const Value = styled.span`
  color: black;
  font-size: 11px;
`;

export const Close = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 1px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: red;
  }

  cursor: pointer;

  :hover {
    background: red;

    svg {
      color: white;
    }
  }
`;
