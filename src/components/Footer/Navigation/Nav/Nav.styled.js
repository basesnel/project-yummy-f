import { styled } from "styled-components";

import { Link } from 'react-router-dom';
import { SIZE, COLOR, TRANSITION } from 'constants';

export const LinkList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 32px;

	li:not(:last-child) {
		margin-bottom: 14px;
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		align-items: start;
		margin-bottom: 0;

		li {
			width: 89px;
		}

		li:not(:last-child) {
			margin-bottom: 24px;
		}
	}
`

export const StyledLink = styled(Link)`
	color: ${COLOR.second};
	font-size: 14px;
	font-weight: 500;
	line-height: ${18 / 14};
	letter-spacing: -0.28px;
	text-decoration: none;

	transition: ${TRANSITION.forHoverColor};

	&:hover,
	&:focus {
		color: ${COLOR.main};
	}
`