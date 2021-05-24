import styled from 'styled-components';
import { Popover } from 'react-bootstrap';
import { shade } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const Division = styled.div`
  height: 25px;
  border-left: 1px solid #e5e5e5;
`;

export const Selection = styled.div`
  cursor: pointer;
  background: transparent;
`;

export const PopoverCustom = styled(Popover)`
  width: fit-content;
  height: fit-content;

  border-radius: 25px;
  background: #7a7a7a;

  display: flex;
  flex-direction: column;
  margin-top: 3px;

`;

export const BtnSelector = styled.button`
  width: 120px;
  height: 35px;
  padding: 10px;

  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 25px;
  background: #7a7a7a;
  color: white;

  cursor: pointer;

  > svg {
    transition: visible 0.5s;
    margin-right: 10px;
  }

  &:hover {
    background: ${shade(0.10, '#7a7a7a')};

    > svg {
      color: #15a38a;
    }
  }

  :active {
    background: ${shade(0.15, '#7a7a7a')};

    > svg {
      color: #15a38a;
    }
  }

  @media (max-width: 500px) {
    width: 100px;
  }

`;
