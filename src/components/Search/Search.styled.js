import { styled } from "styled-components";

import { COLOR } from 'constants';
import { TRANSITION } from "constants";
import { SIZE } from "constants";

export const SearchForm = styled.form`
	display: ${(props) => {
		switch (props.ver) {
			case 'mobile':
				return 'block';
			case 'tablet':
				return 'none';
			default:
				return 'block';
		}
	}};
	position: relative;
	max-width: 333px;
	margin: 0 auto;

	@media screen and (min-width: ${SIZE.tablet}) {
		display: ${(props) => {
			switch (props.ver) {
				case 'mobile':
					return 'none';
				case 'tablet':
					return 'block';
				default:
					return 'none';
			}
		}};
		max-width: 362px;
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		max-width: 510px;
	}

	input {
		width: 100%;
		padding: 17px 130px 17px 32px;

		background-color: #FFFFFF;
		border: 1px solid rgba(35, 38, 42, 0.20);
		border-radius: 24px 44px;

		font-size: 12px;
		color: #BDBDBD;

		@media screen and (min-width: ${SIZE.tablet}) {
			padding: 18px 130px 18px 38px;
			font-size: 16px;
		}

		@media screen and (min-width: ${SIZE.desktop}) {
			padding: 23px 130px 23px 48px;
		}
	}
`

export const SearchBtn = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	padding: 15.7px 31.72px;

	border: none;
	border-radius: 24px 44px;
	background-color: ${COLOR.dark};
	color: ${COLOR.second};
	font-size: 14px;

	transition: ${TRANSITION.forHoverBgColor};

	&:hover,
	&:focus {
		background-color: ${COLOR.main};
	}


	@media screen and (min-width: ${SIZE.tablet}) {
		padding: 18px 52px;
		font-size: 16px;
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		padding: 23px 52px;
	}
`