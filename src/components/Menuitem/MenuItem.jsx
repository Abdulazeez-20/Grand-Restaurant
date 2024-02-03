import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tag }) => (
  <div className='app__menuitem'>
    <div className="app__menuitem-head">
      <div className="app__menuitem_head-name">
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
      </div>

      <div className="app__menuitem_head-dash"></div>

      <div className="APP__menuitem_head-price">
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

    <div className="app__menuitem-subhead">
      <p className='p__opensans' style={{ color: '#AAA' }}>{tag}</p>
    </div>
  </div>
);

export default MenuItem;
