import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = (props) => {
  return (
    <footer className='bck-red'>
      <Fade delay={200} triggerOnce>
        <div className='font_righteous footer_logo_venue'>The Venue</div>
        <div className='footer_copyright'>
          The venue 2021 all rights reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
