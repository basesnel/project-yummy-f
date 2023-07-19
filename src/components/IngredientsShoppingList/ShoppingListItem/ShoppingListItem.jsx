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

const ShoppingListItem = () => {
  return (
    <Item>
      <WrapperPhoto>
        <Photo src="" alt="product" />
      </WrapperPhoto>
      <Text>Product</Text>
      <LeftContainer>
        <Number>5</Number>
        <BtnRemove>
          <IconRemove />
        </BtnRemove>
      </LeftContainer>
    </Item>
  );
};

export default ShoppingListItem;
