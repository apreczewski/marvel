import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-50rem);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`;

const infinitespinning = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 800px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 2.5rem 0;
    width: 340px;
    text-align: center;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  > h2 {
    color: ${colors.charcoalGrey};
    width: 11rem;
    height: 4rem;
    text-align: center;
  }

  > p {
    color: ${colors.charcoalGrey};
    width: 20rem;
    height: 3rem;
    text-align: center;
    margin-top: 1rem;
  }
`;

export const Loading = styled.div`
  position: absolute;
  width: 100%;
  height: 123vh;
  background: rgb(255, 255, 255, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  .outlineLoading {
    color: #57bbbc;
  }

  > svg {
    animation: ${infinitespinning} 1s infinite;
  }
`;
