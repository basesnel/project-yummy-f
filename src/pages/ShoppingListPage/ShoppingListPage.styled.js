import { styled } from "styled-components";

import { SIZE } from "constants";

export const ShoppingListContainer = styled.section`
	padding: 114px 0 100px;
`

export const TitleContainer = styled.div`
	margin-bottom: 50px;

	@media screen and (min-width: ${SIZE.tablet}) {
		margin-bottom: 100px;
	}

`
export const Text = styled.div`

display: flex;
height: 58px;
justify-content: space-around;
align-items: center;
background-color: #8BAA36;
border-radius: 8px;


`
