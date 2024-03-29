import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your tast" />
      <h1 className='headtext__cormorant'>Today's special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu-menu_item">
          {data.wines.map((wines, index) => {
            return <MenuItem key={wines.title + index} title={wines.title} price={wines.price} tag={wines.tags} />
          })}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu image" />
      </div>

      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className="app__specialMenu-menu_item">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tag={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
