const { styled, Box } = require('@mui/material');

const ThemeWrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export default ThemeWrap;
