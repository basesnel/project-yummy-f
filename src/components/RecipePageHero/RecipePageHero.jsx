import {
  RecipeHero,
  // RecipeTitle,
  RecipeDeskr,
  TimeContainer,
} from './RecipePageHero.styled';
import SkewButton from 'components/SkewButton/SkewButton';
import MainTitle from 'components/MainTitle/MainTitle';

export const RecipePageHero = ({ hero }) => {
  const { title, descr, time, isFavorite } = hero;

  const hours = Math.floor(+time / 60);
  const minutes = +time - hours * 60;

  return (
    <RecipeHero>
      <MainTitle>{title}</MainTitle>
      <RecipeDeskr>{descr}</RecipeDeskr>
      <SkewButton bgColor={'transparent'}>
        {isFavorite ? 'Remove from favorite' : 'Add to favorite recipes'}
      </SkewButton>
      <TimeContainer>
        <img
          src={require('../../assets/images/recipePage/clock.svg').default}
          alt="clock"
        />
        <p>{hours !== 0 ? `${hours}h ${minutes}min` : `${minutes}`}</p>
      </TimeContainer>
    </RecipeHero>
  );
};
