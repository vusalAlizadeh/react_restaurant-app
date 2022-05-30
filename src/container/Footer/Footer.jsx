import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links-contact'>
        <h1 className='app__footer-heading'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className="app__footer-links-logo">
        <img src={images.gericht} alt="footer_img"/>
        <p className='p__opensans'>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
        <img src={images.spoon} className="spoon__img" alt="spoon_img"/>
        <div className='app__footer-links-icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>

      <div className="app__footer-links-work">
      <h1 className='app__footer-heading'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 Am - 12:00 Am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00 Am - 11:00 Pm</p>
      </div>
    </div>

    <div className="app__footer-copyright">
      <p className='p__opensans'>2021 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);
export default Footer;
