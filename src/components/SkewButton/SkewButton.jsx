import { Button } from '@mui/material';
import COLOR from 'constants';

const SkewButton = ({ children, bgColor, paddingH, paddingW, handleClick }) => {
  const borderRadius = paddingH * 1.2;
  const color = 'inherit';
  let border, bgHover, colorHover;

  if (bgColor === 'transparent') {
    colorHover = COLOR.main;
    border = '1px solid';
    bgHover = bgColor;
  } else {
    bgColor = bgColor || COLOR.main;
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
        padding: `${paddingH}px ${paddingW}px`,
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
