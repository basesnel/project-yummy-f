import {
  RecipeHero,
  RecipeDeskr,
  TimeContainer,
} from './RecipePageHero.styled';
import SkewButton from 'components/SkewButton/SkewButton';
import MainTitle from 'components/MainTitle/MainTitle';
import API from 'api';
import { useState, useEffect } from 'react';

export const RecipePageHero = ({
  title,
  descr,
  time,
  isFavorite,
  setIsFavorite,
  recipeId,
}) => {
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(isFavorite);

  useEffect(() => {
    const getFav = async () => {
      try {
        const res = await API.getAllFavorites();

        if (res.some(item => item === recipeId)) {
          setIsAddedToFavorite(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getFav();
  }, [recipeId]);

  const hours = Math.floor(+time / 60);
  const minutes = +time - hours * 60;

  const addToFav = async recipeId => {
    try {
      const res = await API.addToFavorites(recipeId);
      setIsFavorite(true);
      setIsAddedToFavorite(true);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeFromFav = async recipeId => {
    try {
      const res = await API.removeFromFavorites(recipeId);
      setIsFavorite(false);
      setIsAddedToFavorite(false);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBtnClick = e => {
    if (!isAddedToFavorite) {
      addToFav(recipeId);
    } else {
      removeFromFav(recipeId);
    }
  };

  return (
    <RecipeHero>
      <MainTitle title={title} color={'#8baa36'} />
      <RecipeDeskr>{descr}</RecipeDeskr>
      <div onClick={handleBtnClick}>
        <SkewButton
          bgColor={'transparent'}
          paddingHxs={12}
          paddingHmd={22}
          paddingHlg={22}
          paddingWxs={24}
          paddingWmd={44}
          paddingWlg={44}
          borderColor={'green'}
        >
          {isAddedToFavorite || isFavorite
            ? 'Remove from favorite'
            : 'Add to favorite recipes'}
        </SkewButton>
      </div>
      <TimeContainer>
        <img
          src={require('../../assets/images/recipePage/clock.svg').default}
          alt="clock"
        />
        <p>{hours !== 0 ? `${hours} h ${minutes} min` : `${minutes} min`}</p>
      </TimeContainer>
    </RecipeHero>
  );
};
