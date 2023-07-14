import styled from 'styled-components';
import { SIZE } from 'constants';

export const MainSection = styled.section`
  padding: 50px 100px;
`;

export const ListHead = styled.div`
  background-color: #8baa36;
  border-radius: 8px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  p {
    font-family: Poppins;
    color: #fafafa;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.3px;

    @media screen and (min-width: ${SIZE.mobile}) {
      font-size: 18px;
      letter-spacing: 0.54px;
    }
  }
`;

export const List = styled.ul`
  margin: 24px 0 0 0;

  @media screen and (min-width: ${SIZE.mobile}) {
    margin-top: 32px;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 50px;
  }
`;
