import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavbarMobileLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  alignSelf: 'stretch',
  padding: theme.spacing(1, 2),
  textDecoration: 'none',
  color: theme.palette.common.black,
  '&.active': {
    color: theme.palette.primary.main,
  },
}));

export default NavbarMobileLink;
