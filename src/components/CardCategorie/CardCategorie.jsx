import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  styled,
} from '@mui/material';

const CardWrap = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.background.input,
  color: theme.palette.text.secondary,
}));

const CardCategorie = ({ id, title, thumb, handleRecipe }) => {
  return (
    <Card onClick={() => handleRecipe(id)} sx={{ position: 'relative' }}>
      <CardActionArea>
        <CardMedia
          sx={{
            height: '323px',
            width: '100%',
            position: 'relative',
            borderRadius: '8px',
          }}
          component="img"
          image={thumb}
          alt={title}
        />
        <CardWrap
          sx={{
            p: 2,
            left: '16px',
            right: '16px',
            position: 'absolute',
            bottom: '24px',
            borderRadius: '8px',
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              // color: ' #3E4462',

              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: '500',
              lineHeight: '20px',
              letterSpacing: '-0.24px',
            }}
          >
            {title}
          </Typography>
        </CardWrap>
      </CardActionArea>
    </Card>
  );
};

export default CardCategorie;
