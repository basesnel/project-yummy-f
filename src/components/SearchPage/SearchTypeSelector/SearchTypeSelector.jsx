import { useState } from 'react';
import { SelectLabel, StyledSelect, Wrapp } from './SearchTypeSelector.styled';
import { MenuItem } from '@mui/material';
import { ReactComponent as CustomIcon } from '../../../assets/images/search/chevron-up.svg';

export const SearchTypeSelector = ({ setSelector }) => {
  const [selectedOption, setSelectedOption] = useState('title');
  const options = ['title', 'ingredients'];

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
  );
};
