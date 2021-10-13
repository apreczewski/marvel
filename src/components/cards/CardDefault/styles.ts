import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';
import { scrollbarThin } from '../../../styles/scrollbar';

export const Wrapper = styled.div`
  height: fit-content;
  box-shadow: 4px 4px 16px rgba(20, 43, 88, 0.05);
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  color: black;
`;

export const AnchorImg = styled.div`
  position: relative;
  width: 100%;
  background: #F2F2F2;
  border-radius: 3px;

  > img {
    min-height: 250px;
    max-width: 100%;
    object-fit: contain;
    max-width: 100%;
    backface-visibility: hidden;
    vertical-align: top;
    padding: 10px 25px;
    transition: padding 0.2s;
    background: #F2F2F2;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    :hover {
      padding: 5px 15px;
    }
  }

  > h6 {
    position: absolute;
    display: flex;
    align-items: center;

    height: fit-content;
    background: #FFFFFF;
    width: 50%;
    border-top-right-radius: 15px;
    bottom: 0;
    padding: 2px 10px;
    font-weight: bold;
  }
`;

export const AnchorDetails = styled.div`
  background: #FFFFFF;
  padding: 10px 10px 20px 10px;

  > h1 {
    font-size: 25px;
    font-weight: bold;
    padding: 10px 0 0 0;
  }
`;

export const AnchorButtons = styled.div`
  display: flex;

  > button {
    width: 100%;

    & + button {
      margin-left: 10px;
    }
  }
`;
