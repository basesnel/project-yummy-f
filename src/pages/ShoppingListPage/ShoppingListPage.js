import { Container } from 'components/Container/Container';

import { ContainerItem, ContainerPosition } from './ShoppingListPage.styled';
import ShoppingList from 'components/IngredientsShoppingList/ShoppingList/ShoppingList';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';
import { NoSearchResults } from 'components/SearchPage/NoSearchResults/NoSearchResults';
import { Helmet } from 'react-helmet-async';

import Loader from 'components/Loader/Loader';

import { getStore } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAuth } from 'hooks';

const ShoppingListPage = () => {
  const [loading, setLoading] = useState(false);
  // const [shopList, setShopList] = useState([]);

  const dispatch = useDispatch();
  const { store } = useAuth();

  useEffect(() => {
    setLoading(true);
    dispatch(getStore())
      .unwrap()
      .then(originalPromiseResult => {
        setLoading(false);
      })
      .catch(rejectedValueOrSerializedError => {});
  }, [dispatch]);

  return (
    <ThemeWrap>
      <Helmet>
        <title>Shopping List</title>
      </Helmet>
      <FooterBgWrapper>
        {/* <ShoppingListContainer> */}

        <Container>
          <ContainerSection>
            <Title>Shopping list</Title>
            {loading && <Loader />}
            {!store?.length && !loading ? (
              <NoSearchResults
                text={`Please add something to your shopping list`}
              />
            ) : (
              <>
                <ContainerItem>
                  <p> Products </p>
                  <ContainerPosition>
                    <p> Number</p>
                    <p> Remove</p>
                  </ContainerPosition>
                </ContainerItem>
                <ShoppingList shopping={store} />
              </>
            )}
          </ContainerSection>
        </Container>
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default ShoppingListPage;
