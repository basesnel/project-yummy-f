import { Box, styled } from '@mui/material';

const WrapBreakfast = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.input,

  position: 'absolute',
  top: '113px',
  left: '88px',
  right: '7px',
  padding: '8px',
  borderRadius: '8px',
  //   [theme.breakpoints.up('xs')]: {
  //     padding: '17px 130px 17px 32px',
  //     fontSize: '12px',
  //   },
  [theme.breakpoints.up('md')]: {
    padding: '12px',
    top: '220px',
    left: '60px',
    right: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    top: '336px',
    left: '342px',
    right: '-62px',
  },
}));

export default WrapBreakfast;
