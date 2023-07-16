import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';

import { SearchPageComponent } from 'components/SearchPage/SearchPageComponent';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { Container } from 'components/Container/Container';

const SearchPage = () => {
  return (
    <ThemeWrap>
      <ContainerSection>
        <Container>
          <SearchPageComponent />
        </Container>
      </ContainerSection>
    </ThemeWrap>
  );
};

export default SearchPage;
