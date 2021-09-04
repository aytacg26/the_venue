import { useState, useEffect, useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

const TimeUntil = (props) => {
  const [time, setTime] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  });

  const [datePassed, setDatePassed] = useState(false);

  const getTimeUntil = useCallback((eventStartDate) => {
    //we need to know event date
    //we need todays date
    // future - current
    const deadline = Date.parse(eventStartDate);
    const today = Date.parse(new Date());
    const time = deadline - today;

    if (time < 0) {
      setDatePassed(true);
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setTime({ days, hours, minutes, seconds });
    }
  }, []);

  useEffect(() => {
    console.log('calling');
    const counter = setInterval(
      () => getTimeUntil('Sep, 4, 2021, 20:24:00'),
      1000
    );

    return () => {
      clearInterval(counter);
    };
  }, [getTimeUntil]);

  const renderItem = (time, tag) => (
    <div className='countdown_item'>
      <div className='countdown_time'>{time}</div>
      <div className='countdown_tag'>{tag}</div>
    </div>
  );

  const { days, hours, minutes, seconds } = time;

  return (
    <Slide left delay={1000}>
      <div className='countdown_wrapper'>
        {!datePassed && <div className='countdown_top'>Event Starts in</div>}
        {!datePassed && (
          <div className='countdown_bottom'>
            {renderItem(days, 'Days')}
            {renderItem(hours, 'Hours')}
            {renderItem(minutes, 'Minutes')}
            {renderItem(seconds, 'Seconds')}
          </div>
        )}
        {datePassed && (
          <div className='countdown_bottom' style={{ fontSize: 30 }}>
            Event Date Passed
          </div>
        )}
      </div>
    </Slide>
  );
};

export default TimeUntil;
