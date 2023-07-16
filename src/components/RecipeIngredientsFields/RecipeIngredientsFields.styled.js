import { styled } from 'styled-components';

import { SIZE } from 'constants';

export const SectionContainer = styled.div`
  margin-bottom: 44px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 100px;
  }
`;

export const Title = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
  color: #3e4462;
`;

export const SectionTitle = styled.div`
  height: 28px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 609px;
  }
`;

export const CounterContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  width: 92px;
  font-size: 14px;
  line-height: 18px;
  color: #333;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 14px;
`;

export const MinusButton = styled.button`
  margin: 0;
  padding: 7px 7px 7px 14px;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 14px;
  border-top-left-radius: 14px;
  border: none;
  background-color: transparent;
`;

export const PlusButton = styled.button`
  margin: 0;
  padding: 7px 14px 7px 7px;
  display: flex;
  align-items: center;
  border-bottom-right-radius: 14px;
  border-top-right-radius: 14px;
  border: none;
  background-color: transparent;
`;
