import styled from 'styled-components';
import colors from '../../styles/colors';

interface WrapperProps {
  height?: string,
  width?: string,
  padding?: string,
  background?: string,
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${p => !!p.width ? p.width : '130px'};
  height: ${p => !!p.height ? p.height : '30px'};
  background: #90ABB8;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const Info = styled.div<WrapperProps>`
  width: ${p => !!p.height ? p.height : '30px'};
  height: ${p => !!p.height ? p.height : '30px'};
  border-radius: 25px;
  padding: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 8px;
    height: 8px;
  }

  :hover {
    background: #638293;

    svg {
      color: white;
    }
  }
`;

export const Description = styled.span`
  color: ${colors.charcoalGreyTwo};
  text-align: center;
  font-size: 9px;
  top: 0;
  left: 49%;
  right: 49%;

  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const AnchorValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60px;
  align-items: center;
  text-align: center;
`;

export const Value = styled.div`
  color: ${colors.charcoalGreyTwo};
  font-size: 11px;
  /* text-align: center; */

  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Close = styled.div<WrapperProps>`
  width: ${p => !!p.height ? p.height : '30px'};
  height: ${p => !!p.height ? p.height : '30px'};
  border-radius: 25px;
  padding: 2px;


  display: flex;
  justify-content: center;
  align-items: center;


  > svg {
    width: 8px;
    height: 8px;
  }

  cursor: pointer;

  :hover {
    background: #5D7685;

    svg {
      color: #9B1205;
    }
  }
`;
