import { styled } from "styled-components";

import { Link } from 'react-router-dom';

export const LinkList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 32px;

	li:not(:last-child) {
		margin-bottom: 14px;
	}
`

export const StyledLink = styled(Link)`
	color: #FAFAFA;
	font-size: 14px;
	font-weight: 500;
	line-height: ${18 / 14};
	letter-spacing: -0.28px;
	text-decoration: none;

	&:hover,
	&:focus {
		color: #8BAA36;
	}
`