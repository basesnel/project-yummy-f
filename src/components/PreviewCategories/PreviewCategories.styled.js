import { TRANSITION } from "constants";
import { COLOR } from "constants";
import { styled } from "styled-components";

export const PreviewCategoriesWrapper = styled.section`
	padding: 64px 0 100px;
`

export const CategoriesList = styled.ul`
	> li {
		display: flex;
		flex-direction: column;
		margin-bottom: 32px;

		h2 {
			margin-bottom: 32px;

			color: #001833;
			font-size: 28px;
			font-weight: 600;
			line-height: 1;
			letter-spacing: -0.56px;
		}

		button {
			align-self: end;
			padding: 10px 24px;

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
		}
	}
	
`

export const RecipesList = styled.ul`
	margin-bottom: 24px;

	> li {
		position: relative;

		img {
			width: 100%;
		}

		div {
			position: absolute;
			bottom: 26px;
			left: 18px;
			right: 18px;
			padding: 16px;

			background-color: #FFFFFF;
			border-radius: 8px;

			h3 {
				color: #3E4462;
				font-size: 16px;
				font-weight: 500;
				line-height: 20px;
				letter-spacing: -0.24px;
			}
		}
	}
	
`

export const OtherBtn = styled.button`
	display: block;
	margin: 0 auto;
	padding: 14px 32px;

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
`