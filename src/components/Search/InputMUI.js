import { Input, styled } from '@mui/material';
import { TRANSITION } from 'constants';

const InputMUI = styled(Input)(({ theme }) => ({
  width: '100%',
  border: '1px solid rgba(35, 38, 42, 0.2)',
  borderRadius: '24px 44px',
  backgroundColor: theme.palette.background.input,
  color: theme.palette.text.secondary,
  transition: `${TRANSITION.forHoverBgColor}, ${TRANSITION.forHoverColor}`,
  [theme.breakpoints.up('xs')]: {
    padding: '17px 130px 17px 32px',
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '18px 130px 18px 38px',
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '23px 130px 23px 48px',
  },

  '&:before,:after,:hover:not(.Mui-disabled, .Mui-error):before': {
    borderBottom: 'none',
  },
}));

export default InputMUI;
