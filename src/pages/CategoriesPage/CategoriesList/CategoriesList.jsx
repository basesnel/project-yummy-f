import { Box, Tab, Tabs } from '@mui/material';
import API from 'api';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CategoriesList({ onError }) {
  const [categoriesArr, setCategoriesArr] = useState([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  // download list categories name
  useEffect(() => {
    const categoriesList = async () => {
      setLoader(true);
      try {
        const res = await API.fetchCategories();
        if (!res?.length) throw new Error("don't find list categories");
        setCategoriesArr(await API.fetchCategories());
      } catch (error) {
        console.log(error);
        setCategoriesArr([]);
        onError(true);
      } finally {
        setLoader(false);
      }
    };
    categoriesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event, newValue) => {
    navigate(`/categories/${newValue}`);
  };

  return (
    <>
      {!loader && (
        <Box
          sx={{
            width: '100%',
          }}
        >
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
            {categoriesArr?.map(categ => (
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
        </Box>
      )}
      {loader && <Loader />}
    </>
  );
}
