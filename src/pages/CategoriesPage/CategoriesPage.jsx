import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

import { Container } from 'components/Container/Container';
import { useNavigate, useParams } from 'react-router-dom';
import categoriesArr from 'tempFiles/categoriesArr';
import recipies from 'tempFiles/recipies';
import CardCategorie from 'components/CardCategorie/CardCategorie';

function getRecipies(str) {
  return recipies.filter(({ category }) => category.toLowerCase() === str);
}

const CategoriesPage = () => {
  const navigate = useNavigate();

  const [recipieArr, setRecipieArr] = useState([]);
  // const [categorie, setCategorie] = useState('');
  let { categoryName } = useParams();

  useEffect(() => {
    if (categoryName === ':categoryName') {
      setRecipieArr(getRecipies('beef'));
      navigate(`/categories/beef`, { replace: true });
    }
  }, [categoryName, navigate]);

  const handleChange = (event, newValue) => {
    navigate(`/categories/${newValue}`);
    setRecipieArr(getRecipies(newValue));
  };
  return (
    <section>
      <Container>
        <Typography
          variant="h2"
          sx={{
            color: '#001833',
            fontFamily: 'Poppins',
            fontWeight: '600',
            lineHeight: '1',
            xs: {
              fontSize: '28px',
              letterSpacing: '-0.56px',
            },
            md: {
              fontSize: '28px',
              letterSpacing: '-0.64px',
            },
            lg: {
              fontSize: '28px',
              letterSpacing: '-0.88px',
            },
          }}
        >
          Categories
        </Typography>
        <Box sx={{ width: '100%' }}>
          {categoriesArr.length && categoryName !== ':categoryName' && (
            <Tabs
              sx={{ mt: 10 }}
              value={categoryName}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              {categoriesArr.map(({ _id, name }) => (
                <Tab key={_id.$oid} value={name.toLowerCase()} label={name} />
              ))}
            </Tabs>
          )}
        </Box>
        <h2>{categoryName}</h2>

        <Grid
          container
          rowSpacing={{ xs: 3.5, md: 4, lg: 12.5 }}
          columnSpacing={{ md: 4, lg: 1.5 }}
        >
          {recipieArr.length &&
            recipieArr?.map(({ _id, title, thumb }) => (
              <Grid item xs={12} md={6} lg={3} key={_id.$oid}>
                <CardCategorie title={title} thumb={thumb}></CardCategorie>
              </Grid>
            ))}
        </Grid>
      </Container>
    </section>
  );
};

export default CategoriesPage;
