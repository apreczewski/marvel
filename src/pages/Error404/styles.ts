import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: black;
  font-size: 100px;
`;

export const LinkGoBack = styled(Link)`
  height: 45px;
  width: 250px;
  min-width: fit-content;
  border-radius: 50px;
  padding: 0 10px;

  text-decoration: none;

  color: white;
  background: black;
  font-size: 14px;
  white-space: nowrap;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  &:hover {
    color: white;
  }

  svg {
    margin: 0 3px 0 0;
  }
`;
