const { styled } = require('@mui/material');

const IngradientsMUI = styled('div')(({ theme }) => ({
  '& .Select__single-value': {
    color: theme.palette.text.primary,
  },
}));

export default IngradientsMUI;
