import { PaginationItem } from '@mui/material';

import {
  PaginationContainer,
  PaginationMUI,
} from 'components/Paginator/Paginator.styled';

export function Paginator({ totalPages, setPage }) {
  const handlePageChange = (event, page) => {
    setPage(page);
  };

  return (
    <>
      <PaginationContainer>
        <PaginationMUI
          count={totalPages}
          color="primary"
          siblingCount={0}
          onChange={handlePageChange}
          renderItem={item => (
            <PaginationItem
              {...item}
              sx={{
                fontFamily: 'Poppins',
                color: item.selected ? '#22252A' : '#656565',
                fontSize: '12px',
                fontWeight: 500,
                margin: 0,
              }}
            />
          )}
        />
      </PaginationContainer>
    </>
  );
}
