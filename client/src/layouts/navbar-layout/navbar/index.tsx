import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

import NavbarMobileMenu from './navbar-mobile-menu';
import NavbarDesktopMenu from './navbar-desktop-menu';
import { expandBreakpoint } from './navbar-data';

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar sx={{ justifyContent: { xs: 'flex-end', [expandBreakpoint]: 'flex-start' } }}>
      <NavbarDesktopMenu />
      <NavbarMobileMenu />
    </Toolbar>
  </AppBar>
);

export default Navbar;
