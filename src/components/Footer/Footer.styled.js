import { styled } from "styled-components";

import footerBottomBgImage from 'assets/images/footer/footerBotomBgImage.png'
import footerTopBgImage from 'assets/images/footer/footerTopBgImage.png'

export const FooterWraper = styled.footer`
	position: relative;

	background-image: url(${footerBottomBgImage});
		background-position: right bottom;
		background-repeat: no-repeat;
	
	div:last-child {
		display: flex;
		justify-content: center;
		gap: 14px;
		padding: 28px 0;

		p {
			color: #22252A;
			font-size: 10px;
			line-height: 1;
			letter-spacing: -0.1px;
			opacity: 0.5;
		}

		p:first-child {
			font-weight: 500;
		}
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