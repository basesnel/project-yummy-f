import MainTitle from 'components/MainTitle/MainTitle';
import API from 'api';
import { NoSearchResults } from './NoSearchResults/NoSearchResults';

import { TitleContainer } from './SearchPageComponent.styled';
import { SearchedRecipesList } from './SearchedRecipesList/SearchedRecipesList';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchTypeSelector } from './SearchTypeSelector/SearchTypeSelector';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { Container } from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import { Paginator } from './Paginator/Paginator';
import { useMediaQuery } from '@mui/material';

export const SearchPageComponent = () => {
  const [searchParams] = useSearchParams();
  const [selector, setSelector] = useState(
    searchParams.get('i') ? 'ingredients' : 'title'
  );
  const [recipieArr, setRecipieArr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const isLargeScreen = useMediaQuery('(min-width: 1440px)');
  const cardsPerPage = isLargeScreen ? 12 : 6;

  const getCards = async query => {
    const queryData = {
      directory: 'recipes',
      selector,
      query,
      page,
      cardsPerPage,
    };
    if (selector === 'ingredients') {
      queryData.directory = 'ingredients';
      queryData.selector = 'ingredient';
    }
    setRecipieArr(null);
    setIsLoading(true);
    try {
      const res = await API.fetchSearchResults(queryData);

      setRecipieArr(res.searchRecipeLimit ?? res.result);
      setTotalPages(res.totalPages);
    } catch (error) {
      setRecipieArr(null);
    }
    setIsLoading(false);
    window.scrollTo({ top: 100, behavior: 'smooth' });
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
          cardsPerPage={cardsPerPage}
          setPage={setPage}
        />
        <SearchInput
          ver="tablet"
          getCards={getCards}
          setRecipieArr={setRecipieArr}
          page={page}
          cardsPerPage={cardsPerPage}
          setPage={setPage}
        />
        <SearchTypeSelector setSelector={setSelector} setPage={setPage} />
        {isLoading && <Loader />}
        {recipieArr && recipieArr.length > 0 && (
          <>
            <SearchedRecipesList recipieArr={recipieArr} />
            {totalPages > 1 && (
              <Paginator totalPages={totalPages} setPage={setPage} />
            )}
          </>
        )}
        {(!recipieArr || recipieArr.length === 0) && !isLoading && (
          <NoSearchResults text={`Try looking for something else..`} />
        )}
      </ContainerSection>
    </Container>
  );
};
