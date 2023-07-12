import { Box, Tab, Tabs } from '@mui/material';
import { useState, useEffect } from 'react';

import { Container } from 'components/Container/Container';
import { useNavigate, useParams } from 'react-router-dom';
import categoriesArr from 'tempFiles/categoriesArr';
import recipies from 'tempFiles/recipies';

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
        <h2>Categories</h2>
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
        <ul>
          {recipieArr.length &&
            recipieArr?.map(el => <li key={el._id.$oid}>{el.title}</li>)}
        </ul>
      </Container>
    </section>
  );
};

export default CategoriesPage;
