import { Button } from '@mui/material';
import { COLOR } from 'constants';

const SkewButton = ({
  children,
  bgColor,
  paddingHxs,
  paddingHmd,
  paddingHlg,
  paddingWxs,
  paddingWmd,
  paddingWlg,
}) => {
  // const theme = useTheme();
  const color = 'inherit';
  let bgHover = bgColor,
    colorHover = 'inherit',
    border = 'none';

  if (bgColor === 'transparent') {
    colorHover = COLOR.main;
    border = '1px solid';
  } else if (bgColor === 'dark') {
    bgColor = COLOR.dark;
    bgHover = COLOR.main;
  } else {
    bgColor = bgColor || COLOR.main;
    bgHover = COLOR.dark;
  }
  return (
    <Button
      sx={{
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
