import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import NavbarDesktopItem from './navbar-desktop-item';
import { expandBreakpoint, linksData, linksGroups } from './navbar-data';
import { getActiveLinkGroupTitle } from './helpers/helper';
import NavbarDesktopLink from './navbar-desktop-link';
import NavbarDesktopDropdown from './navbar-desktop-dropdown';

const NavbarDesktopMenu: React.FC = () => {
  const { pathname } = useLocation();
  const activeLinkGroupTitle = getActiveLinkGroupTitle(pathname);

  return (
    <Box sx={{
      display: { xs: 'none', [expandBreakpoint]: 'flex' },
      alignSelf: 'stretch',
    }}
    >
      {linksData.map(({ link, text }) => (
        <NavbarDesktopItem key={link} className={pathname === link ? 'active' : undefined}>
          <NavbarDesktopLink to={link}>{text}</NavbarDesktopLink>
        </NavbarDesktopItem>
      ))}
      {linksGroups.map(({ title, linksData: links }) => (
        <NavbarDesktopItem key={title} className={title === activeLinkGroupTitle ? 'active' : undefined}>
          <NavbarDesktopDropdown linksData={links} title={title} />
        </NavbarDesktopItem>
      ))}
    </Box>
  );
};

export default NavbarDesktopMenu;
