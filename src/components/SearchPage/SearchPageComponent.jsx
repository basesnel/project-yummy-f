import MainTitle from 'components/MainTitle/MainTitle';
import API from 'api';
import { NoSearchResults } from './NoSearchResults/NoSearchResults';

import { TitleContainer } from './SearchPageComponent.styled';
import { SearchedRecipesList } from './SearchedRecipesList/SearchedRecipesList';
import { useState } from 'react';

import { SearchInput } from './SearchInput/SearchInput';
import { SearchTypeSelector } from './SearchTypeSelector/SearchTypeSelector';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { Container } from 'components/Container/Container';

export const SearchPageComponent = () => {
  const [selector, setSelector] = useState('title');
  const [recipieArr, setRecipieArr] = useState(null);
  const getCards = async query => {
    // console.log(query, selector);
    const queryData = { directory: 'recipes', selector, query };
    if (selector === 'ingredients') {
      queryData.directory = 'ingredients';
      queryData.selector = 'ingredient';
    }
    const res = await API.fetchSearchResults(queryData);
    setRecipieArr(res);
    // console.log(res);
  };
  return (
    <ContainerSection>
      <Container>
        <TitleContainer>
          <MainTitle title={'Search'} />
        </TitleContainer>
        <SearchInput ver="mobile" getCards={getCards} />
        <SearchInput ver="tablet" getCards={getCards} />

        <SearchTypeSelector setSelector={setSelector} />

        {recipieArr ? (
          <SearchedRecipesList recipieArr={recipieArr} />
        ) : (
          <NoSearchResults />
        )}
      </Container>
    </ContainerSection>
  );
};
