const { styled } = require('@mui/material');

const IngradientsMUI = styled('div')(({ theme }) => ({
  '& .Select__single-value, .Select__placholder': {
    color: theme.palette.text.primary,
  },
}));

export default IngradientsMUI;
