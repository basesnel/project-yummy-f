import { useState, useEffect } from 'react';

import getPopularRecipes from 'api/getPopularRecipes';

import {
  SectionContainer,
  SectionTitle,
  RecipesContainer,
} from './PopularRecipe.styled';

const PopularRecipe = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const recipes = await getPopularRecipes();
      if (recipes) {
        setPopularRecipes(recipes.slice(0, 4));
      }
    };

    getRecipes();
  }, []);

  console.log(popularRecipes);

  return (
    <SectionContainer>
      <SectionTitle>Popular recipe</SectionTitle>
      <RecipesContainer></RecipesContainer>
    </SectionContainer>
  );
};

export default PopularRecipe;
