import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://maps.google.com/maps?q=Ammos%20Beach%20Bar&t=k&z=15&ie=UTF8&iwloc=&output=embed'
        width='100%'
        height='500px'
        frameBorder='0'
        title='googlemaps'
        allowFullScreen
      ></iframe>
      <div className='location_tag'>
        <h3>Location</h3>
      </div>
    </div>
  );
};

export default Location;
