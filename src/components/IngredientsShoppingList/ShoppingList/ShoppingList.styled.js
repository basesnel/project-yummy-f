import { styled } from 'styled-components';
import { SIZE} from 'constants';

export const WrapperList = styled.ul`
  margin: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  padding-left: 20px;

  @media screen and (min-width: ${SIZE.mobile}) {
    margin-top: 32px;
    gap: 24px;
    
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 50px;
    
  }
`;