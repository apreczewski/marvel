import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { scrollbarThin } from '../../styles/scrollbar';
import colors from '../../styles/colors';

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
  height: 25rem;
  width: 100%;

  @media (max-height: 600px) {
    height: 15rem;
  }
`;

export const Container = styled.div`
  height: 45rem;
  width: 60.1rem;
  border-radius: 9px;

  @media (max-height: 600px) {
    margin: 0 2rem;
    height: 33rem;
  }
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 3px;
  padding: 10px;
  border-radius: 9px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #F4F8FA;
`;

export const SubHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BtnAddUser = styled.button`
  width: 130px;
  height: 35px;
  padding: 10px 15px;
  margin: 0 10px;

  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 25px;
  background: #e6e6e3;

  cursor: pointer;

  > svg {
    color: #7a7a7a;
  }


  &:hover {
    background: ${shade(0.10, '#e6e6e3')};

    > svg {
      color: #15a38a;
    }
  }

  :active {
    background: ${shade(0.15, '#e6e6e3')};

    > svg {
      color: #15a38a;
    }
  }
`;

export const TotalValues = styled.div`
  width: 130px;
  height: 35px;
  padding: 10px 15px;

  border-radius: 25px;
  background: #e6e6e3;


  color: #7a7a7a;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
`;

export const SubHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Profile = styled.button`
  border: none;
  text-decoration: none;

  width: 35px;
  height: 35px;
  background: ${colors.greenyBlue};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 20px;
    height: 20px;
    color: #F4F8FA;
  }

  > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`

interface ExpandProps {
  isExpandHeader: boolean;
}

export const AnchorListTags = styled.div<ExpandProps>`
  height: ${p => (p.isExpandHeader ? '167px' : '85px')};
  background: #F4F8FA;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  position: relative;
  transition: height 0.8s ease-out;
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

  ${scrollbarThin};
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
    background: #e6e6e3;

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
  position: relative;
  width: 100%;
  height: 15px;
  background: #F4F8FA;
  margin-bottom: 3px;

  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnHide = styled(BtnBase)`
  width: 45px;
  border-radius: 25px;
  background: #F4F8FA;
`;

export const Body = styled.div<ExpandProps>`
  position: relative;
  width: 100%;
  ${p => (p.isExpandHeader ? css`
    height: calc(100% - 231px);
  ` : css`
    height: calc(100% - 150px);
  `
  )}

  background: #F9FCFE;
  border-radius: 9px;;
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
  grid-template-rows: repeat(auto-fill, minmax(260px, auto));
  grid-gap: 9px;
  justify-content: flex-start;
  overflow: auto;
  padding: 5px 0;

  ${scrollbarThin};
`;
