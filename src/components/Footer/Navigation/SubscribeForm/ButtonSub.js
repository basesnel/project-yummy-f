const { styled } = require('@mui/material');

const ButtonSub = styled('button')(({ theme }) => ({
  '&:hover,&:focus': { color: `${theme.palette.text.hover}!important` },
  backgroundColor: `${theme.palette.background.btnSub}!important`,
}));

export default ButtonSub;
