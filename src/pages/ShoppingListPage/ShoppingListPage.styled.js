import { styled } from 'styled-components';

import { SIZE } from 'constants';

export const ContainerItem = styled.div`
  margin-left: -8px;
  margin-right: -8px;
  background-color: #8baa36;
  border-radius: 8px;
  display: flex;
  // justify-content: space-between;
  align-items: center;

  max-width: 359px;
  padding: 10px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin: 0;
    max-width: 704px;
    padding: 20px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    max-width: 1240px;
    padding: 17px 40px;
  }

  p {
    font-family: Poppins;
    color: #fafafa;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;

    @media screen and (min-width: ${SIZE.tablet}) {
      font-size: 18px;
      line-height: 1.44;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
      letter-spacing: 0.54px;
    }
  }
`;

export const ContainerPosition = styled.div`
  display: flex;
  margin-left: auto;
  gap: 24px;
  width: 124px;
  @media screen and (min-width: ${SIZE.tablet}) {
    gap: 78px;
    width: 231px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    gap: 142px;
    width: 295px;
  }
`;
