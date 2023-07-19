import { useState } from 'react';
import { SearchForm } from './Search.styled';
import { useNavigate } from 'react-router';
import InputMUI from './InputMUI';
import ButtonMUI from './ButtonMui';

export function Search({ ver }) {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (searchText.trim() === '') {
      //!   push message
      return;
    }
    navigate(`/search?q=${searchText}`);
  }

  return (
    <SearchForm onSubmit={handleSubmit} $ver={ver}>
      <InputMUI
        type="text"
        onChange={e => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
      <ButtonMUI type="submit">Search</ButtonMUI>
      {/* <SearchBtn type="submit">Search</SearchBtn> */}
    </SearchForm>
  );
}
