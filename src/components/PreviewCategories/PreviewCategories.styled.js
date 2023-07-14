import { TRANSITION } from "constants";
import { SIZE } from "constants";
import { COLOR } from "constants";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const PreviewCategoriesWrapper = styled.section`
	padding: 64px 0 100px;

	@media screen and (min-width: ${SIZE.tablet}) {
		padding: 72px 0 100px;
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		padding: 100px 0 118px;
	}
`

export const CategoriesBox = styled.div`
	display: flex;
	flex-direction: column;
`

export const CategoriesList = styled.ul`
	margin-bottom: 40px;

	@media screen and (min-width: ${SIZE.tablet}) {
		margin-bottom: 32px;
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		margin-bottom: 102px;
	}

	> li {
		display: flex;
		flex-direction: column;

		&:not(:last-child){
			margin-bottom: 32px;
		}
		

		@media screen and (min-width: ${SIZE.tablet}) {
			&:not(:last-child){
				margin-bottom: 50px;
			}
		}

		@media screen and (min-width: ${SIZE.desktop}) {
			&:not(:last-child){
				margin-bottom: 100px;
			}
		}

		h2 {
			margin-bottom: 32px;

			color: #001833;
			font-size: 28px;
			font-weight: 600;
			line-height: 1;
			letter-spacing: -0.56px;

			@media screen and (min-width: ${SIZE.tablet}) {
				margin-bottom: 40px;

				font-size: 44px;
				letter-spacing: -0.88px;
			}

			@media screen and (min-width: ${SIZE.desktop}) {
				margin-bottom: 50px;
			}
		}
	}
	
`


export const RecipesList = styled.ul`
	margin-bottom: 24px;

	@media screen and (min-width: ${SIZE.tablet}) {
		margin-bottom: 40px;

		display: flex;
		gap: 32px;
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		margin-bottom: 50px;

		gap: 14px;
	}

	> li {
		@media screen and (min-width: ${SIZE.tablet}) {
			flex-basis: calc((100% - 32px) / 2);
		}

		@media screen and (min-width: ${SIZE.desktop}) {
			flex-basis: calc((100% - 14px * 3) / 4);
		}
	}
	
`

export const RecipesLink = styled(Link)`
	position: relative;

	transition: ${TRANSITION.forHoverOpacity};

	&:hover,
	&:focus {
		opacity: 0.7;
	}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		div {
			position: absolute;
			bottom: 26px;
			left: 18px;
			right: 18px;
			padding: 16px;

			background-color: #FFFFFF;
			border-radius: 8px;

			@media screen and (min-width: ${SIZE.desktop}) {
				bottom: 23px;
				left: 16px;
				right: 16px;
			}

			h3 {
				color: #3E4462;
				font-size: 16px;
				font-weight: 500;
				line-height: 20px;
				letter-spacing: -0.24px;
			}
		}
`

export const SeeAllBtn = styled(Link)`
	align-self: end;
	padding: 10px 24px;
	text-decoration: none;

	border: none;
	border-radius: 6px;
	background-color: #8AA936;

	color: ${COLOR.second};
	font-size: 14px;
	line-height: ${18 / 14};
	transition: ${TRANSITION.forHoverColor};

	&:hover,
	&:focus {
		color: ${COLOR.dark};
	}
`

export const OtherBtn = styled(Link)`
	align-self: center;
	padding: 14px 32px;
	text-decoration: none;

	background-color: transparent;
	border-radius: 24px 44px;
	border: 1px solid ${COLOR.main};

	color: ${COLOR.dark};
	font-size: 14px;

	transition: ${TRANSITION.forHoverColor}, ${TRANSITION.forHoverBgColor};

	&:hover,
	&:focus {
		background-color: ${COLOR.main};
		color: ${COLOR.second};
	}

	@media screen and (min-width: ${SIZE.tablet}) {
		padding: 20px 52px;

		font-size: 16px;
	}
`