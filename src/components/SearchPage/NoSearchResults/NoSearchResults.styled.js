import { SIZE } from 'constants';
import styled from 'styled-components';

export const NoResultsWrapp = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${SIZE.tablet}) {
    gap: 32px;
    margin-bottom: 100px;
  }
`;
export const NoResultText = styled.p`
  opacity: 0.5;
  font-size: 14px;

  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.28px;
  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 24px;
  }
`;
