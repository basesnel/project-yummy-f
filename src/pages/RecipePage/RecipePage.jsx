import SkewButton from 'components/SkewButton/SkewButton';
import {
  RecipeHero,
  RecipeTitle,
  RecipeDeskr,
  TimeContainer,
  MainSection,
  ListHead,
  List,
  PrepSection,
} from './RecipePage.styled';

const RecipePage = () => {
  return (
    <>
      <RecipeHero>
        <RecipeTitle>RecipePage</RecipeTitle>
        <RecipeDeskr></RecipeDeskr>
        <SkewButton bgColor={'transparent'}>Add to favorite recipes</SkewButton>
        <TimeContainer>
          <img
            src={require('../../assets/images/recipePage/clock.svg').default}
            alt="clock"
          />
          <p></p>
        </TimeContainer>
      </RecipeHero>
      <MainSection>
        <ListHead>
          <p></p>
          <p></p>
          <p></p>
        </ListHead>
        <List></List>
      </MainSection>
      <PrepSection>
        <div>
          <h2>Recipe Preparation</h2>
          <ul></ul>
        </div>
        <img alt="dish" />
      </PrepSection>
    </>
  );
};

export default RecipePage;
