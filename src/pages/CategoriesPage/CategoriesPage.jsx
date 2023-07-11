import { Box, Tab, Tabs, ThemeProvider } from '@mui/material';
import { useState, useEffect } from 'react';
// import plug from 'assets/images/PreviewCategories/1.jpg';
// import { resize } from 'helpers/resize';
import { Container } from 'components/Container/Container';
import { useNavigate, useParams } from 'react-router-dom';
import categoriesArr from 'tempFiles/categoriesArr';

const CategoriesPage = () => {
    const [recipieArr, setRecipieArr] = useState([]);
    const navigate = useNavigate();
    const { categoryName } = useParams();

    useEffect(() => {
        return () => {
            if (categoryName === ':categoryName') {
                setCategorie(categoriesArr[1]);
                navigate(`/categories/${categoriesArr[1]}`, { replace: true });
            }
        };
    }, [categoryName, navigate]);

    // useEffect(() => {
    //     navigate(`/categories/${categoriesArr[1]}`);
    // }, [navigate]);

    const [categorie, setCategorie] = useState(categoryName);
    const handleChange = (event, newValue) => {
        setCategorie(categorie);
        navigate(`/categories/${newValue}`);
    };
    return (
        <section>
            <h2>Categories</h2>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    sx={{}}
                    value={categoryName}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {categoriesArr.map(({ _id, name }) => (
                        <Tab
                            key={_id.$oid}
                            value={name.toLowerCase()}
                            label={name}
                        />
                    ))}
                </Tabs>
            </Box>
            <h2>{categoryName}</h2>
        </section>
    );
};

export default CategoriesPage;
