import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../Assets/icons/ticket.png';

const VNButton = (props) => {
  return (
    <Button
      href={props.link}
      size={props.size || 'large'}
      variant='contained'
      style={{ background: '#8e8e8e', color: '#fff', ...props.style }}
    >
      {props.iconTicket && (
        <img src={TicketIcon} className='iconImage' alt='button ticket icon' />
      )}
      {props.text}
    </Button>
  );
};

export default VNButton;
