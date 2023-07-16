import MainTitle from 'components/MainTitle/MainTitle';
import API from 'api';
import { NoSearchResults } from './NoSearchResults/NoSearchResults';

import { TitleContainer } from './SearchPageComponent.styled';
import { SearchedRecipesList } from './SearchedRecipesList/SearchedRecipesList';
import { useState } from 'react';

import { SearchInput } from './SearchInput/SearchInput';
import { SearchTypeSelector } from './SearchTypeSelector/SearchTypeSelector';

export const SearchPageComponent = () => {
  const [selector, setSelector] = useState('Title');
  const [recipieArr, setRecipieArr] = useState(null);
  const getCards = async query => {
    console.log(query, selector);
    const res = await API.fetchSearchResults({
      directory: 'ingredients',
      selector: 'ingredient',
      query,
    });
    setRecipieArr(res);
    console.log(res);
  };
  return (
    <>
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
    </>
  );
};
