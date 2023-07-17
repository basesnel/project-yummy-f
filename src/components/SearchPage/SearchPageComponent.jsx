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
import Loader from 'components/Loader/Loader';

export const SearchPageComponent = () => {
  const [selector, setSelector] = useState('title');
  const [recipieArr, setRecipieArr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getCards = async query => {
    const queryData = { directory: 'recipes', selector, query };
    if (selector === 'ingredients') {
      queryData.directory = 'ingredients';
      queryData.selector = 'ingredient';
    }
    setIsLoading(true);
    try {
      const res = await API.fetchSearchResults(queryData);

      setRecipieArr(res);
    } catch (error) {
      setRecipieArr(null);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <ContainerSection>
        <TitleContainer>
          <MainTitle title={'Search'} />
        </TitleContainer>
        <SearchInput
          ver="mobile"
          getCards={getCards}
          setRecipieArr={setRecipieArr}
        />
        <SearchInput
          ver="tablet"
          getCards={getCards}
          setRecipieArr={setRecipieArr}
        />

        <SearchTypeSelector setSelector={setSelector} />
        {isLoading && <Loader />}
        {recipieArr ? (
          <SearchedRecipesList recipieArr={recipieArr} />
        ) : (
          <NoSearchResults />
        )}
      </ContainerSection>
    </Container>
  );
};
