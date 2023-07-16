import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box p={{ xs: '164px 0 100px', lg: '198px 0 203px' }}>
      <Card>
        <CardMedia
          sx={{
            color: '#000',
            fontFamily: 'Poppins',
          }}
          component="img"
          alt="Not found page"
          height={{ xs: '170px', md: '327px', lg: '331px' }}
          width={{ xs: '259px', md: '498px', lg: '' }}
          image={require('assets/images/page404/page404.svg').default}
        />
        <CardContent>
          <Typography
            variant="h2"
            sx={{
              fontWeight: '600',
              lineHeight: '111%',
              letterSpacing: '-0.48px',
              textAlign: 'center',
            }}
            mt={{ xs: '14px', md: '32px' }}
            fontSize={{ xs: '18px', md: '24px' }}
          >
            We are sorry,
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: '400',
              lineHeight: '133%',
              letterSpacing: '-0.36px',
              textAlign: 'center',
            }}
            pt={{ xs: '8px', md: '14px' }}
            fontSize={{ xs: '14px', md: '18px' }}
          >
            but the page you were looking for can’t be found..
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default NotFoundPage;
