import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima sint deserunt voluptates vitae quibusdam rem, perspiciatis cumque atque, accusamus velit dolor voluptatibus corrupti culpa, dolorum mollitia at accusantium nobis.  perspiciatis cumque atque, accusamus velit dolor voluptatibus corrupti culpa</p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Gordan Sani</p>
        <p className='p__opensans'>Chef's Signeture</p>
        <img src={images.sign} alt="chef's signeture" />
      </div>
    </div>
  </div>
);

export default Chef;
