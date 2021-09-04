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
      <Footer />
    </div>
  );
};

export default App;
