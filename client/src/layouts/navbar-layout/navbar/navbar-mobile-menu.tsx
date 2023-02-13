import React from 'react';
import {
  Toolbar,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  useMediaQuery,
  type Theme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';
import NavbarMobileLink from './navbar-mobile-link';
import NavbarMobileLinksAccordion from './navbar-mobile-links-accordion';
import { expandBreakpoint, linksData, linksGroups } from './navbar-data';
import { getActiveLinkGroupTitle } from './helpers/helper';

const NavbarMobileMenu: React.FC = () => {
  const { pathname } = useLocation();
  const activeLinkGroupTitle = getActiveLinkGroupTitle(pathname);

  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const isExpanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));
  const [openedAccordionTitle, setOpenedAccordionTitle] = React.useState(activeLinkGroupTitle);

  const closeMenu = () => setMenuOpen(false);
  const handleAccordionAction = (title: string) => (
    _event: React.SyntheticEvent,
    open: boolean,
  ) => {
    setOpenedAccordionTitle(open ? title : null);
  };

  const Icon = menuOpen ? CloseIcon : MenuIcon;

  return (
    <>
      <IconButton
        sx={{ display: { xs: 'flex', [expandBreakpoint]: 'none' } }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Icon sx={{ color: 'common.white', fontSize: 25 }} />
      </IconButton>
      <Drawer
        anchor="top"
        open={menuOpen && !isExpanded}
        onClose={() => setMenuOpen(false)}
      >
        <Toolbar />
        <MenuList sx={{ p: 0 }}>
          {linksData.map(({ link, text }) => (
            <MenuItem key={link} onClick={closeMenu} sx={{ p: 0 }}>
              <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
            </MenuItem>
          ))}
          {linksGroups.map((linksGroup) => (
            <NavbarMobileLinksAccordion
              key={linksGroup.title}
              title={linksGroup.title}
              linksData={linksGroup.linksData}
              closeMenu={closeMenu}
              expanded={openedAccordionTitle === linksGroup.title}
              onChange={handleAccordionAction(linksGroup.title)}
              hasActiveLink={activeLinkGroupTitle === linksGroup.title}
            />
          ))}
        </MenuList>
      </Drawer>
    </>
  );
};

export default NavbarMobileMenu;
