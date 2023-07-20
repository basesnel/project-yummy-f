import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const SectionContainer = styled.div`
  width: 163px;
  margin-bottom: 100px;
  text-align: left;
  display: none;

  @media screen and (min-width: ${SIZE.desktop}) {
    display: inline-block;
  }
`;

export const SectionTitle = styled.h2`
  color: #3e4462;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.24px;
  margin-bottom: 40px;
`;
