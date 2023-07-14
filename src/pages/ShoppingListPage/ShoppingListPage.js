import { Container } from 'components/Container/Container';
import MainTitle from 'components/MainTitle/MainTitle';
import ShoppingListItem from 'components/IngredientsShoppingList/ShoppingListItem/ShoppingListItem';
import { WrapperMain } from './ShoppingListPage.styled';
import ShoppingList from 'components/IngredientsShoppingList/ShoppingList/ShoppingList';

const ShoppingListPage = () => {
  return (
    <WrapperMain>
      <Container>
        <MainTitle title="Shopping list" />
        
        <ShoppingList>
          <ShoppingListItem />
          <ShoppingListItem />
          <ShoppingListItem />
          <ShoppingListItem />
          <ShoppingListItem />
        </ShoppingList>
      </Container>
    </WrapperMain>
  );
};

export default ShoppingListPage;
