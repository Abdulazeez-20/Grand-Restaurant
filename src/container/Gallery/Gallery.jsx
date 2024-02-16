import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const gallery_images = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = React.useRef(null)
  const scroll = (direction) => {
    const { curretn } = scrollRef;

    if (direction === 'left') {
      curretn.scrollLeft -= 300;
    } else {
      curretn.scrollRight += 300;
    }
  }

  return (
    <div className='gallery flex__center'>
      <div className="gallery_content">
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum dicta reiciendis pariatur, neque minima ipsa doloribus. Et, animi autem aspernatur odio amet fugit tempore fuga esse maxime repudiandae ipsa omnis.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className="gallery_images">
        <div className="gallery-images_container" ref={scrollRef}>
          {gallery_images.map((image, index) => (
            <div className="gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="Gallery" />
              <BsInstagram className='gallery_image-icon' />
            </div>
          ))}
        </div>

        <div className="gallery-images_arrow">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
