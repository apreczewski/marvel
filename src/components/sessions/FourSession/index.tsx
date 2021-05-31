import React from 'react';

import { Wrapper } from './styles';

const FourSession: React.FC = () => {
  return (
    <Wrapper>
      <section className="logo-holder">
        <img src="https://i.annihil.us/u/prod/marvel/html_pages_assets/insider-sellpage/terrigen/staging/images/masthead-marvel_inisider-logo-cdb986cafd.png" alt="Marvel Insider" />
      </section>
      <section className="promo-content">
        <h4>marvel insider</h4>
        <h2>Watch, Earn, Redeem!</h2>
        <h5>Get rewarded for doing what you already do as a fan.​</h5>
        <a href="https://www.marvel.com/insider?cid=dcom_promomodule_020200501_insider_characterpageoverview" target="_blank">join now</a>
      </section>
    </Wrapper>
  );
}

export default FourSession;
