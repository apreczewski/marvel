import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../styles/colors';

export const Wapper = styled.div`
  width: 100%;
  height: 65rem;

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
  position: relative;
  width: 100vw;
  height: 9.5rem;
  background-image: linear-gradient(
    ${colors.mediumPink},
    ${shade(0.3, `${colors.mediumPink}`)}
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconSearch = styled.button`
  text-decoration: none;
  border: none;
  background: none;
  position: absolute;
  right: 2.5rem;
`;

export const IconClose = styled.button`
  text-decoration: none;
  border: none;
  background: none;
`;

export const Default = styled.div``;

export const Search = styled.div`
  width: 100%;
  margin: 0 25px 25px 25px;

  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid ${colors.white};
`;

export const AnchorSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    background: none;
    border: none;
    color: ${colors.white};
    font-size: 2.1rem;
    padding: 10px;

    ::placeholder {
      color: ${colors.red};
      font-size: 2.1rem;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    color: ${colors.charcoalGrey};
    margin-top: 15rem;
  }
`;

export const List = styled.div`
  padding: 10px;
`;

export const Company = styled.div``;

export const CompanyContent = styled.div``;
