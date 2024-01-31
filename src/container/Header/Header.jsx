import React from 'react';
import { SubHeading } from '../../components';

import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Embark on a culinary odyssey to savor exquisite flavors from the world's best chefs, each dish a masterpiece of natural ingredients. Immerse yourself in the contemporary allure of our restaurant, where modernity meets culinary excellence for an unforgettable dining experience</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Header image" />
    </div>
  </div>
);

export default Header;
