import { createGlobalStyle } from 'styled-components';

//https://pigment.shapefactory.co/?a=34495b&b=728d9b
// https://pigment.shapefactory.co/?a=c4250e&b=cb2d1b


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #E5E5E5;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  body, input, button {
    font-family:"Roboto Slab", serif;
    font-size:  16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
