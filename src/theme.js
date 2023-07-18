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
      buttonSearch: COLOR.dark,
      buttonSearchHover: COLOR.main,
      paginator: '#EBF3D4',
    },
    backgroundRecipieinput: COLOR.lightThemeInputRecipe,
    paginator: {
      active: '#22252A',
      inactive: '#656565',
    },
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
      buttonSearch: COLOR.main,
      buttonSearchHover: 'transparent',
      paginator: '#8BAA36',
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
    paginator: {
      active: COLOR.second,
      inactive: 'rgba(250, 250, 250, 0.60)',
    },
  },
});

const THEME = { lightTheme, darkTheme };

export default THEME;
