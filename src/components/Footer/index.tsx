import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Wrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <section className="logo-m">
        <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg"><rect fill="#EC1D24" width="100%" height="100%"></rect><path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg>
      </section>
      <section className="footer-promotion">
        <div>
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png" alt="Marvel Insider Logo" />
          <div>
            <h4>Marvel Insider</h4>
            <p>Get Rewarded for Being a Marvel Fan</p>
          </div>
        </div>
        <div>
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x.png" alt="Marvel Unlimited Logo" />
          <div>
            <h4>Marvel Unlimited</h4>
            <p>Access Over 28,000 Digital Comics</p>
          </div>
        </div>
      </section>
      <section className="follow-marvel">
        <h4>Follow marvel</h4>
        <a href="https://web.facebook.com/marvel" target="_blank">
          <FaFacebook size={20} />
        </a>
        <a href="https://twitter.com/marvel" target="_blank">
          <FaTwitter size={20} />
        </a>
        <a href="https://www.instagram.com/marvel/" target="_blank">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.youtube.com/marvel" target="_blank">
          <FaYoutube size={20} />
        </a>
      </section>
    </Wrapper>
  );
}

export default Footer;
