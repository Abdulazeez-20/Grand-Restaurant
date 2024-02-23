import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import images from '../../constants/images';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="footer_links">
      <div className="footer-links_contact">
        <h1 className="footer_headtext">Contact Us</h1>
        <p className="p__opensans">3 G 230 ST, New York, Manhatn, USA</p>
        <p className="p__opensans">+1 323-233-2333</p>
        <p className="p__opensans">+1 323-233-2333</p>
      </div>

      <div className="footer-links_logo">
        <img src={images.gericht} alt="gericht" />
        <p className="p__opensans">"The best way to find yourseld is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" className='spoon_img' />
        <div className="footer-links-logo_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      <div className="footer-links_work">
        <h1 className="footer_headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">07:30 am - 12:00 pm</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">09:00 am - 10:00 pm</p>
      </div>
    </div>

    <div className="footer_copyright">
      <p className="p__opensans">Sani 2024, All rights preserved</p>
    </div>
  </div>
);

export default Footer;
