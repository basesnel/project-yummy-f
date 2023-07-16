const { styled, Typography } = require('@mui/material');

const TitleTheme = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary.main,
}));

export default TitleTheme;
