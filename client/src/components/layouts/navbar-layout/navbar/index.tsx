import React from 'react';
import {
  AppBar, Box, Toolbar, Typography, Link,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import NavbarMobileMenu from './navbar-mobile-menu';
import NavbarDesktopMenu from './navbar-desktop-menu';
import NavbarDesktopItem from './navbar-desktop-item';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('userId');
    navigate('/');
  };

  const isLoggedIn = localStorage.getItem('token');

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <NavbarDesktopMenu />
        <NavbarMobileMenu />
        <Box sx={{ flexGrow: 1 }} />

        {isLoggedIn ? (
          <>
            <Typography>{`Welcome, ${localStorage.getItem('name')}`}</Typography>
            <NavbarDesktopItem>
              <Typography>
                <Link
                  component="button"
                  onClick={handleLogout}
                  sx={{ color: '#dceafd', fontSize: '1rem', textDecoration: 'none' }}
                >
                  Log out
                </Link>
              </Typography>
            </NavbarDesktopItem>
          </>
        ) : (
          <>
            <NavbarDesktopItem>
              <Typography>
                <Link
                  component="button"
                  onClick={() => navigate('/register')}
                  sx={{ color: '#dceafd', fontSize: '1rem', textDecoration: 'none' }}
                >
                  Sign Up
                </Link>
              </Typography>
            </NavbarDesktopItem>
            <NavbarDesktopItem>
              <Typography>
                <Link
                  component="button"
                  onClick={() => navigate('/login')}
                  sx={{ color: '#dceafd', fontSize: '1rem', textDecoration: 'none' }}
                >
                  Log In
                </Link>
              </Typography>
            </NavbarDesktopItem>
          </>
        )}

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
