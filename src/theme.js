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
      // input: COLOR.primaryText,
      secondary: COLOR.primaryText,
    },

    middleCube: '#22252a',

    categorie: {
      // main: '#bdbdbd',
      main: '#ff0000',
    },
    background: {
      default: COLOR.second,
      input: 'white',
    },
    backgroundRecipieinput: COLOR.lightThemeInputRecipe,
  },
});

// DARK THEME
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
      input: COLOR.darkThemeInput,
    },
    text: {
      primary: COLOR.second,
      // input: COLOR.second,
      secondary: COLOR.second,
    },
    middleCube: COLOR.second,

    categorie: {
      // main: '#bdbdbd',
      main: '#ff0000',
    },
    backgroundRecipieinput: COLOR.darkThemeInputRecipe,
  },
});

const THEME = { lightTheme, darkTheme };

export default THEME;
