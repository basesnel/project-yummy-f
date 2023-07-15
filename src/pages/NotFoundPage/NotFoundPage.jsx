import { Card, CardMedia } from '@mui/material';

const NotFoundPage = () => {
  return (
    <>
      <h1>Not found</h1>
      <Card>
        <CardMedia
          component="img"
          alt="Not found page"
          height="140"
          image="assets/images/page404/page404.svg"
        />
      </Card>
    </>
  );
};
export default NotFoundPage;
