import { styled } from "styled-components";
import { ReactComponent as FooterLogo } from 'assets/images/footer/logo.svg';

export const NavigationWrapper = styled.div`
	padding: 28px 0 18px;

	background-color: #22252A;

	@media screen and (min-width: 768px) {
		padding: 50px 0 24px;
	}
`

export const NavigationContainer = styled.div`
	> div {
		@media screen and (min-width: 768px) {
			display: flex;
			gap: 175px;
			margin-bottom: 72px;
		}
	}
	
`
export const FooterTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: 768px) {
		align-items: start;
	}

	> ul {
		display: none;
		padding-left: 18px;
		list-style: outside;

		@media screen and (min-width: 768px) {
			display: block;
		}

		li {
			color: #FAFAFA;
			font-size: 14px;
			line-height: ${18 / 14};
			letter-spacing: -0.28px;

			&:not(:last-child) {
				margin-bottom: 10px;
			}
		}
	} 
	
	
	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-bottom: 39px;

		@media screen and (min-width: 768px) {
			gap: 12px;
			margin-bottom: 24px;
		}

		h3 {
			color: #FAFAFA;
			font-size: 18px;
			font-weight: 700;
			line-height: 1;
			letter-spacing: 0.27px;

			@media screen and (min-width: 768px) {
				font-size: 28px;
				letter-spacing: 0.42px;
			}
		}
	}
`

export const NavLogo = styled(FooterLogo)`
	width: 32px;
	height: 32px;
	@media screen and (min-width: 768px) {
		width: 44px;
		height: 44px;
	}
`