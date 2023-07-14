const { styled, Container } = require('@mui/material');

const Main = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background,
}));

export default Main;
