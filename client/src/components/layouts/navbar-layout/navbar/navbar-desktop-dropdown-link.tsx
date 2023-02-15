import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';

const accentAmount = 0.5;

const NavbarDesktopDropdownLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.common.black,
  display: 'flex',
  justifyContent: 'flex-start',
  padding: theme.spacing(0.75, 2 + accentAmount),
  height: '100%',
  width: '100%',
  '&.active': {
    color: theme.palette.primary.main,
    boxShadow: `
    inset -${theme.spacing(accentAmount)} 0 0 ${theme.palette.primary.main},
    inset ${theme.spacing(accentAmount)} 0 0 ${theme.palette.primary.main}
    `,
  },
}));

export default NavbarDesktopDropdownLink;
