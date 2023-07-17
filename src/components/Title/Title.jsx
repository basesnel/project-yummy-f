import TitleTheme from './Title.styled';

export default function Title({ children }) {
  return (
    <TitleTheme
      variant="h2"
      sx={{
        fontFamily: 'Poppins',
        fontWeight: '600',
        lineHeight: '1',
        // pt: {
        //   xs: 6.5,
        //   md: 9,
        //   lg: 20.5,
        // },
        fontSize: {
          xs: '28px',
          md: '32px',
          lg: '44px',
        },
        letterSpacing: {
          xs: '-0.56px',
          md: '-0.64px',
          lg: '-0.88px',
        },
        mb: { xs: '28px', md: '32px', lg: '72px' },
      }}
    >
      {children}
    </TitleTheme>
  );
}
