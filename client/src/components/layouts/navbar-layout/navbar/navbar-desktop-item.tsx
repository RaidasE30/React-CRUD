import { alpha, styled } from '@mui/material';

const NavbarDesktopItem = styled('div')(({ theme }) => ({
  alignSelf: 'stretch',
  display: 'inline-flex',
  color: alpha(theme.palette.common.white, 1 - theme.palette.action.activatedOpacity),
  cursor: 'pointer',
  '>*': {
    alignSelf: 'stretch',
    display: 'inline-grid',
    placeItems: 'center',
    padding: theme.spacing(0, 2),
  },
  '&:hover': {
    background: theme.palette.primary.dark,
  },
  '&.active': {
    boxShadow: `inset 0 -4px 0 0 ${theme.palette.common.white}`,
    color: theme.palette.common.white,
  },
}));

export default NavbarDesktopItem;
