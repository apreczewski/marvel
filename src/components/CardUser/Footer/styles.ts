import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;

  span {
    color: #7a7a7a;
    font-size: 12px;
  }

`;

export const AddAllValoes = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;

  font-size: 12px;
  text-decoration: none;
  border: none;
  background: #716B65;

  border-radius: 50px;
  padding: 5px;
`;
