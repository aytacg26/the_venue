import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import VNButton from '../UI/VNButton';

const PricingBox = ({ link, delay, price, position, description }) => {
  return (
    <Zoom key={link} className='pricing_item' delay={delay}>
      <div className='pricing_inner_wrapper'>
        <div className='pricing_title'>
          <span>${price}</span>
          <span>{position}</span>
        </div>
        <div className='pricing_description'>{description}</div>
        <div className='pricing_buttons'>
          <VNButton text='Purchase' style={{ color: '#fff' }} link={link} />
        </div>
      </div>
    </Zoom>
  );
};

export default PricingBox;
