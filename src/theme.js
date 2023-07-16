import { SIZE } from 'constants';
import { createTheme } from '@mui/material';
import { COLOR } from 'constants';

const lightTheme = createTheme({
  breakpoints: {
    values: {
      // xs:0,
      // sm: 375,
      // md: 768,
      // lg: 1440,
      xs: 0,
      sm: parseInt(SIZE.mobile),
      md: parseInt(SIZE.tablet),
      lg: parseInt(SIZE.desktop),
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: COLOR.main,
    },
    secondary: {
      main: COLOR.second,
    },
    dark: {
      main: COLOR.dark,
    },
    text: {
      primary: '#001833',
      secondary: COLOR.dark,
    },

    categorie: {
      // main: '#bdbdbd',
      main: '#ff0000',
    },
    background: {
      default: COLOR.second,
    },
  },
});

const darkTheme = createTheme({
  ...lightTheme,

  palette: {
    mode: 'dark',
    primary: {
      main: COLOR.main,
    },
    secondary: {
      main: COLOR.second,
    },
    dark: {
      main: COLOR.dark,
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: COLOR.second,

      secondary: COLOR.main,
    },
    categorie: {
      // main: '#bdbdbd',
      main: '#ff0000',
    },
  },
});

const THEME = { lightTheme, darkTheme };

export default THEME;
