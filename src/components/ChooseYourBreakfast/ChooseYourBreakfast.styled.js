import { styled } from "styled-components";
import { Link } from 'react-router-dom';

import { Arrow, salad, saladRetina } from 'assets/images/chooseYourBreakfast';
import { SIZE, COLOR, TRANSITION } from "constants";

export const BreakfastContainer = styled.div`
	width: 320px;
	height: 296px;
	padding-top: 113px;
	padding-left: 88px;

	background-image: url(${salad});

	@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
		background-image: url(${saladRetina});
	}
/* 
	@media screen and (min-width: ${SIZE.tablet}) {

	} */

	div {
		padding: 8px;

		background-color: ${COLOR.second};
		border-radius: 8px;

		p {
			margin-bottom: 7px;

			color: #3E4462;
			font-size: 12px;
			font-weight: 500;
			line-height: ${18 / 12};
			letter-spacing: -0.24px;

			span {
				color: ${COLOR.main};
			}
		}
	}
`

export const SeeRecipesBtn = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 4px;

	text-decoration: none;
	color: #3E4462;
	font-size: 10px;
	line-height: ${12 / 10};
	letter-spacing: 0.2px;

	transition: ${TRANSITION.forHoverColor};

	&:hover,
	&:focus {
		color: ${COLOR.main};
	}
`

export const ArrowRight = styled(Arrow)`
	width: 18px;
	height: 18px;

	stroke: currentColor;
`