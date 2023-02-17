import { Paper as MuiPaper, Stack, styled } from '@mui/material';

export const Container = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

}));

export const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: theme.spacing(3),

  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.breakpoints.values.sm}px - ${theme.spacing(4)})`,
  },
}));
