import { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);

  const percentage = () => {
    if (start < end) {
      setStart((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    let timer;
    if (start > 0 && start < end) {
      timer = setTimeout(() => {
        setStart((prevState) => prevState + 1);
      }, 30);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [start]);

  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              percentage();
            }
          }}
        >
          <div className='discount_percentage'>
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className='discount_description'>
            <h3>Purchase Tickets before 20th September</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
              exercitationem aspernatur perspiciatis iure laudantium, alias amet
              dolor cupiditate dolore quam libero voluptates quae doloribus
              excepturi dolorem laborum provident modi eius.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
