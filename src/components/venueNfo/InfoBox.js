import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const InfoBox = ({ icon, title, info, delay, triggerOnce }) => {
  return (
    <Zoom className='vn_item' triggerOnce={triggerOnce} delay={delay || 0}>
      <div>
        <div className='vn_outer'>
          <div className='vn_inner'>
            <div className='vn_icon_square bck_red'></div>
            <div
              className='vn_icon'
              style={{ background: `url(${icon})` }}
            ></div>
            <div className='vn_title'>{title}</div>
            <div className='vn_desc'>{info}</div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default InfoBox;
