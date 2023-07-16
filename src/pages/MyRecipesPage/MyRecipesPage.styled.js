import { styled } from "styled-components";

import { SIZE } from "constants";

export const MyRecipesContainer = styled.section`
	padding: 114px 0 100px;
	background-color: #FAFAFA;
`

export const TitleContainer = styled.div`
	margin-bottom: 50px;

	@media screen and (min-width: ${SIZE.tablet}) {
		margin-bottom: 100px;
	}
`
