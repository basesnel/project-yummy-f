import { debounce } from 'lodash';
import MainTitle from 'components/MainTitle/MainTitle';
import API from 'api';
import { NoSearchResults } from './NoSearchResults/NoSearchResults';

import { TitleContainer } from './SearchPageComponent.styled';
import { SearchedRecipesList } from './SearchedRecipesList/SearchedRecipesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchTypeSelector } from './SearchTypeSelector/SearchTypeSelector';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { Container } from 'components/Container/Container';
import Loader from 'components/Loader/Loader';

export const SearchPageComponent = () => {
  const [selector, setSelector] = useState('title');
  const [recipieArr, setRecipieArr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? null);

  useEffect(() => {
    if (query) {
      const queryData = { directory: 'recipes', selector, query };
      if (selector === 'ingredients') {
        queryData.directory = 'ingredients';
        queryData.selector = 'ingredient';
      }

      const debouncedGetCards = debounce(async queryData => {
        try {
          setRecipieArr(await API.fetchSearchResults(queryData));
        } catch (error) {
          setRecipieArr(null);
        }
      }, 2000);
      setIsLoading(true);
      debouncedGetCards(queryData);

      setIsLoading(false);
    }
  }, [query, selector]);

  return (
    <Container>
      <ContainerSection>
        <TitleContainer>
          <MainTitle title={'Search'} />
        </TitleContainer>
        <SearchInput
          ver="mobile"
          setQuery={setQuery}
          query={query}
          setSearchParams={setSearchParams}
        />
        <SearchInput
          ver="tablet"
          setQuery={setQuery}
          query={query}
          setSearchParams={setSearchParams}
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
