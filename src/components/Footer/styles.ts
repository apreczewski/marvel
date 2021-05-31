import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: fit-content;
  padding: 75px 0;
  background: #151515;

  .logo-m {
    width: 80px;
    height: 120px;
  }

  .footer-promotion {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;

    div {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 5px;

      img {
        height: 30px;
        justify-self: center;
        align-self: center;
      }

      div {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        font-size: 14px;
      }
    }
  }

  .follow-marvel {
    height: 120px;
    margin-left: 20px;

    h4 {
      text-transform: uppercase;
      margin-bottom: 15px;
    }

    a {
      text-decoration: none;
      color: #999999;

      & + a {
        margin-left: 15px;
      }

      &:hover{
        color: ${shade(0.10, '#999999')};
      }
    }
  }

  @media (max-width: 845px) {
    flex-direction: column;
  }
`;
