import { TRANSITION } from 'constants';

const { styled, Box } = require('@mui/material');

const ThemeWrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  transition: `${TRANSITION.forHoverBgColor}, ${TRANSITION.forHoverColor}`,
}));

export default ThemeWrap;
