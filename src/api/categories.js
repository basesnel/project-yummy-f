import axios from 'axios';

axios.defaults.baseURL = 'https://project-yummy-b.onrender.com/api';

export const fetchCategories = async () => {
    try {
        const response = await axios.get('/recipes/category-list');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
