import styled, { keyframes, css } from 'styled-components';
import Modal from 'react-modal';
import colors from '../../styles/colors';

const animationOpen = keyframes`
  from {
    transform: scale(0);
    opacity:0.5;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const WrapperModal = styled.div`
  padding: 25px;
`;

export const ModalStyled = styled(Modal)`
  max-height: 90vh;
  max-width: 100vw;

  border-radius: 10px;
  background: ${colors.greyish};
  box-shadow: 0 0 6px ${colors.default};

  overflow: hidden;

  animation: ${animationOpen} 300ms ease;

  > div {
    max-height: 90vh;

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }

    &::-webkit-scrollbar {
      width: 6px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.default};
    }
  }
`;
