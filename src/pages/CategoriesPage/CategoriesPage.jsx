import { Box, Tab, Tabs, ThemeProvider } from '@mui/material';
import { useState, useEffect } from 'react';
// import plug from 'assets/images/PreviewCategories/1.jpg';
// import { resize } from 'helpers/resize';
import { Container } from 'components/Container/Container';
import theme from 'theme';
import { useNavigate, useParams } from 'react-router-dom';
import categoriesArr from 'tempFiles/categoriesArr';

const CategoriesPage = () => {
    // const [categorie, setCategorie] = useState('');
    const [categories, setCategories] = useState(categoriesArr);
    const navigate = useNavigate();
    const { categoryName } = useParams();

    useEffect(() => {
        return () => {
            if (categoryName === ':categoryName') {
                setValue(categoriesArr[1]);
                navigate(`/categories/${categoriesArr[1]}`);
            }
        };
    }, [categoryName, navigate]);

    // useEffect(() => {
    //   navigate(`/categories/${categoriesArr[1]}`);

    // }, [newValue])

    const [value, setValue] = useState(categoryName);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/categories/${newValue}`);
    };
    return (
        <section>
            <h2>Categories</h2>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    sx={{}}
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
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
