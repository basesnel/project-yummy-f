import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

import { Container } from 'components/Container/Container';
import { useNavigate, useParams } from 'react-router-dom';
import CardCategorie from 'components/CardCategorie/CardCategorie';
import API from 'api';

const CategoriesPage = () => {
  const navigate = useNavigate();

  const [recipieArr, setRecipieArr] = useState([]);
  const [categoriesArr, setCategoriesArr] = useState([]);

  const { categoryName } = useParams();

  // download list categories name
  useEffect(() => {
    const categoriesList = async () => {
      try {
        setCategoriesArr(await API.fetchCategories());
      } catch (error) {
        console.log(error);
      }
    };
    categoriesList();
  }, []);

  // set RecipierArr and url to initial state
  useEffect(() => {
    const oneCategorie = async categoryName => {
      try {
        const res = await API.fetchRecipies(categoryName);
        setRecipieArr(res.recipes);
      } catch (err) {
        console.log();
      }
    };
    const tempCategoryName =
      categoryName === ':categoryName' ? 'beef' : categoryName;
    oneCategorie(tempCategoryName);
    navigate(`/categories/${tempCategoryName}`);
  }, [categoryName, navigate]);

  const handleChange = (event, newValue) => {
    navigate(`/categories/${newValue}`);
  };

  // transition to RecipePage
  const chooseRecipe = id => {
    console.log(id);
    navigate(`/recipe/${id}`);
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
            pt: {
              xs: 6.5,
              md: 9,
              lg: 20.5,
            },
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
          Categories
        </Typography>

        <Box
          sx={{
            width: '100%',
            // p: '10px',
            // color: '#BDBDBD',
            // fontWeight: '400',
            // lineHeight: '1',

            // fontSize: { xs: '14px', md: '18px' },
            // mt: { xs: '60px', md: '100px' },
            // mb: { xs: '22px', md: '18px' },
          }}
        >
          {categoriesArr?.length && categoryName !== ':categoryName' && (
            <Tabs
              sx={{
                mt: 10,
                borderBottom: '1px solid #eaeaea',
              }}
              value={categoryName}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              {categoriesArr.length &&
                categoriesArr.map(categ => (
                  <Tab
                    sx={{
                      py: { xs: '32px', md: '28px' },
                      px: { xs: '14px', md: '28px' },
                      textTransform: 'capitalize',
                      color: '#BDBDBD',
                      fontWeight: '400',
                      lineHeight: '1',
                      fontFamily: 'Poppins',
                      fontSize: { xs: '14px', md: '18px' },
                    }}
                    key={categ}
                    value={categ.toLowerCase()}
                    label={categ}
                  />
                ))}
            </Tabs>
          )}
        </Box>

        <Grid
          container
          pt={{ xs: '32px', md: '50px' }}
          mb={{ xs: '60px', md: '100px' }}
          rowSpacing={{ xs: 3.5, md: 4, lg: 12.5 }}
          columnSpacing={{ md: 4, lg: 1.5 }}
        >
          {recipieArr &&
            recipieArr.length &&
            recipieArr?.map(({ _id, title, thumb }) => (
              <Grid item xs={12} md={6} lg={3} key={_id}>
                <CardCategorie
                  handleRecipe={chooseRecipe}
                  id={_id}
                  title={title}
                  thumb={thumb}
                ></CardCategorie>
              </Grid>
            ))}
        </Grid>
      </Container>
    </section>
  );
};

export default CategoriesPage;
