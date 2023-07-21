import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import { SIZE } from 'constants';

export const SectionContainer = styled.div`
  width: 100%;

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 319px;
  }
`;

export const SectionTitle = styled.h2`
  /* color: #3e4462; */
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.24px;
  margin-bottom: 32px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 40px;
  }
`;

export const RecipesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  margin-bottom: 24px;
  width: 100%;
  max-height: 98px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 336px;
  }
`;

export const ListItemLink = styled(Link)`
  display: block;
  width: 100%;
  padding-bottom: 13px;
  padding-right: 14px;
  text-decoration: none;
`;

export const RecipeInfoContainer = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;

export const PreviewHolder = styled.div`
  width: 104px;
  height: 85px;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 102px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 97px;
  }
`;

export const Preview = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  width: 213px;
  display: inline-flex;
  flex-direction: column;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 208px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 198px;
  }
`;

export const RecipeName = styled.h4`
  display: inline;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 4px;
  /* color: #3e4462; */
`;

export const RecipeDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #7e7e7e;
`;
