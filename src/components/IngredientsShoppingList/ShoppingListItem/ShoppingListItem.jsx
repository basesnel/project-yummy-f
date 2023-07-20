import { useTheme } from '@mui/material';
import {
  BtnRemove,
  IconRemove,
  Item,
  LeftContainer,
  Number,
  Photo,
  Text,
  WrapperPhoto,
} from './ShoppingListItem.styled';
import { TRANSITION } from 'constants';

const ShoppingListItem = () => {
  const theme = useTheme();
  return (
    <Item>
      <WrapperPhoto>
        <Photo src="" alt="product" />
      </WrapperPhoto>
      <Text
        style={{
          color: theme.palette.text.primary,
          transition: TRANSITION.forHoverColor,
        }}
      >
        Product
      </Text>
      <LeftContainer>
        <Number>5</Number>
        <BtnRemove
          style={{
            color: theme.palette.text.primary,
            backgroundColor: 'transparent',
            transition: TRANSITION.forHoverColor,
          }}
        >
          <IconRemove viewBox="0 0 20 20">
            <path d="M15.625 4.375L4.375 15.625" stroke="currentColor" />
            <path d="M15.625 15.625L4.375 4.375" stroke="currentColor" />
          </IconRemove>
        </BtnRemove>
      </LeftContainer>
    </Item>
  );
};

export default ShoppingListItem;
