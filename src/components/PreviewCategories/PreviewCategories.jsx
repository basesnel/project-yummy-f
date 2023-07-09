import { Container } from 'components/Container/Container';
import {
    CategoriesList,
    OtherBtn,
    PreviewCategoriesWrapper,
    RecipesList,
} from './PreviewCategories.styled';

import plug from 'assets/images/PreviewCategories/1.jpg';

export function PreviewCategories() {
    const data = {
        breakfast: [{ photo: plug, title: 'Banana Pancakes', id: 1 }],
        miscellaneous: [{ photo: plug, title: 'Portuguese prego Por ', id: 2 }],
        chicken: [{ photo: plug, title: 'Teriyaki Chicken Casserole', id: 3 }],
        desserts: [{ photo: plug, title: 'Blackberry Fool', id: 4 }],
    };
    return (
        <PreviewCategoriesWrapper>
            <Container>
                <CategoriesList>
                    <li>
                        <h2>Breakfast</h2>
                        <RecipesList>
                            {data.breakfast.map(recipe => {
                                return (
                                    <li key={recipe.id}>
                                        <img
                                            src={recipe.photo}
                                            alt={recipe.title}
                                        />
                                        <div>
                                            <h3>{recipe.title}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </RecipesList>
                        <button>See all</button>
                    </li>
                    <li>
                        <h2>Miscellaneous</h2>
                        <RecipesList>
                            {data.miscellaneous.map(recipe => {
                                return (
                                    <li key={recipe.id}>
                                        <img
                                            src={recipe.photo}
                                            alt={recipe.title}
                                        />
                                        <div>
                                            <h3>{recipe.title}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </RecipesList>
                        <button>See all</button>
                    </li>
                    <li>
                        <h2>Chicken</h2>
                        <RecipesList>
                            {data.chicken.map(recipe => {
                                return (
                                    <li key={recipe.id}>
                                        <img
                                            src={recipe.photo}
                                            alt={recipe.title}
                                        />
                                        <div>
                                            <h3>{recipe.title}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </RecipesList>
                        <button>See all</button>
                    </li>
                    <li>
                        <h2>Desserts</h2>
                        <RecipesList>
                            {data.desserts.map(recipe => {
                                return (
                                    <li key={recipe.id}>
                                        <img
                                            src={recipe.photo}
                                            alt={recipe.title}
                                        />
                                        <div>
                                            <h3>{recipe.title}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </RecipesList>
                        <button>See all</button>
                    </li>
                </CategoriesList>
                <OtherBtn>Other categories</OtherBtn>
            </Container>
        </PreviewCategoriesWrapper>
    );
}
