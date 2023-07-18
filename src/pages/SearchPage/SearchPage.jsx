// import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';

import { SearchPageComponent } from 'components/SearchPage/SearchPageComponent';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';

import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';

const SearchPage = () => {
  return (
    <ThemeWrap>
      <FooterBgWrapper>
        <SearchPageComponent />
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default SearchPage;
