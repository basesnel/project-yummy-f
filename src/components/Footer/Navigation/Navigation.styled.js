import { styled } from "styled-components";
import { ReactComponent as FooterLogo } from 'assets/images/footer/logo.svg';

export const NavigationWrapper = styled.div`
	padding: 28px 0 18px;

	background-color: #22252A;

	@media screen and (min-width: 768px) {
		padding: 50px 0 24px;
	}

	@media screen and (min-width: 1440px) {
		padding: 64px 0 50px;
	}
`

export const NavigationContainer = styled.div`
	> div {
		@media screen and (min-width: 1440px) {
			display: flex;
			gap: 235px;
			margin-bottom: 41px;
		}
	}
	
`

export const FooterTabletWrapper = styled.div`
	
	@media screen and (min-width: 768px) {
		display: flex;
		gap: 175px;
		margin-bottom: 72px;
	}

	@media screen and (min-width: 1440px) {
		gap: 130px;
		margin-bottom: 0;
	}
	
`

export const FooterTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: 768px) {
		align-items: start;
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

		@media screen and (min-width: 1440px) {
			margin-bottom: 40px;
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

	> ul {
		display: none;
		padding-left: 20px;
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

			@media screen and (min-width: 1440px) {
				font-size: 18px;
				line-height: ${24 / 18};
				letter-spacing: -0.36px;

				&:not(:last-child) {
					margin-bottom: 12px;
				}
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