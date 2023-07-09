import { styled } from "styled-components";

import { COLOR } from 'constants';
import { TRANSITION } from "constants";

export const SearchForm = styled.form`
	position: relative;

	input {
		width: 100%;
		padding: 17px 130px 17px 32px;

		background-color: #FFFFFF;
		border: 1px solid rgba(35, 38, 42, 0.20);
		border-radius: 24px 44px;

		font-size: 12px;
		color: #BDBDBD;
	}
`

export const SearchBtn = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	padding: 15.7px 31.72px;

	border: none;
	border-radius: 24px 44px;
	background-color: ${COLOR.dark};
	color: ${COLOR.second};

	transition: ${TRANSITION.forHoverBgColor};

	&:hover,
	&:focus {
		background-color: ${COLOR.main};
	}
`