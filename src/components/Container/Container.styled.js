import { styled } from 'styled-components';
import { SIZE, PADDING } from 'constants';
console.log(SIZE);
console.log(PADDING);
export const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${PADDING.mobile};
  padding-right: ${PADDING.mobile};

  @media screen and (min-width: ${SIZE.mobile}) {
    width: ${SIZE.mobile};
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    padding-left: ${PADDING.tablet};
    padding-right: ${PADDING.tablet};
    width: ${SIZE.tablet};
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding-left: ${PADDING.desktop};
    padding-right: ${PADDING.desktop};
    min-width: ${SIZE.desktop};
  }
`;
