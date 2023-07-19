import { Button, styled } from '@mui/material';
import { COLOR } from 'constants';
import { TRANSITION } from 'constants';

const ButtonMUI = styled(Button)(({ theme, children }) => ({
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',

  border: 'none',
  borderRadius: '24px 44px',
  textTransform: 'none',

  backgroundColor: theme.palette.background.buttonSearch,
  color: COLOR.second,
  transition: `${TRANSITION.forHoverBgColor}`,
  [theme.breakpoints.up('xs')]: {
    padding: ' 15.7px 31.72px',
    fontSize: '14px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '8px 52px',
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '23px 52px',
  },
  '&:hover,:focus': {
    // borderBottom: 'none',
    backgroundColor: theme.palette.background.buttonSearchHover,
    boxShadow: `inset 0px 0px 0px 2px ${COLOR.second}`,
  },
}));

export default ButtonMUI;
