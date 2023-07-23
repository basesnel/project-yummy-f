import styled from 'styled-components';
import { SIZE, COLOR } from 'constants';

export const PrepSection = styled.section`
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  @media screen and (min-width: ${SIZE.tablet}) {
    // flex-direction: row;
    // justify-content: space-between;
    max-width: 768px;
    padding: 46px 32px;
    gap: 50px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    max-width: 1440px;
    flex-direction: row;
    padding: 50px 100px;
  }

  h2 {
    /* color: #3e4462; */
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.48px;

    @media screen and (min-width: ${SIZE.tablet}) {
      letter-spacing: -0.24px;
    }
  }

  ul {
    margin: 28px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 21px;

    @media screen and (min-width: ${SIZE.tablet}) {
      margin: 33.5px 0 0 0;
    }

    li {
      display: flex;
      justify-content: flex-start;
      gap: 14px;
      align-items: flex-start;

      span {
        display: inline-block;
        border-radius: 50%;
        background-color: ${COLOR.hover};
        text-align: center;
        color: #fff;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 600;
        min-width: 21px;
        height: 21px;
        padding: 5px 6px;
      }

      p {
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.2;
        letter-spacing: -0.24px;

        @media screen and (min-width: ${SIZE.tablet}) {
          font-size: 14px;
          letter-spacing: -0.28px;
          line-height: 1.3;
        }
      }
    }
  }

  img {
    margin: 40px 0 0 0;
    border-radius: 8px;
    width: 100%;
    height: 250px;

    @media screen and (min-width: ${SIZE.tablet}) {
      margin-top: 53px;
      max-width: 433px;
      height: 332px;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
      margin: 0;
      width: 433px;
    }
  }
`;
