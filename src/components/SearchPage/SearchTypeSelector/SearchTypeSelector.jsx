import { useState } from 'react';
import { SelectLabel, StyledSelect, Wrapp } from './SearchTypeSelector.styled';
import { MenuItem } from '@mui/material';
import { ReactComponent as CustomIcon } from '../../../assets/images/search/chevron-up.svg';
import { useSearchParams } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
export const SearchTypeSelector = ({ setSelector, setPage }) => {
  const [searchParams] = useSearchParams();

  const [selectedOption, setSelectedOption] = useState(
    searchParams.get('i') ? 'ingredients' : 'title'
  );
  const options = ['title', 'ingredients'];

  const handleSelectChange = e => {
    setSelectedOption(e.target.value);
    setSelector(e.target.value);
    setPage(1);
  };

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <Wrapp>
        <SelectLabel>
          Search by<span>&#x003A;</span>
        </SelectLabel>
        <StyledSelect
          labelId="select-label"
          id="select"
          value={selectedOption}
          onChange={handleSelectChange}
          IconComponent={CustomIcon}
          style={{ textTransform: 'capitalize' }}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              value={option}
              style={{ opacity: 0.5, textTransform: 'capitalize' }}
            >
              {option}
            </MenuItem>
          ))}
        </StyledSelect>
      </Wrapp>
    </StyleSheetManager>
  );
};
