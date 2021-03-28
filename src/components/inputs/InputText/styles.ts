import styled, { css } from 'styled-components';

interface IsLabelProps {
  isLabel: boolean;
}

export const Content = styled.div`
  position: relative;
  width: 200px;

  input {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    line-height: 30px;
    font-size:14px;
    border:0;
    background: none;
    border-bottom:1px solid #ccc;
    outline:none;
    border-radius: 0;
    -webkit-appearance: none;
    color: #E6E0D8;

    &:focus, &:valid{
      &~label {
        color: #F26E14;
        transform: translateY(-20px);
        font-size:0.825em;
        cursor:default;
      }
    }

    &:focus{
      &~span{
        width: 100%;
      }
    }
  }

  label{
    position: absolute;
    top:0;
    left:0;
    height: 30px;
    line-height: 30px;
    color: #E6E0D8;
    cursor:text;
    transition: all 200ms ease-out;
    z-index:10;
  }

  span{
    content:'';
    display: block;
    position: absolute;
    bottom:-1px;
    left:0;
    width: 0;
    height: 2px;
    background: #F26E14;
    transition: all 200ms ease-out;
  }
`;
