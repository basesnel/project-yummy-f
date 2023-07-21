// import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';

import { SearchPageComponent } from 'components/SearchPage/SearchPageComponent';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import { Helmet } from 'react-helmet-async';

import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';

const SearchPage = () => {
  return (
    <ThemeWrap>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <FooterBgWrapper>
        <SearchPageComponent />
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default SearchPage;
