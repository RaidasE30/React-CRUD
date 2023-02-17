import { Box, IconButton, styled } from '@mui/material';

export const AdminActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: theme.zIndex.mobileStepper,
}));

export const IcoBtn = styled(IconButton)(() => ({
  backgroundColor: '#999',
  '&:hover': {
    backgroundColor: '#e6e6e6',
    color: '#000',
  },
}));
