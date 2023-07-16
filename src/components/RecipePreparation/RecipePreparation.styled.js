import styled from 'styled-components';
import { SIZE } from 'constants';

export const PrepSection = styled.section`
  padding: 18px 21px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  @media screen and (min-width: ${SIZE.tablet}) {
    flex-direction: row;
  }

  h2 {
    color: #3e4462;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.48px;

    @media screen and (min-width: ${SIZE.mobile}) {
      letter-spacing: -0.24px;
    }

    ul {
      margin: 31.5px 0 0 0;

      @media screen and (min-width: ${SIZE.mobile}) {
        margin: 33.5px 0 0 0;
      }
    }

    img {
      margin: 40px 0 0 0;
      border-radius: 8px;
      width: 100%;
      height: 250px;

      @media screen and (min-width: ${SIZE.mobile}) {
        margin-top: 53px;
        max-width: 433px;
        height: 332px;
      }

      @media screen and (min-width: ${SIZE.tablet}) {
        margin: 0;
      }
    }
  }
`;
