import {
  RecipeHero,
  // RecipeTitle,
  RecipeDeskr,
  TimeContainer,
} from './RecipePageHero.styled';
import SkewButton from 'components/SkewButton/SkewButton';
import MainTitle from 'components/MainTitle/MainTitle';

export const RecipePageHero = ({ title, descr, time, isFavorite }) => {
  //const { title, descr, time, isFavorite } = hero;

  const hours = Math.floor(+time / 60);
  const minutes = +time - hours * 60;

  //console.log(hero, hero.title);
  console.log(title);

  return (
    <RecipeHero>
      <MainTitle title={title} color={'#8baa36'} />
      <RecipeDeskr>{descr}</RecipeDeskr>

      <SkewButton
        bgColor={'transparent'}
        paddingHxs={12}
        paddingHmd={22}
        paddingHlg={22}
        paddingWxs={24}
        paddingWmd={44}
        paddingWlg={44}
        style={{ border: '1px solid #8baa36', color: '#23262a' }}
      >
        {isFavorite ? 'Remove from favorite' : 'Add to favorite recipes'}
      </SkewButton>
      <TimeContainer>
        <img
          src={require('../../assets/images/recipePage/clock.svg').default}
          alt="clock"
        />
        <p>{hours !== 0 ? `${hours} h ${minutes} min` : `${minutes}`}</p>
      </TimeContainer>
    </RecipeHero>
  );
};
