import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const RecipeForm = styled.form`
    margin-top: 72px;

    @media screen and (min-width: ${SIZE.tablet}) {
        margin-top: 100px;
    }
`;
