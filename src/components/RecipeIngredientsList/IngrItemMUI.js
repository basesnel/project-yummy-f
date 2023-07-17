import { ListItem, styled } from '@mui/material';

export const IngrItemMUI = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.backgroundRecipieinput,
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.up('xs')]: {
    padding: '0 10px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 24px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0 32px',
  },
}));
