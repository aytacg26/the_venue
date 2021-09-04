import './Assets/styles.css';
import Footer from './components/header_footer/Footer';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';

const eventDate = 'Nov, 25, 2021, 20:30:00';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Featured eventDate={eventDate} />
      <VenueNfo eventDate={eventDate} />
      <Highlights />
      <Pricing />
      {/* <div style={{ backgroundColor: 'red', height: 800 }}>
        THIS PART WILL CONTAIN EVENT TIME AND PRICES
      </div>
      <div style={{ backgroundColor: 'blue', height: 800 }}>
        THIS PART WILL CONTAIN
      </div>
      <div style={{ backgroundColor: 'green', height: 800 }}></div>
      <div style={{ backgroundColor: 'yellow', height: 800 }}></div> */}
      <Footer />
    </div>
  );
};

export default App;
