import { styled } from 'styled-components';

import { Pagination } from '@mui/material';
import { SIZE } from 'constants';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationMUI = styled(Pagination)`
  display: flex;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 26px;
  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);

  @media screen and (min-width: ${SIZE.tablet}) {
    display: block;

    ul {
      display: flex;
      justify-content: space-between;
    }
  }
`;
