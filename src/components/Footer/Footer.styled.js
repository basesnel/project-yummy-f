import { styled } from "styled-components";

import footerBottomBgImage from 'assets/images/footer/footerBotomBgImage.png'

export const FooterWraper = styled.footer`
	
	div:last-child {
		display: flex;
		justify-content: center;
		gap: 14px;
		padding: 28px 0;

		background-image: url(${footerBottomBgImage});
		background-repeat: no-repeat;
		background-position-x: right;
		background-position-y: bottom;

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