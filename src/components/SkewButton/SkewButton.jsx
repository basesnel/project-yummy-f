import { Button } from '@mui/material';
import COLOR from 'constants';
console.log(COLOR.dark);
const SkewButton = ({
  children,
  bgColor = 'transparent',
  px,
  py,
  handleClick,
}) => {
  const borderRadius = px * 1.2;
  const color = 'inherit';
  let border, bgHover, colorHover;

  if (bgColor === 'transparent') {
    colorHover = COLOR.main;
    border = '1px solid';
    bgHover = bgColor;
  } else {
    bgColor = COLOR.main;
    colorHover = 'inherit';
    border = 'none';
    bgHover = COLOR.dark;
  }
  return (
    <Button
      onClick={handleClick}
      sx={{
        color,
        backgroundColor: bgColor,
        transform: 'skew(30deg)',
        borderRadius,
        border,
        px,
        py,
        '&:hover': {
          color: colorHover,
          backgroundColor: bgHover,
        },
      }}
    >
      <span className="text" style={{ transform: 'skew(-30deg)' }}>
        {children}
      </span>
    </Button>
  );
};

export default SkewButton;
