import { ListItem, styled } from '@mui/material';

export const IngrItemMUI = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.backgroundRecipieinput,
  padding: { xs: '0 10px', md: '0 24px', lg: '0 32px' },
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
