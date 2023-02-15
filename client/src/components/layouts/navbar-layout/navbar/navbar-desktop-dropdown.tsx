import React from 'react';
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Theme,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import NavbarDesktopDropdownLink from './navbar-desktop-dropdown-link';
import type LinkData from './link-data';
import { expandBreakpoint } from './navbar-data';

type NavbarDesktopDropdownProps = {
  title: string,
  linksData: LinkData[]
};

const NavbarDesktopDropdown: React.FC<NavbarDesktopDropdownProps> = ({
  title,
  linksData,
}) => {
  const isExpanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);

  const Icon = open ? ArrowDropUpIcon : ArrowDropDownIcon;

  return (
    <Box
      ref={containerRef}
      onClick={() => {
        setOpen(!open);
      }}
      sx={{ pr: 0 }}
    >
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        <Typography>{title}</Typography>
        <Icon />
      </Box>
      <Menu
        hideBackdrop
        open={isExpanded && open}
        onClose={() => setOpen(false)}
        anchorEl={containerRef.current}
      >
        {linksData.map(({ link, text }) => (
          <MenuItem key={link} sx={{ p: 0 }}>
            <NavbarDesktopDropdownLink key={link} to={link}>
              {text}
            </NavbarDesktopDropdownLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavbarDesktopDropdown;
