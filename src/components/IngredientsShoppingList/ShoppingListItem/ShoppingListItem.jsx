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

const ShoppingListItem = props => {
  const { shopId, name, img, measure, handleClick } = props;

  // const dispatch = useDispatch();

  // console.log(ingId, name);

  // const formMeasure = (measure, count) => {
  //   const num = parseInt(measure);
  //   return measure.replace(num, num * count);
  // };

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
          onClick={handleClick}
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
