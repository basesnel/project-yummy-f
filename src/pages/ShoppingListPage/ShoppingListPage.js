import { Container } from 'components/Container/Container';
// import MainTitle from 'components/MainTitle/MainTitle';
import ShoppingListItem from 'components/IngredientsShoppingList/ShoppingListItem/ShoppingListItem';
import {
  // ShoppingListContainer,
  TitleContainer,
	Text,
  PositionedP,
} from './ShoppingListPage.styled';
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
	          <TitleContainer>
	            <Title>Shopping list</Title>
	            {/* <MainTitle title="Shopping list" /> */}
	          </TitleContainer>
	
	          <Text>
	            <p> Products </p>
	            <PositionedP> Number </PositionedP>
	            <p> Remove</p>
	          </Text>
	
	          <ShoppingList>
	            <ShoppingListItem />
	            <ShoppingListItem />
	            <ShoppingListItem />
	            <ShoppingListItem />
	            <ShoppingListItem />
	          </ShoppingList>
	        </ContainerSection>
	      </Container>
	      {/* </ShoppingListContainer> */}
      </FooterBgWrapper>

    </ThemeWrap>
  );
};

export default ShoppingListPage;
