import React, { Fragment } from 'react';
import './Assets/styles.css';
import Footer from './components/header_footer/Footer';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
const eventDate = 'Nov, 25, 2021, 20:30:00';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Fragment>
        <Featured eventDate={eventDate} />
      </Fragment>
      <Fragment>
        <VenueNfo eventDate={eventDate} />
      </Fragment>
      <div style={{ backgroundColor: 'red', height: 800 }}>
        THIS PART WILL CONTAIN EVENT TIME AND PRICES
      </div>
      <div style={{ backgroundColor: 'blue', height: 800 }}>
        THIS PART WILL CONTAIN
      </div>
      <div style={{ backgroundColor: 'green', height: 800 }}></div>
      <div style={{ backgroundColor: 'yellow', height: 800 }}></div>
      <Footer />
    </div>
  );
};

export default App;
