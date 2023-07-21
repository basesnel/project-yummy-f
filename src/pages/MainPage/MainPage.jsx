import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import { PreviewCategories } from 'components/PreviewCategories/PreviewCategories';
import { Search } from 'components/Search/Search';
import { Helmet } from 'react-helmet-async';

import { Hero, HeroTitle, HeroWrapper } from './MainPage.styled';
import { Container } from 'components/Container/Container';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';

import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';

// redux start
import { fetchIngredients, fetchCategories } from 'redux/recipies/operations';
// import { useRecipies } from 'hooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
//redux end

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeWrap>
      <Helmet>
        <title>SoYummy</title>
      </Helmet>
      <FooterBgWrapper>
        <Hero>
          <Container>
            <HeroWrapper>
              <HeroTitle>
                <div>
                  <h1>
                    <span>So</span>Yummy
                  </h1>
                  <p>
                    "What to cook?" is not only a recipe app, it is, in fact,
                    your cookbook. You can add your own recipes to save them for
                    the future.
                  </p>
                </div>
                <Search ver="tablet" />
              </HeroTitle>
              <ChooseYourBreakfast />
              <Search ver="mobile" />
            </HeroWrapper>
          </Container>
        </Hero>
        <PreviewCategories />
      </FooterBgWrapper>
    </ThemeWrap>
  );
}
