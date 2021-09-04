import React from 'react';
import './Assets/styles.css';
import Footer from './components/header_footer/Footer';
import Header from './components/header_footer/Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div style={{ backgroundColor: 'red', height: 800 }}></div>
      <div style={{ backgroundColor: 'blue', height: 800 }}></div>
      <div style={{ backgroundColor: 'green', height: 800 }}></div>
      <div style={{ backgroundColor: 'yellow', height: 800 }}></div>
      <Footer />
    </div>
  );
};

export default App;
