import React from 'react';
import images from '../../constants/images';

const SubHeading = ({ title }) => (
  <div>
    <p className='p__cormorant' >{title}</p>
    <img src={images.spoon} alt="spoon image" style={{ marginBottom: "1rem" }} className='spoon__img' />
  </div>
);

export default SubHeading;
