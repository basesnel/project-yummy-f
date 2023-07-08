import { styled } from "styled-components";

import footerBottomBgImage from 'assets/images/footer/footerBotomBgImage.png'
import footerTopBgImage from 'assets/images/footer/footerTopBgImage.png'

export const FooterWraper = styled.footer`
	position: relative;

	background-image: url(${footerBottomBgImage});
		background-position: right bottom;
		background-repeat: no-repeat;
`

export const CopyrightContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 14px;
	padding: 28px 0;

	@media screen and (min-width: 768px) {
		gap: 28px;
		padding: 32px 0;
	}

	p {
		color: #22252A;
		font-size: 10px;
		line-height: 1;
		letter-spacing: -0.1px;
		opacity: 0.5;

		@media screen and (min-width: 768px) {
			font-size: 14px;
			letter-spacing: -0.14px;
		}
	}

	p:first-child {
		font-weight: 500;
	}
`

export const FooterTopBgImage = styled.div`
	position: absolute;
	top: -250px;
	left: 0;
	width: 300px;
	height: 300px;
	z-index: -99;
	background-image: url(${footerTopBgImage});
	background-repeat: no-repeat;
`