import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const SectionContainer = styled.div`
  margin-bottom: 18px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  color: #3e4462;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.24px;
  margin-bottom: 24px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 32px;
  }
`;

export const TextFields = styled.textarea`
  width: 100%;
  border-color: transparent;
  background-color: rgba(217, 217, 217, 0.157);
  min-height: 154px;
  border-radius: 6px;
  font-size: 14px;
  line-height: normal;
  color: #000;
  padding: 10px 16px;
  resize: none;
  outline: none;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 505px;
    min-height: 224px;
    font-size: 18px;
    padding: 16px 23px;
  }
`;
