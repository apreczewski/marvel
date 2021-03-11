import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #EEF2F5;
`;

export const Image = styled.div`
  height: 28px;
  width: 28px;
  padding: 20px;
  background: #F4F8FA;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  border-radius: 50%;

  svg {
    font-size: 16px;
    color: blue;
  }
`;

export const Content = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
`;

export const Name = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const AddUser = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  color: #6C63FF;

  border: none;
  background: none;
  text-decoration: none;

  svg {
    font-size: 12px;
    margin-right: 5px;
    font-weight: bold;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Close = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  right: 5px;
  cursor: pointer;

  svg {
    color: red;
  }

  :hover {
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50px;
    padding: 3px;

    svg {
      color: white;
    }
  }
`;
