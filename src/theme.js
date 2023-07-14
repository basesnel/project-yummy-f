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
    // text: {
    //     primary: {
    //         main: '#ff0000',
    //     },
    //     secondary: {
    //         main: '#00ff00',
    //     },
    // },
    categorie: {
      // main: '#bdbdbd',
      main: '#ff0000',
    },
    background: {
      main: '#fff',
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
      main: COLOR.dark,
    },
    // text: {
    //     primary: {
    //         main: '#ff0000',
    //     },
    //     secondary: {
    //         main: '#00ff00',
    //     },
    // },
    categorie: {
      // main: '#bdbdbd',
      main: '#ff0000',
    },
  },
});

const THEME = { lightTheme, darkTheme };

export default THEME;
