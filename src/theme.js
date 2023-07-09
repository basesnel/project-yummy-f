import { SIZE } from 'constants';
const { createTheme } = require('@mui/material');

const theme = createTheme({
  breakpoints: {
    values: {
      // xs:0,
      // sm: 375,
      // md: 768,
      // lg: 1440,
      sm: parseInt(SIZE.mobile),
      md: parseInt(SIZE.tablet),
      lg: parseInt(SIZE.desktop),
    },
  },
});

export default theme;
