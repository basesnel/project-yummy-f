import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 67px;

  @media screen and (min-width: ${SIZE.tablet}) {
    flex-direction: row;
    width: 704px;
    gap: 32px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 800px;
    gap: 50px;
  }
`;

export const ImageHolder = styled.div`
  width: 279px;
  height: 268px;
  cursor: pointer;
  display: flex;
  margin: 0 auto;

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 357px;
    height: 344px;
  }
`;

export const ImagePlaceholder = styled.img`
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

export const FileInput = styled.input`
  opacity: 0;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 100%;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 0;
  }
`;

export const InputField = styled.input`
  padding-bottom: 19px;
  font-size: 14px;
  margin-bottom: 24px;
  border: none;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 16px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    margin-bottom: 40px;
  }
`;
