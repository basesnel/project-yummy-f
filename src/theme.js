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
      secondary: COLOR.primaryText,
      hover: COLOR.dark,
    },

    middleCube: '#22252a',
    background: {
      default: COLOR.second,
      input: 'white',
      buttonSearch: COLOR.dark,
      buttonSearchHover: COLOR.main,
      paginator: '#EBF3D4',
      header: COLOR.dark,
      btnSub: COLOR.main,
    },
    backgroundRecipieinput: COLOR.lightThemeInputRecipe,
    paginator: {
      active: '#22252A',
      inactive: '#656565',
    },
    iconHeader: COLOR.main,
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
      paginator: COLOR.main,
      header: COLOR.main,
      btnSub: COLOR.dark,
    },
    text: {
      primary: COLOR.second,
      // input: COLOR.second,
      secondary: COLOR.second,
      hover: COLOR.main,
    },
    middleCube: COLOR.second,

    backgroundRecipieinput: COLOR.darkThemeInputRecipe,
    paginator: {
      active: COLOR.second,
      inactive: 'rgba(250, 250, 250, 0.60)',
    },
    iconHeader: COLOR.second,
  },
});

const THEME = { lightTheme, darkTheme };

export default THEME;
