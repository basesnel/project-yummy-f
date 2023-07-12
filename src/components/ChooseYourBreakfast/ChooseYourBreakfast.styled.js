import { styled } from "styled-components";
import { Link } from 'react-router-dom';

import {
	Arrow,
	salad,
	saladRetina,
	saladTablet,
	saladTabletRetina,
	saladDesktop,
	saladDesktopRetina
} from 'assets/images/chooseYourBreakfast';
import { ArrowHero } from "assets/images/hero";

import { SIZE, COLOR, TRANSITION } from "constants";

export const BreakfastContainer = styled.div`
	position: relative;
	max-width: 320px;
	height: 296px;
	margin: 0 auto;
	margin-bottom: 24px;

	background-image: url(${salad});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;

	@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
		background-image: url(${saladRetina});
	}

	@media screen and (min-width: ${SIZE.tablet}) {
		max-width: none;
		width: 378px;
		height: 351px;
		margin: 0;
		margin-bottom: 0;

		background-image: url(${saladTablet});
		

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${saladTabletRetina});
		}
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		width: 578px;
		height: 539px;

		background-image: url(${saladDesktop});

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${saladDesktopRetina});
		}
	}

	div {
		position: absolute;
		top: 113px;
		left: 88px;
		right: 7px;

		padding: 8px;

		background-color: ${COLOR.second};
		border-radius: 8px;

		@media screen and (min-width: ${SIZE.tablet}) {
			top: 200px;
			left: 60px;
			right: 20px;

			padding: 12px;
		}

		@media screen and (min-width: ${SIZE.desktop}) {
			top: 336px;
			left: 342px;
			right: -62px;

			padding: 16px;
		}

		p {
			margin-bottom: 7px;

			color: #3E4462;
			font-size: 12px;
			font-weight: 500;
			line-height: ${18 / 12};
			letter-spacing: -0.24px;

			@media screen and (min-width: ${SIZE.tablet}) {
				font-size: 14px;
				line-height: ${18 / 14};
			}

			@media screen and (min-width: ${SIZE.desktop}) {
				line-height: ${20 / 14};
			}


			span {
				color: ${COLOR.main};
			}
		}
	}
`

export const HeroArrowIcon = styled(ArrowHero)`
	display: none;
	position: absolute;
	top: 275px;
	left: 110px;

	@media screen and (min-width: ${SIZE.tablet}) {
		display: block;
	}
	
	@media screen and (min-width: ${SIZE.desktop}) {
		top: 428px;
		left: 400px;

		transform: rotate(-5deg);
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