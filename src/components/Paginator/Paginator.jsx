import { StyleSheetManager } from 'styled-components';
import { PaginationItem, useTheme } from '@mui/material';

import { PaginationContainer, PaginationMUI } from './Paginator.styled';

export function Paginator() {
  const theme = useTheme();
  return (
    <>
      <StyleSheetManager shouldForwardProp={() => true}>
        <PaginationContainer>
          <PaginationMUI
            count={5}
            color="primary"
            siblingCount={0}
            renderItem={item => (
              <PaginationItem
                {...item}
                sx={{
                  // fontFamily: 'Poppins',
                  // color: item.selected ? '#22252A' : '#656565',
                  // fontSize: '12px',
                  // fontWeight: 500,
                  // margin: 0,

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
