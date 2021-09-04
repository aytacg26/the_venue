import { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../SideDrawer/SideDrawer';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  useEffect(() => {
    console.log('UseEffect');
    window.addEventListener('scroll', handleScroll);

    return () => {
      console.log('Removing...');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drawerToggleHandler = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
        boxShadow: 'none',
        padding: '10px 0',
      }}
    >
      <Toolbar>
        <div className='header_logo'>
          <div className='font_righteous header_logo_venue'>The Venue</div>
          <div className='header_logo_title'>Musical Events</div>
        </div>
        <IconButton
          aria-label='Menu'
          color='inherit'
          onClick={drawerToggleHandler}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer open={drawerOpen} onClose={drawerToggleHandler} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
