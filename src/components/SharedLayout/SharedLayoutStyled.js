const { styled, Box } = require('@mui/material');

const ThemeWrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export default ThemeWrap;
