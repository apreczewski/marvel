import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 55px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  border-top: 1px solid #EEF2F5;

  span {
    /* font-weight: bold; */
    color: #7a7a7a;
    margin-right: 15px;
    font-size: 12px;
  }
`;

export const AddValue = styled.input`
  position: absolute;
  top: -12px;
  height: 20px;
  width: 100px;
  padding: 5px 15px;
  border: 1px solid #ececec;
  border-radius: 25px;
  background: #ffffff;
  font-size: 10px;


  display: flex;
  align-items: center;
  text-align: center;
  color: #7a7a7a;
`;
