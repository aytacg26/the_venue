import React from 'react';
import Carousel from './Carousel';
import TimeUntil from './TimeUntil';

const Featured = (props) => {
  return (
    <div className='featured_container'>
      <Carousel />
      <div className='artist_name'>
        <div className='wrapper'>Ariana Grande</div>
      </div>
      <TimeUntil eventDate={props.eventDate} />
    </div>
  );
};

export default Featured;
