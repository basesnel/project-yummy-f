import { StyleSheetManager } from 'styled-components';
import { PaginationItem, useTheme } from '@mui/material';

import { PaginationContainer, PaginationMUI } from './Paginator.styled';

export function Paginator({ $pageQty, $page, $setPage }) {
  const theme = useTheme();
  function handleChange(_, num) {
    $setPage(num);
  }
  return (
    <>
      <StyleSheetManager shouldForwardProp={() => true}>
        <PaginationContainer>
          <PaginationMUI
            sx={{ backgroundColor: theme.palette.background.input }}
            count={$pageQty}
            page={$page}
            onChange={handleChange}
            siblingCount={0}
            renderItem={item => (
              <PaginationItem
                {...item}
                sx={{
                  backgroundColor: item.selected
                    ? theme.palette.background.paginator + '!important'
                    : 'transparent',
                  color: item.selected
                    ? theme.palette.paginator.active + '!important'
                    : theme.palette.paginator.inactive,
                  border: 'none !important',
                  fontFamily: 'Poppins',
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
