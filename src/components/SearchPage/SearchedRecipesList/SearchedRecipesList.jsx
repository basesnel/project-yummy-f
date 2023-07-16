import CardCategorie from 'components/CardCategorie/CardCategorie';
import { useNavigate } from 'react-router-dom';
// import { CardsContainer } from './SearchedRecipesList.styled';
import { Grid } from '@mui/material';
export const SearchedRecipesList = ({ recipieArr }) => {
  const navigate = useNavigate();
  const chooseRecipe = id => {
    navigate(`/recipe/${id}`);
  };
  return (
    <>
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
    </>
  );
};
