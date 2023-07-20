import { useTheme } from '@mui/material';
import {
  BtnRemove,
  IconRemove,
  Item,
  ImageContainer,
  NumberContainer,
  ButtonContainer,
  Number,
  Photo,
  Text,
  WrapperPhoto,
} from './ShoppingListItem.styled';

import API from 'api';

import { getStore } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const ShoppingListItem = props => {
  const { shopId, _id, name, img, measure, recipeId } = props;

  const dispatch = useDispatch();

  // const formMeasure = (measure, count) => {
  //   const num = parseInt(measure);
  //   return measure.replace(num, num * count);
  // };

  const toggleRecipeIngredient = async data => {
    try {
      const res = await API.toggleProduct(data.id, data.measure, data.recipeId);
      // console.log('success');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = value => {
    toggleRecipeIngredient(value);
    dispatch(getStore());
  };

  const theme = useTheme();
  return (
    <Item key={shopId}>
      <ImageContainer>
        <WrapperPhoto>
          <Photo src={img} alt={name} />
        </WrapperPhoto>
        <Text>{name}</Text>
      </ImageContainer>
      <NumberContainer>
        <Number>{measure}</Number>
      </NumberContainer>
      <ButtonContainer>
        <BtnRemove
          onClick={() => handleClick({ id: _id, measure, recipeId })}
          style={{
            color: theme.palette.text.primary,
            backgroundColor: 'transparent',
          }}
        >
          <IconRemove viewBox="0 0 14 14">
            <path
              d="M10.9375 3.0625L3.0625 10.9375"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.9375 10.9375L3.0625 3.0625"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </IconRemove>
        </BtnRemove>
      </ButtonContainer>
    </Item>
  );
};

export default ShoppingListItem;
