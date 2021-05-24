import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';
import { scrollbarThin } from '../../styles/scrollbar';


export const Wrapper = styled.div`
  position: relative;
  height: fit-content;
  width: 250px;
  box-shadow: 4px 4px 16px rgba(20, 43, 88, 0.05);

  border-radius: 9px;

  display: flex;
  flex-direction: column;
  color: black;

  cursor: pointer;

  --height: 50px;
  --display: none;



  &:hover {
    --height: 100%;
    --display: initial;
  }

  img {
    height: auto;
    max-width: 100%;
    object-fit: contain;
    border-radius: 9px;
  }

`;


export const LinkDetails = styled(Link)`
  position: absolute;
  bottom: 0;
  height: var(--height);
  width: 100%;
  text-decoration: none;

  color: #FBF9ED;
  background: rgba(237, 67, 38, 0.50);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 9px;
  transition: background, height 0.5s;

  &:hover {
    background: ${shade(0.2, `rgba(237, 67, 38, 0.30)`)};
  }

  span {
    padding: 10px 10px 0 10px;
    width: 100%;
    text-align: center;
  }

  p {
    padding: 10px;
    padding-top: 10px;
    display: var(--display);
    font-size: 12px;
    text-align: justify;
    height: 100%;
    overflow: auto;

    ${scrollbarThin};
  }
`;
