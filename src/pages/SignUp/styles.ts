import styled, { keyframes } from 'styled-components';
import image from '../../assets/pexels-eunice-lui-931887.jpg'
import { shade } from 'polished';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateX(90%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  @media (max-width: 1400px) {
    max-width: 500px;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromTop} 2s;

  > img {
    width: 350px;
    height: 350px;
    margin-top: 20px;

    @media (max-width: 1400px) {
      width: 250px;
      height: 250px;
      margin-top: 0;
    }
  }


  > form {
    margin: 20px 0;
    width: 340px;
    text-align: center;

    > h1 {
      margin-bottom: 24px;
      color: #FFFFFF;

      @media (max-width: 1400px) {
        margin-bottom: 12px;
      }
    }

    > a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')}
      }

      @media (max-width: 1400px) {
        margin-top: 12px;
      }
    }

    @media (max-width: 1400px) {
      margin: 0 ;
    }
  }

  > a {
    color: #F4EDE8;
    display: block;
    margin-top: 16px;
    text-decoration: none;
    transition: color 0.2;

    display: flex;
    align-items: center;

    > svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#F4EDE8')}
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${image}) no-repeat center;
  background-size: cover;
`;
