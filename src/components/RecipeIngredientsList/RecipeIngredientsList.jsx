import { IngrItemMUI } from './IngrItemMUI';
import API from 'api';
import {
  MainSection,
  ListHead,
  List,
  PositionedP,
  // IngrItem,
  ImgAndName,
  MeasureAndCheckbox,
  // Checked,
  Unchecked,
} from './RecipeIngredientsList.styled';
import { useEffect, useState } from 'react';

export const RecipeIngredientsList = ({ ingredients }) => {
  const [ingrAvailable, setIngrAvailable] = useState([]);

  useEffect(() => {
    const getAllIngr = async () => {
      const ingredients = await API.getIngredients();
      setIngrAvailable(ingredients);
    };

    getAllIngr();
  }, []);

  const getIngredientById = ingrId => {
    return ingrAvailable.find(({ _id }) => ingrId === _id);
  };

  // const [checked, setChecked] = useState([]);

  //const handleCheck = e => {
  /// if (e.target.id === e.currentTarget.firstElementChild.key) {
  //  setIsChecked(prev => !prev);
  //  }
  //  console.log('error');
  /* if (checked) {
      const ind = checked.findIndex(id => id === e.target.id);

      if (ind > 0) {
        setChecked(prev => prev.filter(id => id !== e.target.id));
      } else {
        setChecked(prev => [...prev, e.target.id]);
      }
    } */
  // };

  return (
    <MainSection>
      <ListHead>
        <p>Ingredients</p>
        <PositionedP>Number</PositionedP>
        <p>Add to list</p>
      </ListHead>
      <List>
        {ingredients.map(ingr => (
          <IngrItemMUI key={ingr.id}>
            {/* <IngrItem key={ingr.id}> */}
            <ImgAndName>
              <img src={getIngredientById(ingr.id)?.img} alt="ingredient" />
              <p>{getIngredientById(ingr.id)?.name}</p>
            </ImgAndName>
            <MeasureAndCheckbox>
              <div>
                <p>{ingr.measure}</p>
              </div>
              <Unchecked></Unchecked>
            </MeasureAndCheckbox>
            {/* </IngrItem> */}
          </IngrItemMUI>
        ))}
      </List>
    </MainSection>
  );
};
