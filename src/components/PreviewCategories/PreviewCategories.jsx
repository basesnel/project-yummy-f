import { Container } from 'components/Container/Container';
import {
    CategoriesBox,
    CategoriesList,
    OtherBtn,
    PreviewCategoriesWrapper,
    RecipesLink,
    RecipesList,
    SeeAllBtn,
} from './PreviewCategories.styled';

import plug from 'assets/images/PreviewCategories/1.jpg';
import { useEffect, useState } from 'react';
import { resize } from 'helpers/resize';

const categoriesNames = ['Breakfast', 'Miscellaneous', 'Chicken', 'Desserts'];
const data = {
    breakfast: [
        { photo: plug, title: 'Banana Pancakes', id: 1 },
        { photo: plug, title: 'Banana Pancakes1', id: 5 },
        { photo: plug, title: 'Banana Pancakes', id: 3434234321 },
        { photo: plug, title: 'Banana Pancakes1', id: 5565463452 },
    ],
    miscellaneous: [
        { photo: plug, title: 'Portuguese prego Por ', id: 2 },
        { photo: plug, title: 'Portuguese prego Por ', id: 7563454654 },
        { photo: plug, title: 'Portuguese prego Por ', id: 37574565 },
        { photo: plug, title: 'Portuguese prego Por ', id: 789742165 },
    ],
    chicken: [
        { photo: plug, title: 'Teriyaki Chicken Casserole', id: 3 },
        {
            photo: plug,
            title: 'Teriyaki Chicken Casserole',
            id: 876872146876,
        },
        {
            photo: plug,
            title: 'Teriyaki Chicken Casserole',
            id: 1654654748,
        },
        {
            photo: plug,
            title: 'Teriyaki Chicken Casserole',
            id: 231657984549874,
        },
    ],
    desserts: [
        { photo: plug, title: 'Blackberry Fool', id: 4 },
        { photo: plug, title: 'Blackberry Fool', id: 798798756416 },
        { photo: plug, title: 'Blackberry Fool', id: 321654987 },
        { photo: plug, title: 'Blackberry Fool', id: 1798513944 },
    ],
};

export function PreviewCategories() {
    const [amountRecipe, setAmountRecipe] = useState(0);

    useEffect(() => {
        setAmountRecipe(resize());
    }, []);

    return (
        <PreviewCategoriesWrapper>
            <Container>
                <CategoriesBox>
                    <CategoriesList>
                        {categoriesNames.map(name => {
                            return (
                                <li key={name}>
                                    <h2>{name}</h2>
                                    <RecipesList>
                                        {data[name.toLowerCase()]
                                            .slice(0, amountRecipe)
                                            .map(recipe => {
                                                return (
                                                    <li key={recipe.id}>
                                                        <RecipesLink
                                                            to={`/recipe/${recipe.id}`}
                                                        >
                                                            <img
                                                                src={
                                                                    recipe.photo
                                                                }
                                                                alt={
                                                                    recipe.title
                                                                }
                                                            />
                                                            <div>
                                                                <h3>
                                                                    {
                                                                        recipe.title
                                                                    }
                                                                </h3>
                                                            </div>
                                                        </RecipesLink>
                                                    </li>
                                                );
                                            })}
                                    </RecipesList>
                                    <SeeAllBtn
                                        to={`/categories/${name.toLowerCase()}`}
                                    >
                                        See all
                                    </SeeAllBtn>
                                </li>
                            );
                        })}
                    </CategoriesList>
                    <OtherBtn to="/categories">Other categories</OtherBtn>
                </CategoriesBox>
            </Container>
        </PreviewCategoriesWrapper>
    );
}
