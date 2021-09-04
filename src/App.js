import './Assets/styles.css';
import Footer from './components/header_footer/Footer';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import { Element } from 'react-scroll';

const eventDate = 'Nov, 25, 2021, 20:30:00';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Element name='featured'>
        <Featured eventDate={eventDate} />
      </Element>
      <Element name='venuenfo'>
        <VenueNfo eventDate={eventDate} />
      </Element>
      <Element name='highlights'>
        <Highlights />
      </Element>
      <Element name='pricing'>
        <Pricing />
      </Element>
      <Element name='location'>
        <Location />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
