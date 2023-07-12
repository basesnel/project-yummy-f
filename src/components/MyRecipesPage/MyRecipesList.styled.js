import { styled } from "styled-components";

import { SIZE } from "constants";

export const MyListOfRecipes = styled.ul`
	margin-bottom: 40px;

	@media screen and (min-width: ${SIZE.tablet}) {
		margin-bottom: 50px;
	}
`