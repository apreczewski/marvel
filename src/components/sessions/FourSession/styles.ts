import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  background: #000000;

  .logo-holder {
    width: 50%;
    height: 345px;
    background-image: url("https://i.annihil.us/u/prod/marvel/html_pages_assets/insider/prod/bg-masthead-lg.007c36f2.jpg");

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 50px;

    img {
      background: transparent;
      width: auto;
      height: 80px;
    }

    @media (max-width: 845px) {
      width: 100%;
    }
  }

  .promo-content {
    height: 345px;
    padding: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
      color: #E7412B;
      text-transform: uppercase;
      text-align: center;
      font-weight: bold;
      margin: 20px 0;
      letter-spacing: 3px;
    }

    h2 {
      margin-bottom: 10px;
      text-align: center;
    }

    h5 {
      text-align: center;
    }

    a {
      width: 135px;
      height: 45px;
      margin: 20px 0;
      color: #FFFFFF;
      background: #E7412B;

      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 15px;

      cursor: pointer;
    }
  }

  @media (max-width: 845px) {
    flex-direction: column;
    justify-content: center;
  }

`;
