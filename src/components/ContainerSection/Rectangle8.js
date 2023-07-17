import { Box, styled } from '@mui/material';

export const Rectangle8 = styled(Box)(({ theme }) => ({
  transform: 'rotate(-25deg)',
  borderRadius: '3px',
  backgroundColor: theme.palette.middleCube,
  position: 'absolute',

  [theme.breakpoints.up('xs')]: {
    width: '6px',
    height: '6px',
    top: '142px',
    right: '104px',
  },
  [theme.breakpoints.up('md')]: {
    width: '12px',
    height: '12px',
    top: '155px',
    right: '283px',
  },
  [theme.breakpoints.up('lg')]: {
    top: '200px',
    right: '517px',
  },
}));
