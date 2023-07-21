import { Container } from 'components/Container/Container';

import { ContainerItem, ContainerPosition } from './ShoppingListPage.styled';
import ShoppingList from 'components/IngredientsShoppingList/ShoppingList/ShoppingList';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';

const ShoppingListPage = () => {
  return (
    <ThemeWrap>
      <FooterBgWrapper>
        {/* <ShoppingListContainer> */}

        <Container>
          <ContainerSection>
            <Title>Shopping list</Title>

            <ContainerItem>
              <p> Products </p>
              <ContainerPosition>
                <p> Number</p>
                <p> Remove</p>
              </ContainerPosition>
            </ContainerItem>
            <ShoppingList />
          </ContainerSection>
        </Container>
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default ShoppingListPage;
