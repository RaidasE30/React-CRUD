import { alpha, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const NavbarDesktopLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: alpha(theme.palette.common.white, 1 - theme.palette.action.activatedOpacity),
}));

export default NavbarDesktopLink;
