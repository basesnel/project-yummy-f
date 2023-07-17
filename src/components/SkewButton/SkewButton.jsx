import { Button } from '@mui/material';
import { COLOR } from 'constants';

const SkewButton = ({
  children,
  bgColor,
  borderColor = '#fafafa',
  paddingHxs,
  paddingHmd,
  paddingHlg,
  paddingWxs,
  paddingWmd,
  paddingWlg,
}) => {
  // const theme = useTheme();
  let color;
  let bgHover = bgColor,
    colorHover = 'inherit',
    border = 'none';

  if (bgColor === 'transparent') {
    color = COLOR.second;
    colorHover = COLOR.main;
    border = `2px solid ${COLOR.second}`;
  } else if (bgColor === 'dark') {
    bgColor = COLOR.dark;
    bgHover = COLOR.main;
  } else {
    bgColor = bgColor || COLOR.main;
    bgHover = COLOR.dark;
    color = COLOR.second;
  }
  if (borderColor === 'green') {
    border = `2px solid ${COLOR.main}`;
    bgHover = COLOR.main;
    color = COLOR.dark;
    colorHover = COLOR.second;
  }

  return (
    <Button
      sx={{
        textTransform: 'none',
        color,
        backgroundColor: bgColor,
        // [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
        //   backgroundColor: 'red',
        // },
        transform: 'skew(30deg)',
        border,
        borderRadius: {
          xs: `${paddingHxs * 1.4}px`,
          md: `${paddingHmd * 1.4}px`,
          lg: `${paddingHlg * 1.4}px`,
        },
        padding: {
          xs: `${paddingHxs}px ${paddingWxs}px`,
          md: `${paddingHmd}px ${paddingWmd}px`,
          lg: `${paddingHlg}px ${paddingWlg}px`,
        },
        fontSize: {
          xs: '10px',
          md: '16px',
        },
        '&:hover': {
          borderColor: colorHover,
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
