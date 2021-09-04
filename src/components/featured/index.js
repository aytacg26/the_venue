import React from 'react';
import Carousel from './Carousel';

const Featured = () => {
  return (
    <div className='featured_container'>
      <Carousel />
      <div className='artist_name'>
        <div className='wrapper'>Ariana Grande</div>
      </div>
    </div>
  );
};

export default Featured;
