import icon_calender from '../../Assets/icons/calendar.png';
import icon_location from '../../Assets/icons/location.png';
import InfoBox from './InfoBox';

const VenueNfo = (props) => {
  const formatEventDate = () => {
    const date = new Date(props.eventDate);
    const formatedDate = date.toLocaleDateString('en-En', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    return formatedDate;
  };

  return (
    <div className='bck_black'>
      <div className='center_wrapper'>
        <div className='vn_wrapper'>
          <InfoBox
            title='Event Date & Time'
            info={formatEventDate()}
            icon={icon_calender}
            triggerOnce
          />

          <InfoBox
            title='Event Location'
            info='Ammos, McKenzie Beach, Larnaca'
            icon={icon_location}
            delay={400}
            triggerOnce
          />
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
