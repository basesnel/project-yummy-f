import { StyleSheetManager } from 'styled-components';
import { PaginationItem } from '@mui/material';

import { PaginationContainer, PaginationMUI } from './Paginator.styled';

export function Paginator({ $pageQty, $page, $setPage }) {
  function handleChange(_, num) {
    $setPage(num);
  }
  return (
    <>
      <StyleSheetManager shouldForwardProp={() => true}>
        <PaginationContainer>
          <PaginationMUI
            count={$pageQty}
            page={$page}
            onChange={handleChange}
            color="primary"
            siblingCount={0}
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
      </StyleSheetManager>
    </>
  );
}
