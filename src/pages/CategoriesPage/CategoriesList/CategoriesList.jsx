import { Box, Tab, Tabs } from '@mui/material';
import API from 'api';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CategoriesList() {
  const [categoriesArr, setCategoriesArr] = useState([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();

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

  const handleChange = (event, newValue) => {
    navigate(`/categories/${newValue}`);
  };
  return (
    <Box
      sx={{
        width: '100%',
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
  );
}
