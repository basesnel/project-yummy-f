import { Container } from 'components/Container/Container';
import MainTitle from 'components/MainTitle/MainTitle';
import ShoppingListItem from 'components/IngredientsShoppingList/ShoppingListItem/ShoppingListItem';
import {
  ShoppingListContainer,
  TitleContainer,
  Text,
} from './ShoppingListPage.styled';
import ShoppingList from 'components/IngredientsShoppingList/ShoppingList/ShoppingList';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';

const ShoppingListPage = () => {
  return (
    <ThemeWrap>
      <ShoppingListContainer>
        <Container>
          <TitleContainer>
            <MainTitle title="Shopping list" />
          </TitleContainer>

          <Text>
            <p> Products </p>
            <p> Number </p>
            <p> Remove</p>
          </Text>

          <ShoppingList>
            <ShoppingListItem />
            <ShoppingListItem />
            <ShoppingListItem />
            <ShoppingListItem />
            <ShoppingListItem />
          </ShoppingList>
        </Container>
      </ShoppingListContainer>
    </ThemeWrap>
  );
};

export default ShoppingListPage;
