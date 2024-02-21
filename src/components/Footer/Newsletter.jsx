import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='newsletter'>
    <div className="newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p__opensans'>And Never Miss Latest Updates</p>
    </div>

    <div className="newsletter-input flex__center">
      <input type="Email" placeholder='Enter your email' />
      <button type='button' className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
