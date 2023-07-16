import styled from 'styled-components';
import { Select } from '@mui/material';
import { SIZE } from 'constants';

export const Wrapp = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 28px;
    gap: 18px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    margin-top: 27px;
    gap: 18px;
  }
`;

export const SelectLabel = styled.p`
  color: #001833;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;
  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    box-sizing: border-box;
    width: 146px;
    height: 34px;
    padding: 8px 0 8px 14px;
    font-size: 12px;
    @media screen and (min-width: ${SIZE.tablet});
  }

  input {
    width: 146px;
    height: 34px;
  }
  svg {
    right: 14px;
  }
  border-radius: 6px;
  border: none;
  opacity: 0.5;

  @media screen and (min-width: ${SIZE.tablet}) {
    // .MuiSelect-select {
    //   width: 175px;
    //   height: 41px;
    //   padding: 10px 0 10px 14px;
    // }
    input {
      width: 175px;
      height: 41px;
    }
  }
`;
