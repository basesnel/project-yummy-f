import { useState, useEffect } from 'react';

import getPopularRecipes from 'api/getPopularRecipes';

import {
  SectionContainer,
  SectionTitle,
  RecipesList,
  ListItem,
  ListItemLink,
  RecipeInfoContainer,
  PreviewHolder,
  Preview,
  RecipeInfo,
  RecipeName,
  RecipeDescription,
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

  return (
    <SectionContainer>
      <SectionTitle>Popular recipe</SectionTitle>
      <RecipesList>
        {popularRecipes.map(recipe => {
          return (
            <ListItem key={recipe._id}>
              <ListItemLink to={`/recipe/${recipe._id}`}>
                <RecipeInfoContainer>
                  <PreviewHolder>
                    <Preview
                      src={recipe.preview}
                      alt={recipe.title}
                      width="100%"
                      height="100%"
                    />
                  </PreviewHolder>
                  <RecipeInfo>
                    <RecipeName>{recipe.title}</RecipeName>
                    <RecipeDescription>{recipe.description}</RecipeDescription>
                  </RecipeInfo>
                </RecipeInfoContainer>
              </ListItemLink>
            </ListItem>
          );
        })}
      </RecipesList>
    </SectionContainer>
  );
};

export default PopularRecipe;
