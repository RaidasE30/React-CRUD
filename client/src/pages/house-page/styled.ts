import { Box, styled } from '@mui/material';

export const HouseImgGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: theme.spacing(1),
  padding: theme.spacing(5),
  maxWidth: theme.breakpoints.values.lg,
  margin: 'auto',
  alignItems: 'stretch',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
  },
}));
