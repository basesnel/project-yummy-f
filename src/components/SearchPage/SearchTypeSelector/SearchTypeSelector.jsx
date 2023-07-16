import { useState } from 'react';
import { SelectLabel, StyledSelect, Wrapp } from './SearchTypeSelector.styled';
import { MenuItem } from '@mui/material';
import { ReactComponent as CustomIcon } from '../../../assets/images/search/chevron-up.svg';

export const SearchTypeSelector = ({ setSelector }) => {
  const [selectedOption, setSelectedOption] = useState('Title');
  const options = ['Title', 'Ingredients'];

  const handleSelectChange = e => {
    setSelectedOption(e.target.value);
    setSelector(e.target.value);
  };

  return (
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
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </Wrapp>
  );
};
