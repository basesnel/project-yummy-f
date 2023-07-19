import { IngrItemMUI } from './IngrItemMUI';
import {
  MainSection,
  ListHead,
  List,
  PositionedP,
  // IngrItem,
  ImgAndName,
  MeasureAndCheckbox,
  MeasureCont,
  // Checked,
  //Unchecked,
} from './RecipeIngredientsList.styled';

import { useMediaQuery } from 'react-responsive';
import Checkbox from 'react-custom-checkbox';
import { SIZE } from 'constants';
import API from 'api';

export const RecipeIngredientsList = ({ ingredients, recipeId }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${SIZE.tablet})`,
  });

  const isTablet = useMediaQuery({
    query: `(max-width: ${SIZE.desktop})`,
  });

  const setPlaceholderByWidth = () => {
    if (isMobile) {
      return require('../../assets/images/recipePage/ingrMob.png').default;
    } else if (isTablet) {
      return require('../../assets/images/recipePage/ingrTab.png').default;
    } else {
      return require('../../assets/images/recipePage/ingrDesk.png').default;
    }
  };

  const toggleRecipeIngredient = async data => {
    try {
      const res = await API.toggleProduct(data.id, data.measure, data.recipeId);
      // console.log('success');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = (value, event) => {
    console.log('checkbox click');
    toggleRecipeIngredient(value);
  };

  return (
    <MainSection>
      <ListHead>
        <p>Ingredients</p>
        <PositionedP>Number</PositionedP>
        <p>Add to list</p>
      </ListHead>
      <List>
        {ingredients.map(({ id, measure }) => (
          <IngrItemMUI key={id._id}>
            <ImgAndName>
              <img src={id.img || setPlaceholderByWidth()} alt="ingredients" />
              <p>{id.name}</p>
            </ImgAndName>
            <MeasureAndCheckbox>
              <MeasureCont>
                <p>{measure}</p>
              </MeasureCont>
              <Checkbox
                borderColor="#7e7e7e"
                size={isMobile ? 18 : 35}
                backgroundcolor="transparent"
                borderRadius={4}
                icon={
                  <img
                    src={
                      require('../../assets/images/recipePage/pick.svg').default
                    }
                    alt="checkbox"
                    style={{ width: isMobile ? 10 : 20 }}
                  />
                }
                onChange={() => handleCheck({ id: id._id, measure, recipeId })}
              />
            </MeasureAndCheckbox>
          </IngrItemMUI>
        ))}
      </List>
    </MainSection>
  );
};
