import { useState } from 'react';
import { SearchBtn, SearchForm } from './Search.styled';
import { useNavigate } from 'react-router';

export function Search() {
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
        <SearchForm onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={e => {
                    setSearchText(e.target.value);
                }}
                value={searchText}
            />
            <SearchBtn type="submit">Search</SearchBtn>
        </SearchForm>
    );
}
